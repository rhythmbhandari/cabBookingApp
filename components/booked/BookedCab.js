import React, { useCallback, useState } from 'react';
import { View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {fetchMyCabs}  from '../../data';
import BookedCabItem from './BookedCabItem';
import EmptyState from './EmptyState';
import styles from './styles';
import { showCancelAlert } from '../../utils/cancelUtils';

const BookedCab = ({ route }) => {
    const [myCabs, setMyCabs] = useState([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            fetch();
        }, [route.params?.refresh])
    );

    const fetch = async () => {
        setLoading(true);
        try {
            const data = await fetchMyCabs();
            setMyCabs(data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    const handleCancelBooking = (id) => {
        showCancelAlert(id, setMyCabs); 
    };

    const renderItem = ({ item }) => (
        <BookedCabItem cab={item} onCancelBooking={handleCancelBooking} />
    );

    if (loading) {
        return (
            <SafeAreaView style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {myCabs.length === 0 ? (
                <EmptyState message="No cabs booked yet!" />
            ) : (
                <FlatList
                    data={myCabs}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContent}
                />
            )}
        </SafeAreaView>
    );
};

export default BookedCab;

import React, { useCallback, useState } from 'react';
import { View, FlatList, SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CabItem from './CabItem';
import { fetchCabs } from '../../data';
import styles from './styles';

const CabsList = ({ navigation }) => {
    const [cabData, setCabData] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadCabs = useCallback(async () => {
        setLoading(true);
        try {
            const cabs = await fetchCabs();
            setCabData(cabs);
        } catch (error) {
            console.error('Failed to load cabs:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            loadCabs();
        }, [loadCabs])
    );

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cabData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CabItem
                        cab={item}
                        onPress={() => navigation.navigate('CabDetail', {
                            cabId: item.id,
                            companyName: item.companyName,
                            cabModel: item.modelName,
                            cabImage: item.imageUrl,
                        })}
                    />
                )}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyMessage}>No cabs available.</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

export default CabsList;

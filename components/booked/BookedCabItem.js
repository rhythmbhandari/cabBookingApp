import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

const BookedCabItem = ({ cab, onCancelBooking }) => {
    const handleCancel = () => {
        onCancelBooking(cab.id);
    };

    return (
        <View style={styles.cabItemContainer}>
            <View style={styles.cabDetailsContainer}>
                <Image source={{ uri: cab.imageUrl }} style={styles.cabImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.cabCompanyName}>{cab.companyName}</Text>
                    <Text style={styles.cabModel}>{cab.modelName}</Text>
                    <Text style={styles.cabDetail}>Passengers: {cab.passenger}</Text>
                    <Text style={styles.cabDetail}>Cost: ${cab.cost}/hrs</Text>
                    <Text style={styles.cabDetail}>Rating: {cab.rating}/10</Text>
                </View>
            </View>
            <Pressable style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>Cancel Booking</Text>
            </Pressable>
        </View>
    );
};

export default BookedCabItem;

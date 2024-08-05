import React from 'react';
import { Pressable, Text, Alert } from 'react-native';
import { saveBooking } from '../../data';
import styles from './styles';

const BookingButton = ({ cabDetails, companyName, cabModel, cabImage, myCabs, navigation }) => {
    const handleBookCab = async () => {
        try {
            if (!canBookCab(myCabs, cabDetails, navigation)) return;

            const payload = {
                cabID: cabDetails.id,
                companyName: companyName,
                model: cabModel,
                imageUrl: cabImage,
                cost: cabDetails.cost,
                passenger: cabDetails.passenger,
                rating: cabDetails.rating,
            };

            await saveBooking(payload);
            Alert.alert(MESSAGES.SUCCESS, MESSAGES.BOOKING_SUCCESS);
            navigation.reset({
                index: 0,
                routes: [{ name: 'CabsList', params: { refresh: true } }],
            });
            navigation.navigate('MyCab', { refresh: true });
        } catch (error) {
            Alert.alert(MESSAGES.BOOKING_ERROR);
        }
    };

    return (
        <Pressable style={styles.button} onPress={handleBookCab}>
            <Text style={styles.buttonText}>Book Cab</Text>
        </Pressable>
    );
};

export default BookingButton;

const MESSAGES = {
    BOOKING_LIMIT: 'You can only book two cabs at a time.',
    CAB_ALREADY_BOOKED: 'You have already booked this cab.',
    BOOKING_SUCCESS: 'Booking successful!',
    SUCCESS: 'Success!',
    BOOKING_ERROR: 'Booking Failed!',
    BOOKING_LIMIT_REACHED: 'Booking Limit Reached'
};

const canBookCab = (myCabs, cabDetails, navigation) => {
    const isCabAlreadyBooked = myCabs.some(cab => cab.cabID === cabDetails.id);
    if (myCabs.length >= 2) {
        Alert.alert(MESSAGES.BOOKING_LIMIT_REACHED, MESSAGES.BOOKING_LIMIT);
        
        navigation.reset({
            index: 0,
            routes: [{ name: 'CabsList', params: { refresh: true } }],
        });
        return false;
    }
    if (isCabAlreadyBooked) {
        Alert.alert(MESSAGES.BOOKING_ERROR, MESSAGES.CAB_ALREADY_BOOKED);

        navigation.reset({
            index: 0,
            routes: [{ name: 'CabsList', params: { refresh: true } }],
        });
        return false;
    }
    return true;
};
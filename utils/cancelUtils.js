import { Alert } from 'react-native';
import {cancelBooking} from '../data';

export const showCancelAlert = (id, setMyCabs) => {
    Alert.alert(
        'Cancel Booking',
        'Are you sure you want to cancel your booking?',
        [
            {
                text: 'Confirm',
                onPress: async () => {
                    try {
                        await cancelBooking(id);
                        setMyCabs(prevCabs => prevCabs.filter(cab => cab.id !== id));
                        Alert.alert('Success', 'Booking cancelled successfully.');

                    } catch (error) {
                        Alert.alert('Error', 'There was an error cancelling your booking.');
                    }
                },
            },
            {
                text: 'Cancel',
            },
        ]
    );
};

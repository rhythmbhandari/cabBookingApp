import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookedCab from '../components/booked/BookedCab';

const Stack = createNativeStackNavigator();

export const commonHeaderOptions = {
    headerStyle: {
        backgroundColor: '#4A90E2', 
    },
    headerTintColor: '#ffffff', 
    headerTitleAlign: 'center', 
    headerTitleStyle: {
        fontWeight: 'bold', 
    },
};

export default function MyCab() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BookedCab"
                component={BookedCab}
                options={{
                    ...commonHeaderOptions,
                    title: 'My Cab',
                }}
            />
        </Stack.Navigator>
    );
}

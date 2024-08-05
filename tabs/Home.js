import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import CabDetail from '../components/details/CabDetail'
import CabsList from '../components/list/CabsList'
import { commonHeaderOptions } from './MyCab'

const CabStack = createNativeStackNavigator()

export default function Home() {
    const navigation = useNavigation()
    const [isFirstFocus, setIsFirstFocus] = useState(true)

    useFocusEffect(() => {
        if (isFirstFocus) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'CabsList' }],
            })
            setIsFirstFocus(false)
        }
    })

    return (
        <CabStack.Navigator>
            <CabStack.Screen
                name="CabsList"
                options={{ ...commonHeaderOptions, title: 'Cabs List' }}
                component={CabsList}
            />

            <CabStack.Screen
                name="CabDetail"
                component={CabDetail}
                options={{ ...commonHeaderOptions, title: 'Cab Detail' }}
            />
        </CabStack.Navigator>
    )
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './tabs/Home'
import MyCab from './tabs/MyCab'

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if (route.name === 'MyCab') {
                            iconName = focused ? 'car' : 'car'
                        } else if (route.name === 'Home') {                            
                            iconName = focused ? 'home' : 'home'
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#ffffff',
                    tabBarInactiveTintColor: '#b0b0b0', 
                    tabBarShowLabel: true, 
                    tabBarStyle: {
                        backgroundColor: '#4A90E2', 
                        borderTopWidth: 0, 
                        
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="MyCab" component={MyCab} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

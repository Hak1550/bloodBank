import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { HomeIcon } from '@material-ui/icons/Home';
import Home from '../Screens/Home'
import Donor from '../Screens/DonorScreen'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import Notification from '../Screens/Notification';
import OnBoardingSwiper from '../Screens/OnBoardingScreen';
import AddDonor from '../Screens/AddDonor';




const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const LoginStack = createStackNavigator();




const LoginScreenStack = ({ navigation }) => (

    <LoginStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#1976D2'
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                fontWeight: 'bold',
            }
        }}
    >

        <LoginStack.Screen
            name="Onboarding"
            component={OnBoardingSwiper}
            options={{
                header: () => null
            }}
        />
        < LoginStack.Screen
            name="Login"
            component={Login}
            options={{ header: () => null }}
        />
        < LoginStack.Screen
            name="SignUp"
            component={SignUp}
            options={{ header: () => null }}
        />
        < LoginStack.Screen
            name="AddDonor"
            component={AddDonor}
            options={{ header: () => null }}
        />
    </LoginStack.Navigator >

);








const HomeScreen = () => {
    return (


        <Tab.Navigator

            screenOptions={() => ({
                tabBarIcon: () => {
                    return
                    <HomeIcon size={25} />
                }
            })}

            tabBarOptions={{
                activeTintColor: '#333',
                inactiveTintColor: '#3337',
                labelStyle: { fontSize: 12, fontWeight: 'bold' },
                style: { backgroundColor: '#F61F1F' },
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                }} />
            <Tab.Screen name="Donor" component={Donor} />
            <Tab.Screen name="Notification" component={Notification} />
        </Tab.Navigator>

    )
}




const MainRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login Screen" component={LoginScreenStack} options={{ header: () => null }} />
                <Stack.Screen name="Blood Bank" component={HomeScreen}
                    // options={{ header: () => null }}
                    options={{
                        headerStyle: {
                            backgroundColor: '#F61F1F',
                            boxShadow: 'none'
                        },
                        headerTitleStyle: {
                            color: '#0008'
                        },
                        headerTitleAlign: 'center',

                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute

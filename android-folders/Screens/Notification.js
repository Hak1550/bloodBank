import { View, Text, StatusBar } from 'react-native';
import React from 'react'


const Notification = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar backgroundColor='#F61F1F' barStyle='dark-content' />

            <Text> This is Notification Screen </Text>
        </View>
    )
}

export default Notification;
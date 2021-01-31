import { View, Text, StatusBar } from 'react-native';
import React from 'react'



const Donor = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar backgroundColor='#F61F1F' barStyle='dark-content' />

            <Text> This is Donor Screen </Text>
        </View>
    )
}

export default Donor;
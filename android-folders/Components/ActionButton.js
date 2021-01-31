import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'




const ActionButton = () => {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar backgroundColor='#6661' barStyle='dark-content' />

            <Text>Hi, this is Login</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Blood Bank')}>
                <Text>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text>Go to Sign Up</Text>
            </TouchableOpacity>

        </View>
    )

}

export default ActionButton
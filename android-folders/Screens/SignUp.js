import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useState } from 'react'
import FieldInput from '../Components/FieldInput'
import { View, Text, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Login from '../Screens/Login'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const SignUp = ({ navigation }) => {

    const [isEmail, setEmail] = useState('')
    const [isPassword, setPassword] = useState('')

    return (

        <View style={{ justifyContent: 'center', backgroundColor: '#F61F1F', flex: 1, width: '100%' }}>
            <StatusBar backgroundColor='#F61F1F' />

            <View style={{ disply: 'flex', marginBottom: 15, width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F61F1F', marginTop: 0, padding: 10, paddingTop: 25 }}>

                <FontAwesome5 name='heartbeat' size={65} color='#0008' />
                <Animatable.Text animation='fadeIn' style={{ color: "#0008", fontSize: 20, justifyContent: 'center', fontWeight: 'bold', textAlign: 'center', paddingBottom: 10 }}>Blood Bank App</Animatable.Text>

            </View>

            <Animatable.View animation='fadeInUp' style={{ paddingTop: 10, borderTopRightRadius: 50, borderTopLeftRadius: 50, flex: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>

                <Text style={{ color: "#F61F1F", fontSize: 30, fontWeight: 'bold' }}>Create an Account</Text>


                <FieldInput
                    IconName="user-plus"
                    placeHolder="Enter Full Name"
                    keyType='default'
                    labelvalue={isEmail}
                    textChange={setEmail}
                />
                <FieldInput
                    IconName="user-shield"
                    placeHolder="Enter Email"
                    keyType='email-address'
                    labelvalue={isEmail}
                    textChange={setEmail}
                />
                <FieldInput
                    IconName="user-lock"
                    placeHolder="Enter your password"
                    secureTextEntry={true}
                    keyType='default'
                    labelvalue={isPassword}
                    textChange={setPassword}
                />
                <FieldInput
                    IconName="user-lock"
                    placeHolder="Confirm  your password"
                    secureTextEntry={true}
                    keyType='default'
                    labelvalue={isPassword}
                // textChange={}
                />

                <View style={{ backgroundColor: '#F84606', width: '85%', padding: 15, marginBottom: 5, marginTop: 10, borderRadius: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>



                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ color: '#ccc' }}>By registering, you confirm that you accept our</Text>
                    <TouchableOpacity onPress={() => { alert('Terms Accepted!') }}>
                        <Text style={{ color: '#FF6666', }}  > Terms of services</Text>
                    </TouchableOpacity >
                    <Text style={{ color: '#ccc' }}> and</Text>
                    <TouchableOpacity onPress={() => { alert('Policy Accepted!') }}>
                        <Text style={{ color: '#FF6666', }}> Privacy Policy</Text>
                    </TouchableOpacity>
                </View>






                <View style={{
                    display: 'flex', justifyContent: 'center', flexDirection: 'row', width: '100%', marginTop: 15
                }}>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: '#1976D2', padding: 15, width: 140, borderRadius: 5, }}>

                        <View style={{ marginLeft: 10 }}>

                            <FontAwesome5 name='facebook-f' color='#fff' size={20} />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 12, textAlign: 'center', color: '#fff', marginLeft: 0 }}>Connect with facebook</Text>
                        </TouchableOpacity>
                    </View>






                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: '#34A853', padding: 15, width: 140, marginLeft: 15, borderRadius: 5 }}>
                        <View style={{ marginLeft: 10 }}>

                            <FontAwesome5 name='google' color='#fff' size={20} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 12, textAlign: 'center', color: '#fff', marginLeft: 0 }}>Connect with Google</Text>
                        </TouchableOpacity>
                    </View>




                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                    <Text style={{ color: '#ccc' }}>Having an Account?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={{ color: '#1976D2', fontWeight: 'bold' }}  > Sign In</Text>
                    </TouchableOpacity >
                </View>

            </Animatable.View>
        </View >
    )
}

export default SignUp
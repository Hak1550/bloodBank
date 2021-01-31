import React from 'react'
import { useState } from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import SignUp from '../Screens/SignUp'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FieldInput from '../Components/FieldInput'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';



const Login = ({ navigation }) => {
    const [isEmail, setEmail] = useState('')
    const [isPassword, setPassword] = useState('')
    return (


        <View style={{ display: "flex", flex: 1, backgroundColor: '#F61F1F' }}>
            <StatusBar backgroundColor='#F61F1F' barStyle='dark-content' />
            <Animatable.View animation="" style={{ flex: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F61F1F', width: '100%', }}>
                <FontAwesome5 name='heartbeat' size={85} color='#0008' />
                <Text style={{ color: "#0008", fontSize: 30, fontWeight: 'bold' }}>Blood Bank App</Text>
            </Animatable.View>




            <Animatable.View animation='fadeInUpBig' style={{ flex: 5, marginTop: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', paddingTop: 50, borderTopRightRadius: 50, borderTopLeftRadius: 50, }}>
                <FieldInput
                    IconName="user-alt"
                    placeHolder="Enter email address"
                    keyType='email-address'
                    labelvalue={isEmail}
                    textChange={setEmail}
                />
                <FieldInput
                    IconName="lock"
                    placeHolder="Enter your password"
                    secureTextEntry={true}
                    keyType='default'
                    labelvalue={isPassword}
                    textChange={setPassword}
                />




                <Animatable.View animation='bounce' style={{ backgroundColor: '#F84606', width: '85%', padding: 15, marginBottom: 5, marginTop: 10, borderRadius: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Blood Bank')}>
                        <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Sign In</Text>
                    </TouchableOpacity>
                </Animatable.View>



                <TouchableOpacity>
                    <Text style={{ color: '#1976D2', fontWeight: 'bold' }} onPress={() => { alert('Hint: Its is a cricket Match') }}>Forget Password ?</Text>
                </TouchableOpacity>





                <View style={{
                    display: 'flex', justifyContent: 'center', flexDirection: 'row', width: '100%', marginTop: 15
                }}>

                    <Animatable.View animation='flash' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: '#1976D2', padding: 15, width: 140, borderRadius: 5, }}>

                        <View style={{ marginLeft: 10 }}>

                            <FontAwesome5 name='facebook-f' color='#fff' size={20} />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Blood Bank')}>
                            <Text style={{ fontSize: 12, textAlign: 'center', color: '#fff', marginLeft: 0 }}>Connect with facebook</Text>
                        </TouchableOpacity>
                    </Animatable.View>






                    <Animatable.View animation='flash' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: '#34A853', padding: 15, width: 140, marginLeft: 15, borderRadius: 5 }}>
                        <View style={{ marginLeft: 10 }}>

                            <FontAwesome5 name='google' color='#fff' size={20} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Blood Bank')}>
                            <Text style={{ fontSize: 12, textAlign: 'center', color: '#fff', marginLeft: 0 }}>Connect with Google</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                </View>


                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                    <Text style={{ color: '#1976D2' }}>Don't have an Account?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
                        <Text style={{ color: '#1976D2', fontWeight: 'bold' }}  > Sign Up</Text>
                    </TouchableOpacity >
                </View>




            </Animatable.View >

        </View>


    )

}

export default Login
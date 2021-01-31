import React from 'react'
import { useState } from 'react'
import { View, Text, Button } from 'react-native'
import FieldInput from '../Components/FieldInput'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Form, { List } from '@material-ui/core'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from 'react-native-datepicker'
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';



const AddDonor = ({ item, navigation }) => {

    const [isEmail, setEmail] = useState('')
    const [isPassword, setPassword] = useState('')
    const [isDate, setDate] = useState('01-01-2008'
    )
    const [isBloodGroup, setBloodGroup] = useState('A+'
    )

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: '#F61F1F', fontWeight: 'bold' }}> Donor Details</Text>
            <FieldInput
                IconName="user-tie"
                placeHolder="Donor's Name"
                keyType='default'
                labelvalue={isEmail}
                textChange={setEmail}
                labelvalue='Haris Ali Khan'

            />
            <FieldInput
                IconName="street-view"
                placeHolder="Enter your Address"
                keyType='default'
            // labelvalue={isEmail}
            // textChange={setEmail}
            // labelvalue='Haris Ali Khan'

            />


            <View>
                <Text style={{ color: '#666', marginBottom: 5, marginLeft: 5 }}>Please Select Your City:</Text>

                <Picker
                    selectedValue={isBloodGroup}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setBloodGroup(itemValue)
                        console.log('Your blood group is => ', itemValue)
                    }}>
                    <Picker.Item label="Karachi" value="A+" />
                    <Picker.Item label="Lahore" value="A-" />
                    <Picker.Item label="Islamabad" value="B+" />
                    <Picker.Item label="Peshawar" value="B-" />
                    <Picker.Item label="Rawalpindi" value="AB+" />
                    <Picker.Item label="Sukkur" value="AB-" />
                    <Picker.Item label="Quetta" value="O+" />
                    <Picker.Item label="Bhawalpur" value="O-" />
                </Picker>
            </View>



            <View>
                <Text style={{ color: '#666', marginBottom: 5, marginLeft: 5 }}>Please Select Blood Group:</Text>

                <Picker
                    selectedValue={isBloodGroup}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setBloodGroup(itemValue)
                        console.log('Your blood group is => ', itemValue)
                    }}>
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="A-" value="A-" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="B-" value="B-" />
                    <Picker.Item label="AB+" value="AB+" />
                    <Picker.Item label="AB-" value="AB-" />
                    <Picker.Item label="O+" value="O+" />
                    <Picker.Item label="O-" value="O-" />
                </Picker>
            </View>





            <View>
                <Text style={{ color: '#666', marginBottom: 5, marginLeft: 5 }}>Any Crusial Disease:</Text>

                <Picker
                    selectedValue={isBloodGroup}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setBloodGroup(itemValue)
                        console.log('Your blood group is => ', itemValue)
                    }}>
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                </Picker>
            </View>






            <View>
                <Text style={{ color: '#666', marginBottom: 5, marginLeft: 5 }}>Please Select your Age:</Text>
                <DatePicker
                    style={{ width: 300 }}
                    date={isDate}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="31-01-1970"
                    maxDate="01-01-2008"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                        setDate(date)
                        console.log('Selected Date is', date);

                    }}
                />

            </View>








            <View>
                <Text style={{ color: '#666', marginBottom: 5, marginLeft: 5, marginTop: 15 }}>Last Blood Donation Date:</Text>
                <DatePicker
                    style={{ width: 300 }}
                    date={isDate}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="31-01-1970"
                    maxDate="01-10-2020"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                        setDate(date)
                        console.log('Selected Date is', date);

                    }}
                />

            </View>


            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'space-between', marginTop: 25, }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Blood Bank') }} >
                    <Text style={{ color: '#fff', fontWeight: 'bold', padding: 10, backgroundColor: '#F61F1F', borderRadius: 5, }}> Submit</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { navigation.navigate('Blood Bank') }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', padding: 10, backgroundColor: '#F61F1F', borderRadius: 5, marginLeft: 25 }}> Cancel</Text>
                </TouchableOpacity>
            </View>









        </View >
    )
}

export default AddDonor
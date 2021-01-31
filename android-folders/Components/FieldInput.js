import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { TextField } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const FieldInput = ({ IconName, textChange, labelvalue, placeHolder, keyType, ...rest }) => {


    return (
        <View style={{ borderBottomWidth: 1, borderRadius: 2, display: "flex", flexDirection: 'row', width: '85%', marginTop: 5, marginBottom: 15, height: 50 }}>
            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 12 }}>
                <FontAwesome5 name={IconName} size={20} color="#666" />
            </View>

            <View style={{ fontSize: 25 }}>
                <TextInput
                    none
                    placeholder={placeHolder}
                    keyboardType={keyType}
                    style={{ fontSize: 16 }}
                    value={labelvalue}
                    onChangeText={textChange}
                    {...rest}
                />
            </View>


        </View>
    )

}

export default FieldInput
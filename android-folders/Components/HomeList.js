import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DonorList from '../Store/Donor'


const HomeList = ({ item }) => {
    return (

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5 }}>


            <TouchableOpacity style={{ margin: 0, marginLeft: 5, padding: 5, borderBottomWidth: 0 }}>
                <Image source={item.profile} style={{ width: 55, height: 55, padding: 30, borderRadius: 35, borderWidth: 3, borderColor: '#F61F1F' }} />
            </TouchableOpacity>


            <TouchableOpacity style={{ display: 'flex', width: '79%', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#F61F1F', paddingBottom: 20, justifyContent: 'space-between', }}>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>


                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#F61F1F', marginBottom: 8 }}>{item.name}</Text>

                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <Icons name='street-view' size={25} color='#F61F1F' />


                        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 5 }}>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#666', marginLeft: 10 }}>{item.area}</Text>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#666', marginLeft: 10 }}>{item.city}</Text>
                        </View>


                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>

                        <Icon name='drop' size={20} color='#F61F1F' />

                        <Text style={{ fontSize: 18, marginLeft: 10, fontWeight: 'bold', color: '#666', }}>{item.bloodGroup}</Text>



                    </View>

                </View>




                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>


                    <View >
                        <MaterialIcons name='update' size={25} color='#F61F1F' />
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#666', marginTop: 10 }}>{item.date}</Text>
                </View>


            </TouchableOpacity>
        </View>
    )
}
export default HomeList
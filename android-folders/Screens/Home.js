import { View, Text, Image, StatusBar, FlatList, Touchable } from 'react-native';
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DonorList from '../Store/Donor'
import HomeList from '../Components/HomeList'
import Icon from 'react-native-vector-icons/FontAwesome'



const Home = ({ navigation }) => {
    return (
        <View>
            <StatusBar backgroundColor='#F61F1F' barStyle='dark-content' />

            <FlatList
                data={DonorList}
                renderItem={({ item }) => <HomeList item={item} />}
                keyExtractor={item => item.id.toString()}
            />

            <View style={{
                backgroundColor: '#F61F1F', padding: 20, position: 'absolute', bottom: 20, right: 25, color: '#fff', borderRadius: 45, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.55,
                shadowRadius: 1.84,

                elevation: 5,
            }} >
                <TouchableOpacity onPress={() => { navigation.navigate('AddDonor') }}>

                    <Icon name='plus' size={30} color='#fff' />
                </TouchableOpacity>
            </View>


        </View >

    )
}

export default Home
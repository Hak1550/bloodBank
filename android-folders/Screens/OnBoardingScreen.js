import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';




const Done = ({ ...props }) => {
    return (

        <TouchableOpacity {...props}>
            <Text style={{ marginRight: 20, color: '#fff', fontSize: 16, color: '#0009', fontWeight: 'bold' }}>
                Done
    </Text>

        </TouchableOpacity>
    )
}
const Skip = ({ ...props }) => {
    return (

        <TouchableOpacity {...props}>
            <Text style={{ marginLeft: 20, color: '#fff', fontSize: 16, color: '#0009', fontWeight: 'bold' }}>
                Skip
    </Text>

        </TouchableOpacity>
    )
}
const Next = ({ ...props }) => {
    return (

        <TouchableOpacity {...props}>
            <Text style={{ marginRight: 20, color: '#fff', fontSize: 16, color: '#0009', fontWeight: 'bold' }}>
                Next
    </Text>

        </TouchableOpacity>
    )
}



const Dot = ({ selected }) => {

    let backgroundColor;

    backgroundColor = selected ? "#0009" : '#0003';


    return (

        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                borderRadius: 5,
                backgroundColor
            }} />

    )
}

const OnBoardingSwiper = ({ navigation }) => {
    return (
        <Onboarding
            DoneButtonComponent={Done}
            DotComponent={Dot}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.replace("Login")}
            titleStyles={styles.title}
            subTitleStyles={styles.subTitle}
            pages={
                [
                    {
                        backgroundColor: '#F61F1F',
                        image: <Image source={require('../Assets/onBoard.png')} style={{ width: 250, height: 250, resizeMode: 'contain' }} />,
                        title: 'Blood is Life',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#F61F1F',
                        image: <Image source={require('../Assets/onBoard1.png')} style={{ width: 250, height: 250, resizeMode: 'contain' }} />,
                        title: 'Donation is Life',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#F61F1F',
                        image: <Image source={require('../Assets/onBoard2.png')} style={{ width: 250, height: 250, resizeMode: 'contain' }} />,
                        title: 'Life is Everything',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },

                ]}
        />
    )
}

export default OnBoardingSwiper


const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    subTitle: {
        color: '#fff',

    }
}
)

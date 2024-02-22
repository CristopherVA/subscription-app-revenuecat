import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Paywall">

const PaywallScreen = () => {

    const navigation = useNavigation<NavigationProps>();

    return (
        <SafeAreaView className='flex-1 bg-red-500'>
            <TouchableOpacity
                onPress={navigation.goBack}
                className='bg-[#E5962D] absolute p-1 top-5 right-5 rounded-full'
            >
                <Ionicons name="close" size={20} color="white" />
            </TouchableOpacity>

            <View className='my-12'>
                <Text className='text-white text-2xl text-center font-bold'>UPGRADE</Text>
                <Text className='text-white text-md text-center'>Upgrade to Prop to Access all the Features</Text>
            </View>

            {/* icons */}


          
                <View className='space-y-4 mx-10'>
                    <View className='flex flex-row items-center space-x-8'>
                        <Ionicons name="key" size={30} color="white" />
                        <View>
                            <Text className='text-white font-extrabold text-lg'>Access to all prop featurs</Text>
                            <Text className='text-white  '>Upgrade to the premium versioni o the app and enjoy all the exclusive features available only to pro users.</Text>
                        </View>
                    </View>


                    <View className='flex flex-row items-center space-x-8'>
                        <Ionicons name="person-add-outline" size={30} color="white" />
                        <View>
                            <Text className='text-white font-extrabold text-lg'>Helpline 24/7 to Personal Trainers</Text>
                            <Text className='text-white  '>Get unlimited access to our fitness support team and get help anytime you need it - day or night.</Text>
                        </View>
                    </View>

                    <View className='flex flex-row items-center space-x-8'>
                        <Ionicons name="star" size={30} color="white" />
                        <View>
                            <Text className='text-white font-extrabold text-lg'>Unlock LImited EDition Content</Text>
                            <Text className='text-white  '>Unlock exclusive content that you cant get anywhere else, like special exclusive workouts and routines.</Text>
                        </View>
                    </View>
                </View>
    
        </SafeAreaView>
    )
}

export default PaywallScreen
import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Paywall">

const PaywallScreen = () => {

    const navigation = useNavigation<NavigationProps>();

    return (
        <SafeAreaView className='flex-1 bg-[#202F44]'>
            <TouchableOpacity
                onPress={navigation.goBack}
                className='bg-[#E5962D] absolute p-1 top-5 right-5 rounded-full'
            >
                <Ionicons name="close" size={20} color="#202F44" />
            </TouchableOpacity>

            <View className='my-12'>
                <Text className='text-white text-2xl text-center font-bold'>UPGRADE</Text>
                <Text className='text-white text-md text-center'>Upgrade to Prop to Access all the Features</Text>
            </View>

            {/* Logo */}
            <View className='items-center'>
                <MaterialCommunityIcons name='trophy-award' size={150} color='#E5962D' />
            </View>

            {/* Content */}
            <View className='space-y-5 px-10 py-5'>
                <View className='flex-row items-center space-x-10'>
                    <Ionicons name="key" size={32} color="#E5962D" />
                    <View>
                        <Text className='text-white font-bold text-lg'>Access to all prop featurs</Text>
                        <Text className='text-white text-sm font-extralight '>Upgrade to the premium versioni o the app and enjoy all the exclusive features available only to pro users.</Text>
                    </View>
                </View>


                <View className='flex-row items-center space-x-10'>
                    <Ionicons name="person-add-outline" size={32} color="#E5962D" />
                    <View>
                        <Text className='text-white font-bold text-lg'>Helpline 24/7 to Personal Trainers</Text>
                        <Text className='text-white text-sm font-extralight '>Get unlimited access to our fitness support team and get help anytime you need it - day or night.</Text>
                    </View>
                </View>

                <View className='flex-row items-center space-x-10'>
                    <Ionicons name="star" size={32} color="#E5962D" />
                    <View>
                        <Text className='text-white font-bold text-lg'>Unlock LImited EDition Content</Text>
                        <Text className='text-white text-sm font-extralight '>Unlock exclusive content that you cant get anywhere else, like special exclusive workouts and routines.</Text>
                    </View>
                </View>
            </View>


            {/* Monthly Subscribe */}

            {/* Yearly Subscribe */}

            {/* REstore Purchases */}

        </SafeAreaView>
    )
}

export default PaywallScreen
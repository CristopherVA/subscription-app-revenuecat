import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';


export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Demo">

const DemoScreen = () => {

    const navigation = useNavigation<NavigationProps>()

    return (
        <SafeAreaView className='bg-[#e5962d] flex-1'>
            <TouchableOpacity
                onPress={navigation.goBack}
                className='flex flex-row items-center space-x-2 p-5'
            >
                <Ionicons name="arrow-back" size={30} color="white" />
                <Text className='text-white'>Go Back</Text>
            </TouchableOpacity>

            <View className='flex-1  items-center px-10 '>
                <Text className='text-white font-bold text-xl'>Hooray!</Text>
                <Text className='text-white font-bold text-xl mb-20'>You have access to this feature</Text>


                <Ionicons name="build-outline" size={200} color="white" />
                <View className='-mt-16 -ml-8'>
                    <Ionicons name="checkmark-circle-sharp" size={60} color="#96F550" />

                </View>

                <Text className='text-white font-bold text-center mt-10'>
                    This is where you create a new screen & change the rest of the app so the navigation is as follows: navigation.navigate('THePageYouWant')
                </Text>

            </View>
        </SafeAreaView>
    )
}

export default DemoScreen
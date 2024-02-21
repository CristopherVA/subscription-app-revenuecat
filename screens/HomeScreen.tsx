import React from 'react'
import { Image, ScrollView, StatusBar, TouchableOpacity, View, Text, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">

const HomeScreen = () => {

    const navigation = useNavigation<NavigationProps>()

    return (
        <SafeAreaView className='flex-1 bg-gray-100 relative' >
            <ScrollView>
                <TouchableOpacity
                    className='absolute z-50 top-8 right-8  items-center'
                    onPress={() => navigation.navigate('Paywall')}
                >
                    <Ionicons name="person-circle" size={30} color="#E5962D" />
                    <Text className='text-center text-[#E5962D]'>PRO</Text>
                </TouchableOpacity>

                <Image
                    source={{ uri: 'https://i.imgur.com/e14NE49.png' }}
                    className='w-full h-64'
                />

                <View className='mx-5'>

                    {/* ActionRows */}
                    <View className='flex flex-row justify-between space-x-2'>
                        <ActionRow
                            title="Track Workout"
                            screen="Demo"
                            color="#E5962D"
                            icon="fitness"
                            vertical
                        />

                        <ActionRow
                            title="Browse Workout"
                            screen="Demo"
                            color="#1982c4"
                            icon="library"
                            vertical
                        />
                    </View>

                    <ActionRow
                        title="Connect with Friends"
                        screen="Demo"
                        color="#f44174"
                        icon="share-social"
                        requiresProp
                    />


                    <ActionRow
                        title="Add an Exercise"
                        screen="Demo"
                        color="#8AC926"
                        icon="add-circle"
                        requiresProp
                    />


                    <ActionRow
                        title="Create a Routine"
                        screen="Demo"
                        color="#C03221"
                        icon="time"
                        requiresProp
                    />


                    <ActionRow
                        title="Join Challenges"
                        screen="Demo"
                        color="#23967F"
                        icon="trophy"
                        requiresProp
                    />
                </View>
            </ScrollView>
            <StatusBar />
        </SafeAreaView >
    )
}

export default HomeScreen
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Paywall">

const PaywallScreen = () => {
    return (
        <SafeAreaView>
            <Text>PaywallScreen</Text>
        </SafeAreaView>
    )
}

export default PaywallScreen
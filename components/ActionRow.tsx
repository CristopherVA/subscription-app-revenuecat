import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">

type Props = {

    title: string;
    screen: any;
    color: string;
    requiresProp?: boolean;
    icon: any;
    vertical?: boolean;

}

const ActionRow = ({ title, screen, color, icon, vertical }: Props) => {
    const navigation = useNavigation<NavigationProps>()

    return (
        <TouchableOpacity
            className={`flex m-2 flex-1  justify-center items-center shadow-sm py-6 rounded-lg  ${vertical ? "flex-col" : "flex-row"} space-x-2 $`}
            style={{ backgroundColor: color }}
            onPress={() => navigation.push(screen)}
        >
            <Ionicons name={icon} size={30} color="white" />
            <Text className='text-white font-bold text-lg' >{title}</Text>
        </TouchableOpacity>
    )
}

export default ActionRow
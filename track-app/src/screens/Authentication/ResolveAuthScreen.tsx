import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

// Redux Related
import { useDispatch } from 'react-redux'
import { tryLocalSignin } from '@/redux/slices/authSlice'

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage'

const ResolveAuthScreen: React.FC = () => {

    AsyncStorage.getItem('token').then((token) => console.log('Token:', token))
    // AsyncStorage.clear()

    const dispatch = useDispatch()

    // -- Performs a check to see if a user already has a session token stored in AsyncStorage -- //
    useEffect(() => {
        // -- Artificial delay to show the loading screen, just for my pleasure -- //
        setTimeout(() => {
            // @ts-ignore 
            dispatch(tryLocalSignin())
        }, 2500)
    }, [])


    return (

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size='large' />
            <Text style={{ textAlign: 'center', marginTop: 10 }}>Loading </Text>
        </View>


    )
}

export default ResolveAuthScreen

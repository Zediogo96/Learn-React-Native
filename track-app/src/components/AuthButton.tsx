import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface AuthButtonProps {
    navigationCallback: () => void
    mainText: string
    highlightText: string
    containerStyle?: any
}

const AuthButton = ({ ...props }: AuthButtonProps) => {
    const { navigationCallback, mainText, highlightText } = props

    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 25,
                marginBottom: 10
            }}
        >
            <Text style={{ color: 'white' }}>Already have an account?</Text>
            <TouchableOpacity onPress={navigationCallback} style={{ marginLeft: 5 }}>
                <Text style={{ color: 'rgb(251,91,9)' }}> {highlightText}.</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthButton

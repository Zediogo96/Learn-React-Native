import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

interface AuthButtonProps {
    navigationCallback: () => void
    mainText: string
    highlightText: string
    containerStyle?: object
}

const AuthNavText = ({ ...props }: AuthButtonProps) => {
    const { navigationCallback, mainText, highlightText } = props

    return (
        <View style={{ flexDirection: 'row', marginTop: 25, marginBottom: 10 }}>
            <Text style={{ color: 'white' }}> {mainText} </Text>
            <TouchableOpacity onPress={navigationCallback} style={{ marginLeft: 5 }}>
                <Text style={{ color: 'rgb(251,91,9)' }}> {highlightText}.</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthNavText

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Animated, { BounceIn } from 'react-native-reanimated'

interface AuthButtonProps {
    callback: () => void
    text: string
    style?: any
}

const AuthButton = ({ ...props }: AuthButtonProps) => {
    const { callback, text, style } = props

    return (
        <Animated.View entering={BounceIn}>
            <TouchableOpacity onPress={callback} style={style}>
                <Text
                    style={{
                        color: 'rgb(0,63,92)',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default AuthButton

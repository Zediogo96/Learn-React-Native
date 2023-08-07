import FloatingLabelInput from '@/components/FloatingLabelInput'
import React, { FC, useState, useEffect } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import Animated, { FlipInYLeft, FlipInYRight, FadeInRight, BounceIn } from 'react-native-reanimated'
import { Text } from 'react-native-elements'

import { useFonts } from 'expo-font'
import { Dimensions } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

const deviceSize = Dimensions.get('window')

import backgroundImage from '@/../assets/background.jpg'
import logo from '@/../assets/ciclist.jpg'

// redux related
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '@/redux/slices/authSlice'
import AuthButton from '../../components/AuthButton'

interface LoginScreenProps {
    navigation: any
}

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loading, user, token, error, success } = useSelector((state: any) => state.auth)

    const dispatch = useDispatch()

    const handleLogin = () => {
        // @ts-ignore
        dispatch(loginUser({ email, password }))
    }

    useEffect(() => {
        if (success) {
            alert('Login successful!')
            navigation.navigate('TrackList')
        } else if (error) alert(error)
    }, [success, error, loading])

    const [loaded] = useFonts({
        'Pacifico-Regular': require('@/../assets/fonts/Pacifico-Regular.ttf')
    })

    if (!loaded) return null

    return (
        <ImageBackground source={backgroundImage} imageStyle={{ opacity: 0.7, backgroundColor: '#00308F' }} style={styles.container}>
            <Shadow distance={7} startColor={'rgba(0,0,0,0.7)'}>
                <View style={styles.mainContentContainer}>
                    <Shadow distance={7} startColor={'rgba(0,0,0,0.7)'}>
                        <Image
                            source={logo}
                            style={{
                                width: deviceSize.width * 0.7,
                                height: deviceSize.width * 0.4,
                                marginBottom: 30,
                                borderRadius: 10
                            }}
                        />
                    </Shadow>
                    <Animated.Text
                        entering={FadeInRight}
                        style={{
                            fontSize: 35,
                            color: 'rgb(251,91,9)',
                            fontFamily: 'Pacifico-Regular'
                        }}
                    >
                        LOGIN
                    </Animated.Text>

                    <View style={{ marginVertical: 30, rowGap: 20 }}>
                        <Animated.View entering={FlipInYRight}>
                            <FloatingLabelInput label='Email' value={email} width={deviceSize.width * 0.5} height={50} titleActiveColor='rgb(251,91,9)' titleInactiveColor='white' handleTextChange={text => setEmail(text)} />
                        </Animated.View>
                        <Animated.View entering={FlipInYLeft.delay(400)}>
                            <FloatingLabelInput
                                value={password}
                                label='Password'
                                width={deviceSize.width * 0.5}
                                height={50}
                                titleActiveColor='rgb(251,91,9)'
                                titleInactiveColor='white'
                                handleTextChange={text => setPassword(text)}
                                hidden={true}
                            />
                        </Animated.View>
                    </View>

                    <Animated.View entering={BounceIn}>
                        <TouchableOpacity onPress={handleLogin} style={styles.button}>
                            <Text
                                style={{
                                    color: 'rgb(0,63,92)',
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}
                            >
                                Login
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <AuthButton navigationCallback={() => navigation.navigate('Register')} mainText="Don't have an account?" highlightText='Register.' />
                </View>
            </Shadow>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainContentContainer: {
        width: deviceSize.width * 0.8,
        height: deviceSize.height * 0.745,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'rgb(251,91,9)',
        width: deviceSize.width * 0.35,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 20,
        borderBottomWidth: 3,
        borderColor: 'rgb(0,63,92)'
    }
})

export default LoginScreen

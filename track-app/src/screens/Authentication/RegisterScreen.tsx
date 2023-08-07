import React, { FC, useState } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FloatingLabelInput from '@/components/FloatingLabelInput'
import Animated, { FlipInYLeft, FlipInYRight, FadeInRight, BounceIn } from 'react-native-reanimated'

import { useFonts } from 'expo-font'
import { Shadow } from 'react-native-shadow-2'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '@/redux/slices/authSlice'

// Validation Functions
import { validateEmail, validatePassword, validateUsername } from './Validations/InputValidation'

// Images
import backgroundImage from '@/../assets/background.jpg'
import logo from '@/../assets/ciclist.jpg'
import AuthButton from '../../components/AuthButton'

const deviceSize = Dimensions.get('window')

interface RegisterScreenProps {
  navigation: any
}

const RegisterScreen: FC<RegisterScreenProps> = ({ navigation }) => {
  const [loaded] = useFonts({
    'Pacifico-Regular': require('@/../assets/fonts/Pacifico-Regular.ttf'),
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const { loading, user, error, success } = useSelector((state: any) => state.auth)

  const dispatch = useDispatch()

  const handleRegister = () => {

	const { valid: validUsername, message: messageUsername } = validateUsername(username)
	if (!validUsername) return alert(messageUsername)
	const { valid: validEmail, message: messageEmail } = validateEmail(email)
	if (!validEmail) return alert(messageEmail)
	const { valid: validPassword, message: messagePassword } = validatePassword(password)
	if (!validPassword) return alert(messagePassword)

    // @ts-ignore
    dispatch(registerUser({ username, email, password }))

	if (error) return alert(error)
	if (success) navigation.navigate('Login')
  }

  if (!loaded) return null

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View>
        <ImageBackground
          style={{
            width: deviceSize.width,
            height: deviceSize.height,
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={backgroundImage}
          imageStyle={{ opacity: 0.7, backgroundColor: '#00308F' }}
        >
          <Shadow distance={7} startColor={'rgba(0,0,0,0.7)'}>
            <View style={styles.mainContentContainer}>
              <Shadow distance={7} startColor={'rgba(0,0,0,0.7)'}>
                <Image
                  source={logo}
                  style={{
                    width: deviceSize.width * 0.7,
                    height: deviceSize.width * 0.4,
                    marginBottom: 30,
                    borderRadius: 10,
                  }}
                />
              </Shadow>
              <Animated.Text
                entering={FadeInRight}
                style={{
                  fontSize: 35,
                  color: 'rgb(251,91,9)',
                  fontFamily: 'Pacifico-Regular',
                }}
              >
                REGISTER
              </Animated.Text>

              <View style={{ marginVertical: 30, rowGap: 20 }}>
                <Animated.View entering={FlipInYRight}>
                  <FloatingLabelInput
                    label='Username'
                    value={username}
                    width={deviceSize.width * 0.5}
                    height={50}
                    titleActiveColor='rgb(251,91,9)'
                    titleInactiveColor='white'
                    handleTextChange={setUsername}
                  />
                </Animated.View>
                <Animated.View entering={FlipInYRight.delay(400)}>
                  <FloatingLabelInput
                    label='Email'
                    value={email}
                    width={deviceSize.width * 0.5}
                    height={50}
                    titleActiveColor='rgb(251,91,9)'
                    titleInactiveColor='white'
                    handleTextChange={setEmail}
                  />
                </Animated.View>
                <Animated.View entering={FlipInYLeft.delay(800)}>
                  <FloatingLabelInput
                    value={password}
                    label='Password'
                    width={deviceSize.width * 0.5}
                    height={50}
                    titleActiveColor='rgb(251,91,9)'
                    titleInactiveColor='white'
                    handleTextChange={setPassword}
                    hidden={true}
                  />
                </Animated.View>
              </View>

              <Animated.View entering={BounceIn}>
                <TouchableOpacity onPress={handleRegister} style={styles.button}>
                  <Text
                    style={{
                      color: 'rgb(0,63,92)',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </Animated.View>
              
              <AuthButton navigationCallback={() => navigation.navigate("Login")} mainText='Already have an account?' highlightText='Login.' />
              
            </View>
          </Shadow>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },

    mainContentContainer: {
        width: deviceSize.width * 0.8,
        height: deviceSize.height * 0.745,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
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
        borderColor: 'rgb(0,63,92)',
        borderBottomWidth: 3
    }
})

export default RegisterScreen

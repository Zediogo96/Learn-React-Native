import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AccountScreen from './src/screens/AccountScreen'
import LoginScreen from './src/screens/Authentication/LoginScreen'
import RegisterScreen from './src/screens/Authentication/RegisterScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

import { Provider as AuthProvider } from 'react-redux'
import store from './src/redux/store/authStore'
import { setNavigator } from './src/hooks/useNavigationRef'

const _authenticatedFlow = createStackNavigator(
    {
        Register: RegisterScreen,
        Login: LoginScreen
    },
    {
        headerMode: 'none'
    }
)

const _trackListFlow = createStackNavigator(
    {
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
    },
    { headerMode: 'none' }
)

const switchNavigator = createSwitchNavigator({
    authenticatedFlow: _authenticatedFlow,

    mainFlow: createMaterialBottomTabNavigator({
        trackListFlow: _trackListFlow,
        CreateTrack: TrackCreateScreen,
        Account: AccountScreen
    })
})

const App = () => {
    const AppContainer = createAppContainer(switchNavigator)

    return (
        <SafeAreaProvider>
            <AuthProvider store={store}>
                <AppContainer ref={navigator => setNavigator(navigator)} />
            </AuthProvider>
        </SafeAreaProvider>
    )
}

export default App

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import apiTracker from '../../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../../hooks/useNavigationRef'

interface InitialState {
    loading: boolean
    isAuthenticated: boolean
    user: any
    error: any
    success: boolean
}

const initialState: InitialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
    success: false
}

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
        const response = await apiTracker.post('auth/login', { email, password }, config)
        // SET THE TOKEN IN THE ASYNC STORAGE
        // await AsyncStorage.setItem('token', response.data.token)
        // navigate('TrackList')
        return response.data
    } catch (error: any) {
        if (error.response) {
            return rejectWithValue(error.response.data.statusText)
        }
        throw error
    }
})

export const registerUser = createAsyncThunk('auth/registerUser', async ({ username, email, password }: { username: string; email: string; password: string }, { rejectWithValue }) => {
    try {
        const response = await apiTracker.post('auth/register', { username: username, email: email, password: password }, config)
        return response.data
    } catch (error: any) {
        if (error.response) {
            return rejectWithValue(error.response.data)
        }
    }
})

const authSlice = createSlice({
    name: 'Auth',
    initialState: initialState,
    reducers: {},
    // All the reducers must return a new state object
    extraReducers: builder => {
        // LOGIN USER
        builder.addCase(loginUser.pending, state => {
            return { ...state, loading: true }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            const { _id, email, token, username } = action.payload
            return { ...state, user: { _id, email, token, username }, success: true, isAuthenticated: true, loading: false }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            return { ...state, loading: false, error: action.payload }
        })
        // REGISTER USER
        builder.addCase(registerUser.pending, state => {
            return { ...state, loading: true }
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            const { _id, email, token, username } = action.payload
            return { ...state, user: { _id, email, token, username }, isAuthenticated: true, loading: false }
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            return { ...state, loading: false, error: action.payload }
        })
    }
})

export default authSlice.reducer

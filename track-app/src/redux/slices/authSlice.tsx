import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiTracker from '../../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { navigate } from '../../hooks/useNavigationRef'

interface InitialState {
    loading: boolean
    error: unknown
    success: boolean
}

const initialState: InitialState = {
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

export const tryLocalSignin = createAsyncThunk('auth/tryLocalSignin', async () => {
    const token = await AsyncStorage.getItem('token')

    if (token) navigate('TrackList')
    else navigate('Login')
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
            AsyncStorage.setItem('token', token)
            AsyncStorage.setItem('user', JSON.stringify({ _id, email, token, username }))
            return { ...state, success: true, loading: false, error: null }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            return { ...state, loading: false, error: action.payload }
        })

        // REGISTER USER
        builder.addCase(registerUser.pending, state => {
            return { ...state, loading: true }
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            return { ...state, loading: false, error: null }
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            return { ...state, loading: false, error: action.payload }
        })

        // TRY LOCAL SIGNIN
        builder.addCase(tryLocalSignin.pending, state => {
            return { ...state, loading: true }
        })
        builder.addCase(tryLocalSignin.fulfilled, (state, action) => {
            return { ...state, loading: false }
        })
        builder.addCase(tryLocalSignin.rejected, (state, action) => {
            return { ...state, loading: false }
        })

    }
})

export default authSlice.reducer

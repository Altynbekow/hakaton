import { createSlice } from '@reduxjs/toolkit'

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        isVisible: false
    },
    reducers: {
        showAlert: (state) => {
            state.isVisible = true;
        },
        removeAlert(state) {
            state.isVisible = false 
        }
        }
})

export const { showAlert, removeAlert } = alertSlice.actions
export const alertReducer = alertSlice.reducer
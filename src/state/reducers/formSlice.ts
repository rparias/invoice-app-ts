import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface FormState {
  isOpen: boolean
}

const initialState: FormState = {
  isOpen: false
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = formSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectForm = (state: RootState): boolean => state.form.isOpen

export default formSlice.reducer

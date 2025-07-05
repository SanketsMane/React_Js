import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'  // ✅ Correct - just './authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice
  }
})
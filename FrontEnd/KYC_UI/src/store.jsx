import userReducer from './features/user.js'
import themeReducer from './features/theme.js'
import informationReducer from './features/information.js'
import {configureStore} from '@reduxjs/toolkit';

const store =configureStore({
  reducer:{
    user:userReducer,
    information:informationReducer,
    theme:themeReducer
  }
})
export default store
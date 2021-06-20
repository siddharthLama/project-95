import * as React from 'react'
import {Image} from 'react-native'
import Login from "../Screens/Login"
import SignUp from "../Screens/SignUp"
import {createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from '../Screens/WelcomeScreen'
import { BottomTabNavigator } from './BottomTabNavigator'
export const AppSwitchNavigator = createSwitchNavigator({
    WelcomeScreen : {screen:WelcomeScreen},
   Login: {screen:Login},
   SignUp: {screen:SignUp},
   bottomTab :{screen:BottomTabNavigator}

})

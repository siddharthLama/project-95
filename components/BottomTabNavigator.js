import React from "react";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import Calendar  from "../Screens/Calendar";
import Clock from "../Screens/Clock";

export const BottomTabNavigator = createBottomTabNavigator({
Calendar:{
    screen : Calendar,
navigationOptions :{
    tabBarLabel : "calendar"
}

},

Clock : {
    screen : Clock,
    navigationOptions : {
        tabBarLabel : "clock"
    }
}

})
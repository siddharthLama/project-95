import React from 'react'
import {View, StyleSheet, Text ,TouchableOpacity,Image , TextInput,Alert, KeyboardAvoidingView,Modal ,ScrollView,ImageBackground} from 'react-native'
import db from '../config'
import * as firebase from 'firebase';
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";



export default class Calendar extends React.Component{
constructor(){
    super()

}

render(){
    return(
        <View>
            <Text>
                Calendar
            </Text>
        </View>
    )
}
}


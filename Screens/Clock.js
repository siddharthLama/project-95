import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";


export default class Clock extends Component{
    constructor(){
        super()

    }

 render(){
     return(
         <View>
             <Text>
                 Clock
             </Text>
         </View>
     )
 }

}
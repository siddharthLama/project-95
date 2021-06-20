import React from 'react'
import {View, StyleSheet, Text ,TouchableOpacity,Image , TextInput,Alert, KeyboardAvoidingView,Modal ,ScrollView,ImageBackground} from 'react-native'
import db from '../config'
import * as firebase from 'firebase';
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";


export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            contact: "",
            confirmPassword: "",
            isModalVisible: "false",
    }
    
    }

    userSignUp = (username, password,confirmPassword) =>{
        if(password !== confirmPassword){
            return alert("Passwords Don't Match.")
        }else{
          firebase.auth().createUserWithEmailAndPassword(username, password)
          .then((response)=>{
            db.collection('users').add({
              first_name:this.state.firstName,
              last_name:this.state.lastName,
              mobile_number:this.state.contact,
              username:this.state.username,
              address:this.state.address
            })
            return alert(
                 'User Added Successfully',
                 '',
                 [
                   {text: 'OK', onPress: () => this.setState({"isVisible" : false})},
                 ]
             );
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage)
          });
        }
    }

    showModal = () => {
        return (
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isModalVisible}
          >
            <ScrollView style={styles.scrollview}>
              <View style={styles.signupView}>
                <Text style={styles.signupText}> SIGN UP </Text>
              </View>
                  <View style={{flex:0.95}}>
                      <Text style={styles.label}>First Name </Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder={"First Name"}
                        maxLength={12}
                        onChangeText={(text) => {
                          this.setState({
                            firstName: text,
                          });
                        }}
                        />
      
      <Text style={styles.label}>Last Name </Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder={"Last Name"}
                      maxLength={12}
                      onChangeText={(text) => {
                        this.setState({
                          lastName: text,
                        });
                      }}
                    />
  
                    <Text style={styles.label}>Contact </Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder={"Contact"}
                      maxLength={10}
                      keyboardType={"numeric"}
                      onChangeText={(text) => {
                        this.setState({
                          contact: text,
                        });
                      }}
                    />
  
                    <Text style={styles.label}> Address </Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder={"Address"}
                      multiline={true}
                      onChangeText={(text) => {
                        this.setState({
                          address: text,
                        });
                      }}
                    />
  
                    <Text style={styles.label}>Email </Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder={"Email"}
                      keyboardType={"email-address"}
                      onChangeText={(text) => {
                        this.setState({
                          emailId: text,
                        });
                      }}
                    />
  
                    <Text style={styles.label}> Password </Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder={"Password"}
                      secureTextEntry={true}
                      onChangeText={(text) => {
                        this.setState({
                          password: text,
                        });
                      }}
                    />
  
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder={"Confrim Password"}
                      secureTextEntry={true}
                      onChangeText={(text) => {
                        this.setState({
                          confirmPassword: text,
                        });
                      }}
                    />
                </View>
  
              <View style={{flex:0.2,alignItems:'center'}}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword
                    )
                  }
                >
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
                <Text
                 style={styles.cancelButtonText}
                 onPress={() => {
                   this.setState({ isModalVisible: false });
                 }}
                >
                Cancel
                </Text>
              </View>
          </ScrollView>
        </Modal>
      );
    };

    render(){
        return(
          <ImageBackground source={require("../assets/bg3.png")} 
          style={styles.image}>
          
            <View >
<Text style = {{
  marginLeft : 130,
 marginBottom :60,
 color: "white",
  fontWeight : "bold",
  fontSize : 50,
}}>
  HELLO
</Text>
<Text  style = {
  {marginLeft : 70,
    fontSize : 30,
    color: "white",
    marginBottom :70, 
    alignContent : 'center',
  }
}>
  Enter your details and start journey with us
</Text>
              {this.showModal()}
              <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity  >

         <TouchableOpacity  
         style = {{
          borderColor : "white",
         // borderWidth :1,
          borderRadius :500,
          width: "30%",
          height: "10%",
          marginBottom :10, 
          
         }}

         onPress={()=>{this.props.navigation.navigate("WelcomeScreen")}}
         >
       <Image source={require("../assets/back2.png")} 
       style ={
         {
           width :"100%",
           height : "100%",
         }
       }
       
  
       >

       </Image>
         </TouchableOpacity>

          </View>
          </ImageBackground>
        )
    }
}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#6fc0b8",
        },
        loginBox: {
          width: "80%",
          height: RFValue(50),
          borderWidth: 1.5,
          borderColor: "#ffffff",
          fontSize: RFValue(20),
          paddingLeft: RFValue(10),
          marginTop : 220
        },

        image: {
          paddingLeft : 10,
          flex: 1,
          resizeMode: 'cover',
          justifyContent: "center"
        },

        button: {
          width: "80%",
         
          marginBottom:200,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: RFValue(25),
         // borderColor : "white",
         //borderWidth :1,
          
        
          marginLeft : 37,
         
        },
        buttonText: {
          color: "white",
          marginTop : 20,
          fontWeight: "200",
          fontSize: RFValue(30),
        },
        label:{
          fontSize:RFValue(13),
          color:"#717D7E",
          fontWeight:'bold',
          paddingLeft:RFValue(10),
          marginLeft:RFValue(20)
        },
        formInput: {
          width: "90%",
          height: RFValue(45),
          padding: RFValue(10),
          borderWidth:1,
          borderRadius:2,
          borderColor:"grey",
          paddingBottom:RFValue(10),
          marginLeft:RFValue(20),
          marginBottom:RFValue(14)
        },
        registerButton: {
          width: "75%",
          height: RFValue(50),
          marginTop:RFValue(20),
          justifyContent: "center",
          alignItems: "center",
          borderRadius: RFValue(3),
          backgroundColor: "black",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
          elevation: 16,
          marginTop: RFValue(10),
        },
        registerButtonText: {
          fontSize: RFValue(23),
          fontWeight: "bold",
          color: "#fff",
        },
        cancelButtonText:{
          fontSize : RFValue(20),
          fontWeight:'bold',
          color: "black",
          marginTop:RFValue(10)
        },
        scrollview:{
          flex: 1,
          backgroundColor: "#50B99B"
        },
        signupView:{
          flex:0.05,
          justifyContent:'center',
          alignItems:'center'
      },
      signupText:{
        fontSize:RFValue(20),
        fontWeight:"bold",
        color:"black"
      },
      santaView:{
        flex:0.85,
        justifyContent:"center",
        alignItems:"center",
        padding:RFValue(10)
      },
      santaImage:{
        width:"70%",
        height:"100%",
        resizeMode:"stretch"
      },
      TextInput:{
        flex:0.5,
        alignItems:"center",
        justifyContent:"center"
      },
      bookImage:{
        width:"100%",
        height:RFValue(220)
      }
      });
      
import React,{Component} from 'react'
import {View,Text,TouchableOpcity,TextInput} from 'react-native'


export default class UserDemographics extends Component {


    render(){

        return (
           <View>
               <Text>
                   This is the User Demographics form
               </Text>

               <TextInput placeholder="Please Enter your name">

               </TextInput>

               <TextInput placeholder="Please Enter your ID number">

               </TextInput>
           </View> 
        )
    }
}
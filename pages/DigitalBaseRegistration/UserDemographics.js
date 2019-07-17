import React,{Component} from 'react'
import {StyleSheet,View,Text,TouchableOpcity,TextInput} from 'react-native'
import Header from '../../components/Header'

export default class UserDemographics extends Component {


    render(){

        return (
           <View>
               <Header></Header>
           <View style={{padding:10}}>

           <Text>
                   This is the User Demographics form
               </Text>

               <TextInput style={styles.myInput} placeholder="Please Enter your name">

               </TextInput>

               <TextInput style={styles.myInput} placeholder="Please Enter your ID number">

               </TextInput>
               <TextInput style={styles.myInput} placeholder="Your age">
</TextInput>

           </View>
               
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    myInput:{
        padding:10,
        borderBottomColor:'#ccc',
        borderWidth:1 ,
        backgroundColor:'#ccc',
        borderRadius:4,
        marginBottom:10
    }
});

import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {white} from 'ansi-colors';
const axios = require('axios');
import * as Font from 'expo-font'
import { NavigationActions } from 'react-navigation';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {email:'albertagoya@gmail.com',password:null,leaderData:[],
        secureTextEntry:true
    
    }
    }

    showPass=()=>{
        this.setState({
            secureTextEntry:!this.state.secureTextEntry
        })
    }

    loginFn=()=>{
4
        if(this.state.email === null || this.state.password === null){
            alert("Fields cannot be empty!")
            return 0;
        }
    setTimeout(() => {
        axios({
            method:'GET',
            url:`http://134.209.148.107/api/leaders/${this.state.email}/`
        }).then(res=>{
this.setState({
    leaderData:res.data
})

//alert(res.data.password)

if(this.state.email === res.data.Email && this.state.password === res.data.password ){
//alert("Niccee")
   this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Dashboard' ,params:{leaderName:this.state.leaderData.Name,leaderData:this.state.leaderData}})], 0)

setTimeout(() => {
   // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Dashboard' })], 0)
    //this.props.navigation.navigate('Dashboard',{leaderName:this.state.leaderData.Name})

}, 200);
}
else{
    alert("Email and password do not match!")
    this.setState({
        password:null
    })

    this.set
}
        }).catch((e)=>{
        alert("User does not exist")
        })
    }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/bike.jpg')}
                    style={{
                    height: '100%',
                    width: '100%'
                }}>
                    <KeyboardAvoidingView
                        style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        flex: 1
                    }}
                        behavior="padding"
                        enabled>
                        <View
                            style={{
                            backgroundColor: 'rgba(0,0,0,.2)',
                            flex: 1,
                            height: '100%',
                            alignContent: 'flex-end',
                            justifyContent: 'flex-end',
                            padding: 0,
                            backgroundColor: 'rgba(0,0,0,.2)'
                        }}>

                            <View
                                style={{
                                padding: 10,
                                width: '100%'
                            }}>
                                <Text
                                    style={{
                                    color: 'white',
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    padding: 20,
                                    textAlign: 'center'
                                }}>Login</Text>
                                <TextInput
                                onChangeText={(email)=>this.setState({email})}
                                value={this.state.email}
                                    keyboardType='email-address'
                                    placeholder="Enter your email"
                                    placeholderTextColor='#efefef'
                                    style={{
                                    padding: 20,
                                    marginBottom: 20,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    width: '100%',
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(255,255,255,.5)'
                                }}></TextInput>
                                <TextInput
                                onChangeText={(password)=>this.setState({password})}
                                value={this.state.password}

                                    secureTextEntry={this.state.secureTextEntry}
                                    placeholder='Password'
                                    placeholderTextColor='#efefef'
                                    style={{
                                    padding: 20,
                                    marginBottom: 10,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    width: '100%',
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(255,255,255,.5)'
                                }}></TextInput>

                              {
                                  this.state.secureTextEntry?
                                  <TouchableOpacity
                                onPress={()=>this.showPass()}
                                    style={{
                                    alignItems: 'center',
                                    padding: 10
                                }}>
                                    <Text
                                        style={{
                                        color: 'orange'
                                    }}>Show password</Text>
                                </TouchableOpacity>
                                  :  <TouchableOpacity
                                onPress={()=>this.showPass()}
                                    style={{
                                    alignItems: 'center',
                                    padding: 10
                                }}>
                                    <Text
                                        style={{
                                        color: 'orange'
                                    }}>Hide password</Text>
                                </TouchableOpacity>
                              }
                            </View>
                            <TouchableOpacity
                            onPress={()=>this.loginFn()}
                                
                                style={{
                                backgroundColor: 'rgba(15,157,88,.8)',
                                padding: 20,
                                alignItems: 'center',
                                borderRadius: 2,
                                width: '100%',
                                marginBottom: 0
                            }}>
                                <Text
                                    style={{
                                    letterSpacing: 4,
                                    color: 'white'
                                }}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>

                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

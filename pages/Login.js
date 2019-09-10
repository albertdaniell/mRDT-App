import React, {Component} from 'react';

import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import {
    Toast,
    ScrollableTab,
    Separator,
    Item,
    Icon,
    Input
} from 'native-base';
import {white} from 'ansi-colors';
const axios = require('axios');
import * as Font from 'expo-font'
import {NavigationActions} from 'react-navigation';
import {AsyncStorage} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
            leaderData: [],
            secureTextEntry: true,
            loading: false,
            message: '',
            fontLoaded: false

        }
    }

    storeLoginSession = async() => {
        try {
            await AsyncStorage.setItem('loginEmail', this.state.leaderData.Email);
            Toast.show({text: 'Logging you in...', buttonText: 'Okay', duration: 4000})

            // alert("Nice saving data")
        } catch (error) {
            alert("Error saving data")
        }
    }

    storeLoginSession2 = async() => {
        try {
            await AsyncStorage.setItem('loginData', JSON.stringify(this.state.leaderData));
            Toast.show({text: `Logged in as ${this.state.leaderData.Email}`, buttonText: 'Okay', duration: 4000})

            //alert("Nice saving data")
        } catch (error) {
            alert("Error saving data")
        }
    }

    removeLoginSession = async() => {
        try {
            await AsyncStorage.removeItem('loginEmail');
            alert("Nice removing data")
        } catch (error) {
            alert("Error saving data")
        }
    }

    retrieveLoginSession = async() => {
        try {
            const value = await AsyncStorage.getItem('isLoggedIn');
            if (value !== null) {
                alert("data is " + value)
                console.log(value);
            } else {
                alert("no data")
            }
        } catch (error) {

            alert("Error retrieving data" + error)
            // Error retrieving data
        }
    };

    //   componentDidMount(){       //this.retrieveData()       //this.storeData()
    //     //this.removeLoginSession()   }

    async componentDidMount() {

        await Font.loadAsync({'Roboto_medium': require('../assets/Roboto-Medium.ttf')});

        this.setState({fontLoaded: true});
    }

    showPass = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    loginFn = () => {

        this.setState({message: 'Please wait...', loading: true})
        4
        if (this.state.email === null || this.state.password === null) {
            alert("Fields cannot be empty!")
            this.setState({message: '', loading: false})
            return 0;
        }
        setTimeout(() => {
            axios({method: 'GET', url: `http://134.209.148.107/api/leaders/${this.state.email}/`}).then(res => {
                this.setState({leaderData: res.data})

                //alert(res.data.password)

                if (this.state.email === res.data.Email && this.state.password === res.data.password) {
                    //alert("Niccee")
                    this.storeLoginSession2()

                    setTimeout(() => {
                        // this.props.navigation.reset([NavigationActions.navigate({ routeName:
                        // 'Dashboard' })], 0)
                        // this.props.navigation.navigate('Dashboard',{leaderName:this.state.leaderData.N
                        // ame})
                        this
                            .props
                            .navigation
                            .reset([NavigationActions.navigate({
                                    routeName: 'Dashboard',
                                    params: {
                                        leaderName: this.state.leaderData.Name,
                                        leaderData: this.state.leaderData
                                    }
                                })], 0)

                    }, 1000);
                } else {
                    this.setState({message: '', loading: false})
                    alert("Email and password do not match!")

                    this.setState({password: null})

                    this.set
                }
            }).catch((error) => {
                this.setState({message: '', loading: false})
               console.log(error.response.status)
               alert(error.response.stat)
               if(error.response.status === 404){
                   alert("User does not exist")
               }
            })
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/mbodabg-01.png')}
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
                                    autoCapitalize='none'
                                    onChangeText={(email) => this.setState({email})}
                                    value={this.state.email}
                                    keyboardType='email-address'
                                    placeholder="Enter your email"
                                    placeholderTextColor='#efefef'
                                    style={{
                                    color: 'white',
                                    padding: 20,
                                    marginBottom: 20,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    width: '100%',
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(0,0,0,.8)'
                                }}></TextInput>
                                {/* <TextInput
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}
                                    secureTextEntry={this.state.secureTextEntry}
                                    placeholder='Password'
                                    placeholderTextColor='#efefef'
                                    style={{
                                    color: 'white',
                                    padding: 20,
                                    marginBottom: 10,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    width: '100%',
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(0,0,0,.8)'
                                }}></TextInput> */}

                               
                                <TextInput
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}
                                    secureTextEntry={this.state.secureTextEntry}
                                    placeholder='Password'
                                    placeholderTextColor='#efefef'
                                    style={{
                                    color: 'white',
                                    padding: 20,
                                    marginBottom: 10,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    width: '100%',
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(0,0,0,.8)',
                                    width:'100%'
                                }}></TextInput>

                                {this.state.secureTextEntry
                                    ? <TouchableOpacity
                                            onPress={() => this.showPass()}
                                            style={{
                                            alignItems: 'center',
                                            padding: 20,
                                            marginBottom: 0,
                                  
                                   
                                        }}>
                                        <Text style={{color:'orange'}}>
                                            Show 
                                            <Icon style={{color:'white',fontSize:15}}  active name='eye' type="FontAwesome" />

                                        </Text>
                                        </TouchableOpacity>
                                    : <TouchableOpacity
                                        onPress={() => this.showPass()}
                                        style={{
                                        alignItems: 'center',
                                        padding: 20,
                                        marginBottom: 0,
                                   
                                 
                                    }}><Text style={{color:'orange'}}>
                                        Hide 
                                        <Icon color='white' style={{color:'white',fontSize:15,marginLeft:10}} active name='eye-slash' type="FontAwesome" />

                                    </Text>
                                    </TouchableOpacity>
}
                             
                              

                           
                            </View>

                            {this.state.loading
                                ? <TouchableOpacity
                                        disabled
                                        style={{
                                        backgroundColor: '#efefef',
                                        padding: 20,
                                        alignItems: 'center'
                                    }}>

                                        <ActivityIndicator size="small" color="#0000ff"/>

                                    </TouchableOpacity>

                                : <TouchableOpacity
                                    onPress={() => this.loginFn()}
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
}
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

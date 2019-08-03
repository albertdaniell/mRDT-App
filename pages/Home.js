// import ReactComponent from 'react';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity, ActivityIndicator,
} from 'react-native';
import {white} from 'ansi-colors';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Header from '../components/Header'
import {AsyncStorage} from 'react-native';
import { NavigationActions } from 'react-navigation';
const axios = require('axios');
import * as Font from 'expo-font'


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {showbtn:false,leaderData:[],leaderName:[],email:''}

    }

    getData=()=>{
        axios({
            method:'GET',
            url:`http://134.209.148.107/api/leaders/${this.state.email}/`
        }).then((res)=>{
            this.setState({
                leaderData:res.data
            })

            setTimeout(() => {
                 this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Dashboard' ,params:{leaderName:this.state.leaderData.Name,leaderData:this.state.leaderData}})], 0)
             
             }, 500);
        })
    }

    retrieveLoginSession = async () => {
        try {
          const value = await AsyncStorage.getItem('loginEmail');
          if (value !== null) {
            //alert("data  "+  JSON.parse(value.Name))
            console.log(value)
            

            this.setState({
                email:value
            })
            setTimeout(() => {
                this.getData()
            }, 400);

         
          }

          else{
            //   alert("no data")
            this.setState({
                showbtn:true
            })
          }
        } catch (error) {

            alert("Error retrieving data" +error)
          // Error retrieving data
        }
      };

      componentDidMount(){
          setTimeout(() => {
            this.retrieveLoginSession()
          }, 1000);
      }
      
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/tuktuk.jpg')}
                    style={{
                    height: '100%',
                    width: '100%'
                }}>
                    <View
                        style={{
                        backgroundColor: 'rgba(0,0,0,.6)',
                        height: '100%'
                    }}>

                        <View
                            style={{
                            backgroundColor: 'rgba(0,0,0,.9)',
                            flex: 1,
                            alignItems: 'flex-start',
                            height: '100%',
                            alignContent: 'flex-end',
                            justifyContent: 'flex-end',
                            padding: 0,
                            backgroundColor: 'rgba(0,0,0,.2)'
                        }}>
                            <Text
                                style={{
                                color: 'white',
                                fontSize: 50,
                                fontWeight: 'bold',
                                paddingLeft: 10
                            }}>Welcome!</Text>
                            <Text
                                style={{
                                color: 'white',
                                fontSize: 25,
                                fontWeight: 'bold',
                                marginBottom: 20,
                                paddingLeft: 10
                            }}>to M-BodaBoda.</Text>
                        {
                            this.state.showbtn?
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                                style={{
                                backgroundColor: 'rgba(255,69,0,.5)',
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
                                }}>GET STARTED</Text>
                            </TouchableOpacity>:     
                            <View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:10}}>
                            <ActivityIndicator size="small" color="orange" />
                            </View>

                        }
                        </View>

                    </View>
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

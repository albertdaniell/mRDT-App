import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserDemographics from './pages/DigitalBaseRegistration/UserDemographics'

import Form from './pages/DigitalBaseRegistration/Form'

export default function App() {
    return (
        <AppContainer></AppContainer>
    );
}

const AppNavigator = createStackNavigator({
    Form:{
        screen:Form,
        navigationOptions:{
            header:null
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
  
    UserDemographics:{
        screen:UserDemographics,
        navigationOptions:{
            header:null
        }
    },
   
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        }
    },
    
   
   
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

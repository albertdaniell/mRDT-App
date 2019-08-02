import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserDemographics from './pages/DigitalBaseRegistration/UserDemographics'

import Form from './pages/DigitalBaseRegistration/Form'
import Members from './pages/Members'
import ViewMember from './pages/ViewMember'
import { Root } from "native-base";
import MakePayment from './pages/MakePayment'
import Transactions from './pages/Transactions'


export default function App() {
    return (

         <Root>
         <AppContainer></AppContainer>
  </Root>
        
    );
}

const AppNavigator = createStackNavigator({

    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        }
    }, 

    Transactions:{
        screen: Transactions,
        navigationOptions: {
            header: null
        }
    },


    MakePayment:{
        screen: MakePayment,
        navigationOptions: {
            header: null
        }
    },

   
    Members: {
        screen: Members,
        navigationOptions: {
            header: null
        }
    },
   

    ViewMember:{
        screen: ViewMember,
        navigationOptions: {
            header: null
        }
    },
   

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

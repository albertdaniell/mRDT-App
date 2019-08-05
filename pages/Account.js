import React, {Component} from 'react'
const axios = require('axios');
import * as Font from 'expo-font'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    FlatList
} from 'react-native'

import {

    DatePicker,
    Picker,
    Container,
    Title,
    Content,
    Form,
    Item,
    Label,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Tabs,
    Tab,
    TabHeading,
    List,
    ListItem,
    Input,
    Grid,
    Col,
    Toast,
    ScrollableTab,
    Separator
} from 'native-base';
import Header from '../components/Header'
import {AsyncStorage} from 'react-native';
import { NavigationActions } from 'react-navigation';


export default class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'User Account',
            leaderName: '',
            leaderData: []
        }
    }

    componentDidMount() {

        const leaderData = this
            .props
            .navigation
            .getParam('leaderData', 'NO leader data');

        //alert(leaderName)

        this.setState({leaderData: leaderData})
    }

    removeLoginSession = async () => {
        try {
          await AsyncStorage.removeItem('loginData');
         // alert("Nice removing data")
         setTimeout(() => {
            // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Dashboard' })], 0)
             //this.props.navigation.navigate('Dashboard',{leaderName:this.state.leaderData.Name})
             this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Home' ,params:{leaderName:this.state.leaderData.Name,leaderData:this.state.leaderData}})], 0)
         
         }, 1000);
        } catch (error) {
        alert("Error removing data")
        }
      }

    logoutFn=()=>{
        this.removeLoginSession()

    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>

            <Header showBack={true} navigation={this.props.navigation} headerTitle={this.state.headerTitle}></Header>


        <View style={{flex:1}}>
        <List>
                    <Separator bordered>
                        <Text>Fullname</Text>
                    </Separator>
                    <ListItem>

                        <Text>{this.state.leaderData.Name}</Text>

                    </ListItem>

                    <Separator bordered>
                        <Text>Email</Text>
                    </Separator>
                    <ListItem>
                        <Text>{this.state.leaderData.Email}</Text>

                    </ListItem>
                    <Separator bordered>
                        <Text>Phone number</Text>
                    </Separator>
                    <ListItem>
                        <Text>{this.state.leaderData.phone_number}</Text>

                    </ListItem>

                    <ListItem>
                        <TouchableOpacity 
                        onPress={()=>this.logoutFn()}
                        style={{width:'100%'}}>
                        <Text>Logout</Text>
                        </TouchableOpacity>

                    </ListItem>

                </List>
        </View>
            </View>

        )
    }

}
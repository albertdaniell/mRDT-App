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
    ScrollableTab
} from 'native-base';
import Header from '../components/Header'
import DriverDetails from './Tabs/DriverDetails'
import Vehicle from './Tabs/Vehicle'
import Insurance from './Tabs/Insurance'
import Sacco from './Tabs/Sacco'


export default class ViewMember extends Component {

    constructor(props) {
        super(props)
        this.state = {
            driverDetails: [],
            memberId: '',
            frameNumber: '',
            loading1: true,
            vehicleDetails:[],
            insuranceDetails:[],
            saccoDetails:[]

        }
    }

    componentDidMount() {
        setTimeout(() => {
            const memberId = this
                .props
                .navigation
                .getParam('memberId', 'NO-ID');
            this.setState({memberId: memberId})

            //alert(this.state.memberId)

            axios({method: 'GET', url: `http://134.209.148.107/api/rider/${this.state.memberId}/`}).then((response) => {
                //alert(response.data.Name)
                this.setState({driverDetails: response.data,loading1: false})

                //alert(this.state.driverDetails.Name)

            }).catch(() => {})

            axios({method: 'GET', url: `http://134.209.148.107/api/vehicle/${this.state.memberId}/`}).then((response) => {
                //alert(response.data.Name)
                this.setState({vehicleDetails: response.data,loading1: false,frameNumber:response.data.FrameNumber})

                //alert(this.state.driverDetails.Name)

            }).catch(() => {})

       setTimeout(() => {
        axios({method: 'GET', url: `http://134.209.148.107/api/insurance/${this.state.frameNumber}/`}).then((response) => {
            //alert(response.data.Name)
            this.setState({insuranceDetails: response.data,loading1: false,})

            //alert(this.state.driverDetails.Name)

        }).catch(() => {})
       }, 1000);

       axios({method: 'GET', url: `http://134.209.148.107/api/sacco/${this.state.memberId}/`}).then((response) => {
        //alert(response.data.Name)
        this.setState({saccoDetails: response.data,loading1: false})

        //alert(this.state.driverDetails.Name)

    }).catch(() => {})
        }, 1000)

    }
    render() {

        return (
            <View style={{
                flex: 1
            }}>
                <Header
                    showBack={true}
                    navigation={this.props.navigation}
                    headerTitle='Rider Details'></Header>

                <View style={{
                    flex: 1
                }}>

                    <Tabs style={{}} renderTabBar={() => <ScrollableTab/>}>

                        <Tab
                            heading="Rider"
                            style={{
                            padding: 10
                        }}
                            activeTabStyle={{
                            backgroundColor: '#00766c'
                        }}
                        activeTextStyle={{ color:'white'}}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                            {this.state.loading1
                                ? <Text>Please wait..</Text>
                                : <DriverDetails driverDetails={this.state.driverDetails}></DriverDetails>
}
                        </Tab>
                        <Tab
                            heading="Vehicle"
                            style={{
                            padding: 10
                        }}

                        activeTextStyle={{ color:'white'}}
                            activeTabStyle={{
                            backgroundColor: '#00766c',
                           
                        }}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                        {this.state.loading1
                                ? <Text>Please wait..</Text>
                                : <Vehicle vehicleDetails={this.state.vehicleDetails}></Vehicle>
}
                        </Tab>
                        <Tab
                            heading="Owner"
                            style={{
                            padding: 10
                        }}
                            activeTabStyle={{
                            backgroundColor: '#00766c'
                        }}
                        activeTextStyle={{ color:'white'}}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                            <Text>hahaha</Text>
                        </Tab>

                        <Tab
                            heading="Insurance"
                            style={{
                            padding: 10
                        }}
                            activeTabStyle={{
                            backgroundColor: '#00766c'
                        }}
                        activeTextStyle={{ color:'white'}}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                        {this.state.loading1
                                ? <Text>Please wait..</Text>
                                : <Insurance insuranceDetails={this.state.insuranceDetails}></Insurance>
}
                        </Tab>

                        <Tab
                            heading="Sacco"
                            style={{
                            padding: 10
                        }}
                            activeTabStyle={{
                            backgroundColor: '#00766c'
                        }}
                        activeTextStyle={{ color:'white'}}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                        {this.state.loading1
                                ? <Text>Please wait..</Text>
                                : <Sacco saccoDetails={this.state.saccoDetails}></Sacco>
}
                        </Tab>
                    </Tabs>

                </View>
            </View>
        )
    }

}
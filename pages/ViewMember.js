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
    FlatList,ActivityIndicator
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
import Owner from './Tabs/Owner'


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
            saccoDetails:[],
            ownerDetails:[],
            ownerExists:false

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
setTimeout(() => {
    
if(this.state.frameNumber === ''){
    //alert(0)
this.setState({
    ownerExists:false
})
}else{
    setTimeout(() => {
        axios({method: 'GET', url: `http://134.209.148.107/api/owner/${this.state.frameNumber}/`}).then((response) => {
            //alert(response.data.Name)
            this.setState({ownerDetails: response.data,loading1: false,ownerExists:true})
    
            //alert(this.state.driverDetails.Name)
    
        }).catch(() => {})
    }, 500)
}
}, 1000);
    //alert(0)
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
                        textStyle={{color:'#ccc'}}
                            activeTabStyle={{
                            backgroundColor: '#00766c'
                        }}
                        activeTextStyle={{ color:'white'}}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                            {this.state.loading1
                                ?  <ActivityIndicator size="large" color="#0000ff" />
                                : <DriverDetails driverDetails={this.state.driverDetails}></DriverDetails>
}
                        </Tab>
                        <Tab
                            heading="Vehicle"
                            style={{
                           
                        }}
                        textStyle={{color:'#ccc'}}

                        activeTextStyle={{ color:'white'}}
                            activeTabStyle={{
                            backgroundColor: '#00766c',
                           
                        }}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                        {this.state.loading1
                                ? <ActivityIndicator size="large" color="#0000ff" />
                                : <Vehicle vehicleDetails={this.state.vehicleDetails}></Vehicle>
}
                        </Tab>
                        <Tab
                            heading="Owner"
                            style={{
                            padding: 10
                        }}

                        textStyle={{color:'#ccc'}}
                            activeTabStyle={{
                            backgroundColor: '#00766c'
                        }}
                        activeTextStyle={{ color:'white'}}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                        {this.state.loading1
                                ? <ActivityIndicator size="large" color="#0000ff" />
                                : 
                                    this.state.ownerExists?
                                    <Owner ownerDetails={this.state.ownerDetails}></Owner>
                                    :<Text>This boda boda/ tuk tuk belongs to this member</Text>
                                
}
                        </Tab>

                        <Tab
                            heading="Insurance"
                            style={{
                            padding: 10
                        }}

                        textStyle={{color:'#ccc'}}
                            activeTabStyle={{
                            backgroundColor: '#00766c'
                        }}
                        activeTextStyle={{ color:'white'}}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                        {this.state.loading1
                                ?  <ActivityIndicator size="large" color="#0000ff" />
                                : <Insurance insuranceDetails={this.state.insuranceDetails}></Insurance>
}
                        </Tab>

                        <Tab
                            heading="Sacco"
                            style={{
                            padding: 10
                        }}
                        textStyle={{color:'#ccc'}}
                            activeTabStyle={{
                            backgroundColor: '#00766c'
                        }}
                        activeTextStyle={{ color:'white'}}
                            tabStyle={{
                            backgroundColor: '#00766c'
                        }}>
                        {this.state.loading1
                                ? <ActivityIndicator size="large" color="#0000ff" />
                                : <Sacco saccoDetails={this.state.saccoDetails}></Sacco>
}
                        </Tab>
                    </Tabs>

                </View>
            </View>
        )
    }

}
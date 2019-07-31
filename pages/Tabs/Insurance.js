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
import Header from '../../components/Header'

export default class Insurance extends Component {

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <List>
                    <ListItem>
                        <Left>
                            <Text>Frame Number</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.insuranceDetails.FrameNumber}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Has Insurance</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.insuranceDetails.HasInsurance}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Insurance Company</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.insuranceDetails.InsuranceCompany}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Insurance Expiry date</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.insuranceDetails.InsuranceExpiry}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Licence Number</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.insuranceDetails.LicenseNumber}</Text>
                        </Right>
                    </ListItem>

                </List>
            </View>

        )
    }

}
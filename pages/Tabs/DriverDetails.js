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

export default class ViewMember extends Component {

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <Content>
                    <List>
                        <ListItem>
                            <Left>
                                <Text>Full name</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.Name}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>ID Number</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.IDNo}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>Gender</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.Gender}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>DOB</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.DateofBirth}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>Country Code</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.CountryCode}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>Phone</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.PhoneNumber}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>County</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.County}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>Sub County</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.SubCounty}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>Ward</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.Ward}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>Base</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetailBaseName}</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>Experience Years</Text>
                            </Left>
                            <Right>
                                <Text>{this.props.driverDetails.YearsOfExperience}</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </View>
        )
    }
}
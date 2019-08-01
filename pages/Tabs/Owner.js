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

export default class Owner extends Component {

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <List>
                    <ListItem>
                        <Left>
                            <Text>Name of owner</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.ownerDetails.Name}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>ID Number</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.ownerDetails.IDNo}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Phone number</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.ownerDetails.PhoneNumber}</Text>
                        </Right>
                    </ListItem>

                </List>
            </View>

        )
    }

}
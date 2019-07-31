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

                <List>
                    <ListItem>
                        <Left>
                            <Text>Frame Number</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.vehicleDetails.FrameNumber}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Boda boda/Tuk tuk Make</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.vehicleDetails.Make}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Plate Number</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.vehicleDetails.RegNumber}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Ownership</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.vehicleDetails.Ownership}</Text>
                        </Right>
                    </ListItem>
                </List>
            </View>

        )
    }

}
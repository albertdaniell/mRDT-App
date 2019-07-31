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

export default class Sacco extends Component {

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <List>
                    <ListItem>
                        <Left>
                            <Text>Sacco Membership</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.saccoDetails.Membership}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Sacco Name</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.saccoDetails.SaccoName}</Text>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Daily Contribution</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.saccoDetails.DailyContribution}</Text>
                        </Right>
                    </ListItem>

               

                 

                </List>
            </View>

        )
    }

}
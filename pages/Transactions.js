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
    FlatList,
    Image
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
    Toast
} from 'native-base';
import Header from '../components/Header'

export default class Transactions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'Transactions',
            membersData: [],
            fontLoaded: false,
            isLoading: true,
            transactionData:[],
            leaderData:[],
            leaderName:[]
        }
    }

    getAllTranactions = () => {
        axios({method: "GET", url: `http://134.209.148.107/api/payments/${this.state.leaderData.phone_number}/`}).then((response) => {
             this.setState({transactionData: response.data,isLoading:false})
//alert(response.data.amount)
            //alert("yeyeyeye")

        }).catch(() => {})
    }

    // componentDidMount() {
        
    // }

    componentDidMount(){
        const leaderName = this.props.navigation.getParam('leaderName', 'NO leader name');

        const leaderData = this.props.navigation.getParam('leaderData', 'NO leader data');
       setTimeout(() => {
        this.getAllTranactions()
       }, 400);
        //alert(leaderName)

        this.setState({
            leaderName:leaderName,
            leaderData:leaderData
        })
    }


    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Header
                    showBack={true}
                    navigation={this.props.navigation}
                    headerTitle={this.state.headerTitle}></Header>
                <View style={{
                    flex: 1
                }}>

                    <FlatList
                        refreshing={this.state.isLoading}
                        onRefresh={() => this.getAllTranactions}
                        data={this.state.transactionData}
                        keyExtractor={item => item.merchantRequestID}
                        renderItem={({item}) => <ListItem avatar>
                        <Left>
                            <Icon
                                name="money"
                                type='FontAwesome'
                                style={{
                                borderRadius: 100
                            }}/>
                        </Left>
                        <Body>
                            <TouchableOpacity
                               >
                                <Text
                                    style={{
                                    marginBottom: 5
                                }}>{item.mpesaReceiptNumber}</Text>
                                <Text
                                    note
                                    numberOfLines={1}
                                    style={{
                                    fontSize: 12
                                }}
                                    selectionColor='orange'>Amount of {item.amount} </Text>
                            </TouchableOpacity>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>}/>

                    {/* {
                        this.state.transactionData.map((trans)=>{
                            return(
                                <Text>{trans.amount}</Text>
                            )
                        })
                    } */}
                </View>
            </View>
        )
    }
}

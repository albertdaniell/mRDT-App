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
    Toast
} from 'native-base';
import Header from '../components/Header'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'Members',
            membersData: [],
            fontLoaded: false
        }
    }

    getMembers = () => {
        axios({method: "GET", url: 'http://134.209.148.107/api/rider/'}).then((response) => {
            this.setState({membersData: response.data})

            // console.log(JSON.stringify(this.state.membersData))

        })
    }

    async componentDidMount() {
        setTimeout(() => {
            this.getMembers()
        }, 1000)

        await Font.loadAsync({'Roboto_medium': require('../assets/Roboto-Medium.ttf')});

        this.setState({fontLoaded: true});
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <View style={{
                    flex: 1
                }}>
                    <Header showBack={true} navigation={this.props.navigation} headerTitle={this.state.headerTitle}></Header>

                    <View
                        style={{
                        flex: 1,
                        height: '100%'
                    }}>

                        <ScrollView>
                            <FlatList
                                data={this.state.membersData}
                                keyExtractor={item => item.IDNo}
                                renderItem={({item}) => <ListItem avatar>
                                <Left>
                                    <Icon
                                        name="user"
                                        type='FontAwesome'
                                        style={{
                                        borderRadius: 100
                                    }}/>
                                </Left>
                                <Body>
                                    <TouchableOpacity
                                    onPress={()=> this.props.navigation.navigate('ViewMember',{memberId:item.IDNo})}
                                        >
                                        <Text
                                            style={{
                                            marginBottom: 5
                                        }}>{item.Name}</Text>
                                        <Text
                                            note
                                            numberOfLines={1}
                                            style={{
                                            fontSize: 12
                                        }}
                                            selectionColor='orange'>{item.PhoneNumber}</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>}/>
                        </ScrollView>
                    </View>

                    {/* {this
                        .state
                        .membersData
                        .map((member) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                    padding: 20,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'rgb(224, 224, 224)'
                                }}
                                    key={member.Name}>
                                    <Text>
                                        {member.Name}
                                    </Text>
                                </TouchableOpacity>

                            )
                        })
} */}
                </View>
            </View>
        )
    }

}
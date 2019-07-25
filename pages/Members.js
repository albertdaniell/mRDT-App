import React, {Component} from 'react'
const axios = require('axios');

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
    Col
} from 'native-base';
import Header from '../components/Header'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'Members',
            membersData: []

        }
    }

    getMembers = () => {
        axios({method: "GET", url: 'http://134.209.148.107/api/rider/'}).then((response) => {
            this.setState({membersData: response.data})

            // console.log(JSON.stringify(this.state.membersData))

        })
    }

    componentWillMount() {
        setTimeout(() => {
            this.getMembers()
        }, 1000)
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <View style={{
                    flex: 1
                }}>
                    <Header navigation={this.props.navigation} headerTitle={this.state.headerTitle}></Header>

                    <View style={{
                        height: '100%'
                    }}>

                        <ScrollView
                            state={{
                            height: '100%'
                        }}>
                            <FlatList
                                data={this.state.membersData}
                                keyExtractor={item => item.Name}
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
                                        onPress={() => this.props.navigation.navigate('compDetails', {companyId: item.id})}>
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
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
import {AsyncStorage} from 'react-native';


export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'Members',
            membersData: [],
            fontLoaded: false,
            isLoading:true
        }
    }

    getMembers = () => {
        axios({method: "GET", url: 'http://134.209.148.107/api/rider/'}).then((response) => {
            this.setState({membersData: response.data,  isLoading:false})
setTimeout(() => {
    this.storeMembersData()
}, 1000);
            // console.log(JSON.stringify(this.state.membersData))

        })
    }


    getOfllineMembers = async () =>{
        try {
            const value1 = await AsyncStorage.getItem('offlineMembersData');
            let value = JSON.parse(value1);
            if (value !== null) {
                this.setState({
                    membersData:value,
                    isLoading:false
                })
            }

        }catch(error){

        }
    }
    storeMembersData = async () => {
        try {
            const value1 = await AsyncStorage.getItem('offlineMembersData');
            let value = JSON.parse(value1);
            if (value !== null) {
               
try{
    await AsyncStorage.setItem('offlineMembersData',JSON.stringify(this.state.membersData))
    alert("Data synced..")
}catch(error){
    alert(error+"Error merging")

}
            }

            else{
                try{
                    await AsyncStorage.setItem('offlineMembersData', JSON.stringify(this.state.membersData));
                    alert("offlineMembersData has been saved")


                }catch(error){
                    alert("error saving offline data")

                }

            }
        //  await AsyncStorage.getItem('offlineMembersData', JSON.stringify(this.state.membersData));


         // alert("Nice saving data")
        } catch (error) {
    alert("No data found")
        }
      }
    async componentDidMount() {
        // setTimeout(() => {
        //     this.getMembers()
        // }, 1000)

        this.getOfllineMembers() 

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

                  
                            <FlatList
                            refreshing={this.state.isLoading}
                            onRefresh={()=>this.getOfllineMembers}
                            
                                data={this.state.membersData}
                                keyExtractor={item => item.IDNo+item.Name}
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
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
    FlatList,ActivityIndicator,Image
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
    ScrollableTab,
    Separator
} from 'native-base';
import Header from '../components/Header'
import {AsyncStorage} from 'react-native';
import { NavigationActions } from 'react-navigation';


export default class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'User Account',
            leaderName: '',
            leaderData: [],showBack:true,
            base_Name:'- -',
            dummyData:[
                {
                    "Name":'Alby',
                    "age":20,
                    "color":'red'
                },
                {
                    "Name":'Dan',
                    "age":22,
                    "color":'red'
                },
                {
                    "Name":'Agoya',
                    "age":2,
                    "color":'green'
                }
            ],

               dummyData2:
                [{
                    "Name":'Bae',
                    "age":20,
                    "color":'red'
                }],

                dummyData3:
                {
                    demo: {"Name":'Bae',
                    "age":20,
                    "color":'red'
                },
                insurance:{
                    "insuranceName":'Jubilee'
                },
                owner:{
                    "ownerName":'Alby'
                }

                },
               
            
        }
    }

    addToData=()=>{
        this.setState({
            dummyData:[...this.state.dummyData, 
            this.state.dummyData2]
        })
    }

    

    async componentDidMount() {


        await Font.loadAsync({'Roboto_medium': require('../assets/Roboto-Medium.ttf')});

        this.setState({fontLoaded: true});

        const leaderData = this
            .props
            .navigation
            .getParam('leaderData', 'NO leader data');

            const base_Name = this
            .props
            .navigation
            .getParam('base_Name', '- -');
        //alert(leaderName)

        this.setState({leaderData: leaderData,message:'',loading:false,base_Name:base_Name})
    }

    removeLoginSession = async () => {
        try {
          await AsyncStorage.removeItem('loginData');
          Toast.show({text: `Goodbye ${this.state.leaderData.Name}`, buttonText: 'Okay', duration: 4000})

         // alert("Nice removing data")
         setTimeout(() => {

            // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Dashboard' })], 0)
             //this.props.navigation.navigate('Dashboard',{leaderName:this.state.leaderData.Name})
             this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Home' ,params:{leaderName:this.state.leaderData.Name,leaderData:this.state.leaderData}})], 0)
         
         }, 1000);
        } catch (error) {
            this.setState({loading:false})
        alert("Error removing data")
        }
      }

    logoutFn=()=>{
        this.setState({loading:true,showBack:false})
        this.removeLoginSession()

    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>

            {/* <Text style={{color:'#595959',padding:10,fontSize:40,marginTop:20,fontWeight:"bold"}}>Profile</Text> */}


            <Header showBack={this.state.showBack} navigation={this.props.navigation} headerTitle={this.state.headerTitle}></Header>
<View style={{flex:.6,marginBottom:10,padding:10}}>
   <View style={{flex:1,flexDirection:'row',marginBottom:10}}>

   <View style={{flex:.4,borderRightWidth:5,borderRightColor:'#efefef'}}>
        <Image source={require('../assets/myuser.png')} style={{width:100,height:100}}></Image>
    </View>
    <View style={{flex:.6,padding:10}}>
        <Text>Name: {this.state.leaderData.Name}</Text>
        <Text>Phone: {this.state.leaderData.phone_number}</Text>

        <Text>Email: {this.state.leaderData.Email}</Text>
    </View>
   </View>

   <TouchableOpacity style={{padding:15,alignContent:'center',alignItems:'center',backgroundColor:'#1289cd',borderRadius:4}}>
        <Text style={{letterSpacing:3,color:'white'}}>EDIT</Text>
    </TouchableOpacity>
</View>



        <View style={{flex:1.4,padding:10}}>
        <List>
                    

                    <ListItem itemDivider>
                        <Text style={{color:'green'}}>Base Name</Text>
                    </ListItem>
                    <ListItem>

                        <Text >{this.state.base_Name}</Text>

                    </ListItem>


                    <ListItem>
                       


  {this.state.loading
                    ? <TouchableOpacity
                            disabled
                            >

                            <ActivityIndicator size="small" color="#0000ff"/>

                        </TouchableOpacity>

                    :   <TouchableOpacity 
                        onPress={()=>this.logoutFn()}
                        style={{width:'100%'}}>
                        <Text style={{color:'red',fontWeight:'bold'}}>Logout</Text>
                        </TouchableOpacity>
}
                    </ListItem>

                </List>

                {/* <Text>Dummy</Text>
                {
                    this.state.dummyData.map((d)=>{
                        return(<Text>{d.Name}</Text>)

                    })
                }

                <TouchableOpacity onPress={()=>this.addToData()}>
                    <Text>Add to data</Text>
                </TouchableOpacity> */}
        </View>
            </View>

        )
    }

}
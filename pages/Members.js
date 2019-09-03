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
            isLoading:true,
            base_Id:'',
            base_Name:'',
            message:'No members yet...',
            dataPreset:false,
            showLoading:true
        }
    }

    getMembers = () => {
        this.setState({
            showLoading:true
        })
       // Toast.show({text: `Loading....`,  duration: 1000})

        //alert(this.state.base_Id)
        setTimeout(() => {
          axios({method: "GET", url: `http://134.209.148.107/api/rider2/${this.state.base_Id}`}).then((response) => {
              this.setState({membersData: response.data, isLoading: false})
              setTimeout(() => {
                 
                  this.storeMembersData()
                  this.setState({
                    isLoading:false
                  })
              }, 1000);
              // console.log(JSON.stringify(this.state.membersData))
  
          })
        }, 2000);
      }
  
      storeMembersData = async () => {
          try {
              const value1 = await AsyncStorage.getItem('offlineMembersData');
          console.log(JSON.stringify(this.state.membersData))
          if(value1 === JSON.stringify(this.state.membersData)){
            //  // alert("same")
              Toast.show({text: `Members data is upto date.`, buttonText: 'Okay', duration: 4000})
              this.setState({
                showLoading:false
            })
          }
  
          else{
              Toast.show({text: `Members have been synced`, buttonText: 'Okay', duration: 4000})
  
          }
              let value = JSON.parse(value1);
              if (value !== null) {
                 
  
                  try {
                      await AsyncStorage.setItem('offlineMembersData', JSON.stringify(this.state.membersData))
  
                      
                     // alert("Data synced..")
                  } catch (error) {
                     // alert(error + "Error merging")
  
                  }
              } else {
                  try {
                      await AsyncStorage.setItem('offlineMembersData', JSON.stringify(this.state.membersData));
                    //  alert("offlineMembersData has been saved")
  
                  } catch (error) {
                    //  alert("error saving offline data")
  
                  }
  
              }
              //  await AsyncStorage.getItem('offlineMembersData',
              // JSON.stringify(this.state.membersData)); alert("Nice saving data")
          } catch (error) {
             // alert(error+"No data found")
          }
      }
  


    getOfllineMembers = async () =>{
        try {
            const value1 = await AsyncStorage.getItem('offlineMembersData');
            let value = JSON.parse(value1);
            if (value !== null) {
                this.setState({
                    membersData:value,
                    isLoading:false,
                    dataPreset:true,
                    message:'',
                    foundResult:false
                })
            //    alert(this.state.membersData)

              
            }

        
           

        
            else{
                this.setState({
                    message:'No Members yet...'

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

    this.setState({
        isLoading:false
    })
    this.setState({
        showLoading:false
    })

    //Toast.show({text: `Members data is upto date.`, buttonText: 'Okay', duration: 4000})

   // alert("Data synced..")
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


      searchMembers=()=>{
          this.state.membersData.map((member)=>{
           // console.log(member.Name)
              var str=member.Name.toLowerCase()
              //var str=str.toLowerCase();
              var n=str.indexOf("Hahaha".toLowerCase())
             // var n=n.toLowerCase();
              //console.log(n)
              if (n>=0){
                  console.log("Results found")
                  console.log(member.Name)
                  console.log(n)

                  this.setState({
                      foundResult:true
                  })

                  return 0;
              }else{
               setTimeout(() => {
                if(this.state.foundResult){
                    // console.log("no results")
                    // console.log(n)
                 }
                 else{
                    console.log("no results")
                    console.log(n)
                 }
               }, 1000);
                    
                 
               
              }

              
             

              //var member.Name=str.search()
            //   if(member.Name === 'Daniel albert'){

            //   }

          })


      }
    async componentDidMount() {
        // setTimeout(() => {
        //     this.getMembers()
        // }, 1000)

        setTimeout(()=>{
this.getMembers()
        },3000)

        setTimeout(()=>{
            this.searchMembers()
        },1000)

        if(this.state.membersData === []){
            this.setState({
                message:'No Members yet...'

            })
        }


        const base_Name = this
        .props
        .navigation
        .getParam('base_Name', '- -');
        const base_Id = this
        .props
        .navigation
        .getParam('base_Id', '- -');
        this.setState({
            base_Id:base_Id,
            base_Name:base_Name
        })
        //alert(base_Id)

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
                    <Header showBack={true} showLoading={this.state.showLoading} navigation={this.props.navigation} headerTitle={this.state.headerTitle}></Header>

                    <View
                        style={{
                        flex: 1,
                        height: '100%'
                    }}>

                   {
                       this.state.dataPreset?
     null
                       : <Text style={{padding:10,flex:1}}>
                            Message: {this.state.message}
                            </Text> 
                   }

<View style={{flex:.1,margin:10}}>
    <TextInput placeholder="Search..." style={{
        padding:15,backgroundColor:'#efefef',borderRadius:10
    }}></TextInput>
</View>
                    


                  
                            <FlatList style={{flex:.9}}
                            refreshing={this.state.isLoading}
                            onRefresh={()=>this.getMembers()}
                            
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
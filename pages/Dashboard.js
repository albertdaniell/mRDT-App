import React, {Component} from 'react'
const axios = require('axios');
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,NetInfo,Vibration
} from 'react-native';
import Header from '../components/Header'
import Anime from './anime/anime1'
import {AsyncStorage} from 'react-native';
import {Toast} from 'native-base'
import AppNotif from '../components/AppNotification'
const DURATION = 10000
const PATTERN = [1000]

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'M-BodaBoda App',
            leaderName: '',
            leaderData: [],
            membersData: [],
            isLoading: false,
            base_Name: '- -',
            base_Id: '',
            headerTitle: 'Dashboard',

            dayOfWeek: '',
            dateOfWeek: '',
            month: '',
            isOffline:false,
            OnlineMessage:''

        }
    }

    getBase = () => {
        axios({method: "GET", url: `http://134.209.148.107/api/bases/${this.state.leaderData.id}`}).then((res) => {
            //alert(res.data.Name)
            this.setState({base_Name: res.data.Name, base_Id: res.data.id})
        })
    }

    async componentDidMount() {

       
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is ' + (isConnected ? 'online' :
this.setState({
    isOffline:true,
    OnlineMessage:'Check Your Connection'
})

            ));
          });
        await this.getDay()
        setTimeout(() => {
            this.getDate()
        }, 100);
        this.getMonth()
        setTimeout(() => {
            this.getMembers()
            this.getBase()

        }, 1000)
        const leaderName = this
            .props
            .navigation
            .getParam('leaderName', 'NO leader name');

        const leaderData = this
            .props
            .navigation
            .getParam('leaderData', 'NO leader data');

        //alert(leaderName)

        this.setState({leaderName: leaderName, leaderData: leaderData})

    }

    getDay = () => {
        var d = new Date();
        var myDay = d.getDay();
        if (myDay === 1) {
            this.setState({
                
                    dayOfWeek: 'Monday'
                
            })
        } else if (myDay === 2) {
            this.setState({
               
                    dayOfWeek: 'Tuesday'
            
            })
        } else if (myDay === 3) {
            this.setState({
           
                    dayOfWeek: 'Wednesday'
             
            })
        } else if (myDay === 4) {
            this.setState({
                
                    dayOfWeek: 'Thursday'
           
            })
        } else if (myDay === 5) {
            this.setState({
         
                    dayOfWeek: 'Friday'
               
            })
        } else if (myDay === 6) {
            this.setState({
           
                    dayOfWeek: 'Saturday'
              
            })
        } else if (myDay === 7) {
            this.setState({
               
                    dayOfWeek: 'Sunday'
              
            })
        }
    }

    getMonth = () => {
        var d = new Date();
        var myMonth = d.getMonth() + 1;
        var monthName = ''
        if (myMonth === 1) {
            monthName = 'January'
        } else if (myMonth === 2) {
            monthName = 'February'
        } else if (myMonth === 3) {
            monthName = 'March'
        } else if (myMonth === 4) {
            monthName = 'April'
        } else if (myMonth === 5) {
            monthName = 'May'
        } else if (myMonth === 6) {
            monthName = 'June'
        } else if (myMonth === 7) {
            monthName = 'July'
        } else if (myMonth === 8) {
            monthName = 'August'
        } else if (myMonth === 9) {
            monthName = 'September'
        } else if (myMonth === 10) {
            monthName = 'October'
        } else if (myMonth === 11) {
            monthName = 'November'
        } else if (myMonth === 12) {
            monthName = 'December'
        }

        setTimeout(() => {
            this.setState({
               
                    dateOfWeek: this.state.dateOfWeek,
                    dayofWeek: this.state.dayOfWeek,
                    month: monthName
               
            })
        }, 100);

    }

    getDate = () => {
        var d2 = new Date();
        var mydate2 = d2.getDate()
        this.setState({
         
                dayOfWeek: this.state.dayOfWeek,
                dateOfWeek: mydate2
     
        })

    }

    getMembers = () => {
        setTimeout(() => {
            axios({method: "GET", url: `http://134.209.148.107/api/rider2/${this.state.base_Id}`}).then((response) => {
                this.setState({membersData: response.data, isLoading: false})
                setTimeout(() => {

                    this.storeMembersData()
                }, 1000);
                // console.log(JSON.stringify(this.state.membersData))

            })
        }, 2000);
    }

    storeMembersData = async() => {
        try {
            const value1 = await AsyncStorage.getItem('offlineMembersData');
            console.log(JSON.stringify(this.state.membersData))
            if (value1 === JSON.stringify(this.state.membersData)) {
                // alert("same")
            } else {
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

    render() {

        return (
            <View style={{
                flex: 1
            }}>
         
                <View style={{
                    flex: .13
                }}>
                

                    <Header
                        showBack={this.state.showBack}
                        navigation={this.props.navigation}
                        headerTitle={this.state.headerTitle}></Header>

                    {/* <Text style={{color:'#595959',padding:10,fontSize:40,marginTop:20,fontWeight:"bold"}}>Dashboard</Text> */}
                </View>

                <Anime
                    style={{
                    flex: .87,
                    padding: 3
                }}>

                    <View
                        style={{
                        flex: 1,
                        padding: 5
                    }}>
                        <View
                            style={{
                            backgroundColor: '#bc5100',
                            flex: 1,
                            borderRadius: 10
                        }}>
                            <View
                                style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                marginTop: 10,
                                padding: 10,
                                fontSize: 18
                            }}>
                                <Text
                                    style={{
                                    color: 'white',
                                    fontSize: 13,
                                    textTransform: 'uppercase'
                                }}>{this.state.dayOfWeek}
                                    , {this.state.dateOfWeek}  {this.state.month}
                                </Text>
                                <Text
                                    style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: '#efefef'
                                }}>
                                    {this.state.base_Name} Base

                                </Text>

                            </View>
                            <View
                                style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'flex-start',
                                marginBottom: 10,
                                marginLeft: 5
                            }}>
                                <Image
                                    source={require('../assets/cloud-solid.png')}
                                    style={{
                                    height: '110%',
                                    width: '30%'
                                }}></Image>

                            </View>

                        </View>
                    </View>
                    <View
                        style={{
                        flex: 1,
                        padding: 5
                    }}>
                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('MakePayment', {base_Name: this.state.base_Name,
                                base_Id: this.state.base_Id
                            })}
                                style={{
                                flex: 1,
                                backgroundColor: '#4b830d',
                                marginRight: 5,
                                borderRadius: 10
                            }}>

                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10
                                }}>

                                    <Image
                                        source={require('../assets/moneytransfer.png')}
                                        style={{
                                        height: '70%',
                                        width: '70%'
                                    }}></Image>

                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginBottom: 10
                                }}>
                                    <Text
                                        style={{
                                        color: 'white'
                                    }}>Make Payments</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Members', {
                                base_Name: this.state.base_Name,
                                base_Id: this.state.base_Id
                            })}
                                style={{
                                flex: 1,
                                backgroundColor: '#006978',
                                marginRight: 5,
                                borderRadius: 10
                            }}>
                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10
                                }}>
                                    <Image
                                        source={require('../assets/group-icon.png')}
                                        style={{
                                        height: '75%',
                                        width: '60%'
                                    }}></Image>
                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginBottom: 10
                                }}>
                                    <Text
                                        style={{
                                        color: 'white'
                                    }}>Members</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Form')}
                                style={{
                                flex: 1,
                                backgroundColor: '#49599a',
                                borderRadius: 10
                            }}>
                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10
                                }}>
                                    <Image
                                        source={require('../assets/useradd.png')}
                                        style={{
                                        height: '70%',
                                        width: '50%'
                                    }}></Image>
                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginBottom: 10
                                }}>
                                    <Text
                                        style={{
                                        color: 'white'
                                    }}>Register Member</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                        flex: 1,
                        padding: 5
                    }}>
                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Transactions', {
                                leaderData: this.state.leaderData,
                                leaderName: this.state.leaderName
                            })}
                                style={{
                                flex: 1,
                                marginRight: 5,
                                backgroundColor: '#494949',
                                borderRadius: 10
                            }}>

                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10
                                }}>
                                    <Image
                                        source={require('../assets/cash.png')}
                                        style={{
                                        height: '80%',
                                        width: '50%'
                                    }}></Image>
                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginBottom: 10
                                }}>
                                    <Text
                                        style={{
                                        color: 'white'
                                    }}>Transactions</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Account', {
                                leaderData: this.state.leaderData,
                                base_Name: this.state.base_Name
                            })}
                                style={{
                                flex: 1,
                                marginRight: 5,
                                backgroundColor: '#af4448',
                                borderRadius: 10
                            }}>

                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10
                                }}>
                                    <Image
                                        source={require('../assets/idcardsolid.png')}
                                        style={{
                                        height: '80%',
                                        width: '50%'
                                    }}></Image>
                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginBottom: 10
                                }}>
                                    <Text
                                        style={{
                                        color: 'white'
                                    }}>User Account</Text>
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>
                   
                </Anime>
                {
                    this.state.isOffline?
                    <AppNotif OnlineMessage={this.state.OnlineMessage}></AppNotif>

                    :null
                }
            </View>
        )
    }
}
import React, {Component} from 'react'
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Header from '../components/Header'

export default class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state={
            headerTitle: 'M-BodaBoda App',
            leaderName:'',
            leaderData:[]
        }
    }

    componentDidMount(){
        const leaderName = this.props.navigation.getParam('leaderName', 'NO leader name');

        const leaderData = this.props.navigation.getParam('leaderData', 'NO leader data');

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
                <View style={{
                    flex: .13
                }}>
                    <Header showBack={false} navigation={this.props.navigation} headerTitle={this.state.headerTitle}></Header>
                </View>

                <View
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
                            backgroundColor: '#ffb400',
                            flex: 1,
                            borderRadius: 10
                        }}>
                            <View
                                style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                marginTop: 10,
                                padding:10
                            }}>
                                <Text
                                    style={{
                                    color: 'grey'
                                }}>Welcome</Text>
                                <Text
                                    style={{
                                    fontSize: 30,
                                    fontWeight:'bold',
                                    color:'#efefef'
                                }}>
                                    {this.state.leaderData.Name}
                                </Text>
                            </View>
                            <View
                                style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'flex-start',
                                marginBottom: 10,
                                marginLeft:5
                            }}>
                                <Image
                                    source={require('../assets/cloud-solid.png')}
                                    style={{
                                    height: '100%',
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
                            onPress={()=>this.props.navigation.navigate('MakePayment')}

                                style={{
                                flex: 1,
                                backgroundColor: '#4caf50',
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
                            onPress={()=>this.props.navigation.navigate('Members')}

                                style={{
                                flex: 1,
                                backgroundColor: '#0069c0',
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
                            onPress={()=>this.props.navigation.navigate('Form')}
                                style={{
                                flex: 1,
                                backgroundColor: '#12005e',
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
                            onPress={()=>this.props.navigation.navigate('Transactions')}

                                style={{
                                flex: 1,
                                marginRight: 5,
                                backgroundColor: '#4b830d',
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
                                style={{
                                flex: 1,
                                marginRight: 5,
                                backgroundColor: '#b61827',
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
                </View>

            </View>
        )
    }
}
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
    Image,ActivityIndicator
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
            headerTitle: 'Make payment',
            membersData: [],
            fontLoaded: false,
            isLoading: true,
            baseName:'',
            amount:'',
            phone_number:'254791836987',
            message:'',
            loading:false
        }
    }

    makePay=()=>{
        this.setState({message: 'Please wait...', loading: true})

        if(this.state.baseName === '' || this.state.phone_number === ''){
            alert("Base name and amount cannot be empty!")
            this.setState({message: '', loading: false})
            return 0;
        }
        axios({
            method:'POST',
            url:'http://134.209.148.107/mpesa/',
            data:{
                phone_number:this.state.phone_number,
                amount:this.state.amount,
                payBill:'174379',
                accref:this.state.baseName
            }
        }).then((response)=>{
            if (response.status == 201) {
                this.setState({message: 'Sending your request...'})

                setTimeout(() => {
                    this.setState({message: '', loading: false})
                }, 8000)
            } else {
                this.setState({message: '', loading: false})
            }

        }).catch((error)=>{
            setTimeout(() => {
                this.setState({message: '', loading: false})
            }, 2000)
            console.log(error)
            alert(error)
        })
    }

    render() {
        return (
            <View
                style={{
                flex: 1,
                height: '100%'
            }}>
                <Header
                    showBack={true}
                    navigation={this.props.navigation}
                    headerTitle={this.state.headerTitle}></Header>

                <KeyboardAvoidingView
                    style={{
                    flex: 1,
                    height: '100%'
                }}
                    behavior="padding"
                    enabled>

                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            flex: 1,padding:10
                        }}>
                          

                        </View>
                        <ScrollView
                            contentContainerStyl={{
                            flex: 1
                        }}
                            style={{}}>
                            <View
                                style={{
                                flex: 1,
                                padding: 10
                            }}>

                                <View
                                    style={{
                                    flex: 1
                                }}>

                                    <Text
                                        style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginBottom: 10
                                    }}>Method 1</Text>
                                    <Text>1.Go to M-PESA menu</Text>
                                    <Text>2.Go to Lipa na M-PESA</Text>
                                    <Text>3. Select PAY BILL</Text>
                                    <Text>4. Enter Business Number "199172"</Text>
                                    <Text>5. Account Number enter "YOUR BASE NAME"</Text>
                                    <Text>6. Enter AMOUNT and send</Text>
                                    <Text>7. You will receive a confirmation message of the details for your record</Text>
                                </View>

                                <View
                                    style={{
                                    flex: 1,
                                    marginTop: 20
                                }}>
                                    <Text
                                        style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginBottom: 10,
                                        marginTop: 10
                                    }}>Method 2</Text>
                                    <Text style={styles.mytitle}>Enter your base name : {this.state.baseName}</Text>
                                    <TextInput onChangeText={(baseName)=>this.setState({baseName})}  style={styles.myInput}></TextInput>
                                    <Text style={styles.mytitle}>Enter The amount you want to pay {this.state.amount}:</Text>
                                    <TextInput onChangeText={(amount)=>this.setState({amount})} style={styles.myInput} keyboardType='number-pad'></TextInput>
                                  

                                    {this.state.loading
                    ? <TouchableOpacity
                            disabled
                            style={{
                            backgroundColor: '#efefef',
                            padding: 20,
                            
                            alignItems: 'center'
                        }}>

                            <ActivityIndicator size="small" color="#0000ff"/>

                        </TouchableOpacity>

                    :   <TouchableOpacity 
                                    onPress={()=>this.makePay()}
                                    style={{backgroundColor:'#66ad45',alignItems:'center',padding:20,borderRadius:4}}>
                                        <Text style={{color:'white'}}>Pay</Text>
                                    </TouchableOpacity>
}

                                    <Text style={{marginTop:20,color:'green'}}>
                                        {this.state.message}
                                    </Text>
                                </View>

                            </View>
                        </ScrollView>

                    </View>
                </KeyboardAvoidingView>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    myInput: {
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 20
    },
    mytitle: {
        padding: 2,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

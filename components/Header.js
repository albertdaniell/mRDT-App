import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,ActivityIndicator
} from 'react-native';
import {white} from 'ansi-colors';

import {
    Container,
    Content,
    ListItem,
    Radio,
    Right,
    Left,
    DatePicker,
    Picker,
    Icon
} from 'native-base';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <View
                style={{
                padding: 0,
                backgroundColor: '#00766c',
                marginTop: 25,
              
                zIndex: 1999,
                height: 65
            }}>

                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <View
                        style={{
                        flex: .3,
                        justifyContent: 'center'
                    }}>

           {
               this.props.showBack?
               <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{
                            width: '100%',
                            padding: 0,
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 0
                        }}>
                            <Icon
                                style={{
                                color: 'white'
                            }}
                                color='white'
                                name="arrow-back"/>
                        </TouchableOpacity>
               :null
           }

                    </View>
                    <View
                        style={{
                        flex: 2.4,
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}>
                        <Text
                            style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>{this.props.headerTitle}</Text>
                    </View>
                    <View style={{
                        flex: .3
                    }}>

                  {this.props.showLoading?
                    <ActivityIndicator  style={{
                            width: '100%',
                            padding: 0,
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 20
                        }} size="small" color="orange"/>
                        :null
                  }

                        {/* <TouchableOpacity
                            style={{
                            width: '100%',
                            padding: 0,
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 17
                        }}>
                            <Icon
                                style={{
                                color: 'white'
                            }}
                                color='white'
                                name="bars"
                                type="FontAwesome"/>
                        </TouchableOpacity> */}
                    </View>

                </View>

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
        marginBottom: 5,
        fontSize:10
    },

    mystyle:{
        shadowOpacity: 0.55,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {
            height: 2,
            width: 0
        },
    }
});

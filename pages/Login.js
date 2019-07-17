import React, {Component} from 'react';
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
import {white} from 'ansi-colors';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/bike.jpg')}
                    style={{
                    height: '100%',
                    width: '100%'
                }}>
                    <KeyboardAvoidingView
                        style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        flex: 1
                    }}
                        behavior="padding"
                        enabled>
                        <View
                            style={{
                            backgroundColor: 'rgba(0,0,0,.2)',
                            flex: 1,
                            height: '100%',
                            alignContent: 'flex-end',
                            justifyContent: 'flex-end',
                            padding: 0,
                            backgroundColor: 'rgba(0,0,0,.2)'
                        }}>

                            <View
                                style={{
                                padding: 10,
                                width: '100%'
                            }}>
                                <Text
                                    style={{
                                    color: 'white',
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    padding: 20,
                                    textAlign: 'center'
                                }}>Login</Text>
                                <TextInput
                                    keyboardType='email-address'
                                    placeholder="Enter your email"
                                    placeholderTextColor='#efefef'
                                    style={{
                                    padding: 20,
                                    marginBottom: 20,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    width: '100%',
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(255,255,255,.5)'
                                }}></TextInput>
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder='Password'
                                    placeholderTextColor='#efefef'
                                    style={{
                                    padding: 20,
                                    marginBottom: 10,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    width: '100%',
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(255,255,255,.5)'
                                }}></TextInput>

                                <TouchableOpacity
                                    style={{
                                    alignItems: 'center',
                                    padding: 10
                                }}>
                                    <Text
                                        style={{
                                        color: 'orange'
                                    }}>Show password</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Dashboard')}
                                style={{
                                backgroundColor: 'rgba(15,157,88,.8)',
                                padding: 20,
                                alignItems: 'center',
                                borderRadius: 2,
                                width: '100%',
                                marginBottom: 0
                            }}>
                                <Text
                                    style={{
                                    letterSpacing: 4,
                                    color: 'white'
                                }}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>

                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

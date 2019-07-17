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

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <View
                style={{
                padding: 20,
                backgroundColor: '#00766c',
                marginTop: 23,
                shadowOpacity: 0.55,
                shadowRadius: 5,
                shadowColor: 'black',
                shadowOffset: {
                    height: 2,
                    width: 0
                }
            }}>
                <Text
                    style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>M-Bodaboda</Text>
            </View>
        )
    }
}
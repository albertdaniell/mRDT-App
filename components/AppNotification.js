import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity, ActivityIndicator,
} from 'react-native';

export default class Notif extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <View style={{position:'fixed',padding:5,bottom:0,backgroundColor:'black',zIndex:1000}}>
                <Text style={{color:'white'}}>{this.props.OnlineMessage}</Text>
            </View>
        )
    }
}
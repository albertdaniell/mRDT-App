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
            <View style={{position:'fixed',paddingLeft:10,bottom:0,backgroundColor:'black',zIndex:1000,alignItems:'center',alignContent:'center'}}>
                <Text style={{color:'orange',textAlign:"center",padding:5}}>{this.props.OnlineMessage}</Text>
            </View>
        )
    }
}
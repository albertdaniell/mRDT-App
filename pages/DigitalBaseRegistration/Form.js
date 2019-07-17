import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import Header from '../../components/Header'
import {
    Container,
    Content,
    ListItem,
    Radio,
    Right,
    Left,
    DatePicker,
    Picker
} from 'native-base';

import UserDemographics from './UserDemographics'

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            headerTitle:'Boda',
            membername:'',
            idno:'',
            dob:'',
            age:'',
            
            countrycode:'',
            phone:'',
            base:'',
            experience:'',
             gender: '',
            maleSelected: true,
            femaleSelected: false,
            chosenDate: new Date(),
            selected: "254"

        }

        this.changeGenderToMale = this.changeGenderToMale.bind(this)
        
        this.changeGenderToFemale = this.changeGenderToFemale.bind(this)
        this.setDate = this.setDate.bind(this)
        this.onValueChange = this.onValueChange.bind(this)



    }
    

    changeGenderToMale = () => {
        this.setState({maleSelected: true, femaleSelected: false, gender: 'Male'})
    }

    changeGenderToFemale = () => {

        this.setState({maleSelected: false, femaleSelected: true, gender: 'Female'})
    }

    setDate = (newDate) => {
        this.setState({chosenDate: newDate});
    }

    onValueChange = (value : string) => {
        this.setState({selected: value});
    }
    render() {

        return (
            <View
                style={{
                height: '100%',
                flex: 1
            }}>

                <Header headerTitle={this.state.headerTitle}></Header>
                <UserDemographics gender={this.state.gender} selected={this.state.selected} femaleSelected={this.state.femaleSelected}  maleSelected={this.state.maleSelected} chosenDate={this.state.chosenDate} changeGenderToMale={this.changeGenderToMale} changeGenderToFemale={this.changeGenderToFemale} onValueChange={this.onValueChange} setDate={this.setDate}></UserDemographics>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

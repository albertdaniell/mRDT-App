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
import BodaDetails from './BodaBodaDetails'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'User Details Form',
            membername: '',
            idno: '',
            dob: '',
            age: '',
            countrycode: '',
            phone: '',
            base: '',
            experience: '',
            gender: '',
            maleSelected: true,
            femaleSelected: false,
            chosenDate: new Date(),
            selected: "254",
            form1Cleared: true,
            form2Cleared: true,
            ownerOfBoda: 'Yes',
            ownerOfBodaYesSelect: true,
            ownerOfBodaNoSelect: false,
            bodaOwnerFormShow:false
        }

        this.changeGenderToMale = this
            .changeGenderToMale
            .bind(this)

        this.changeGenderToFemale = this
            .changeGenderToFemale
            .bind(this)
        this.setDate = this
            .setDate
            .bind(this)
        this.onValueChange = this
            .onValueChange
            .bind(this)

        this.clearForm1 = this
            .clearForm1
            .bind(this)

        this.backToForm1 = this
            .backToForm1
            .bind(this)

            this.changeBodaOwnerYes = this
            .changeBodaOwnerYes
            .bind(this)


            this.changeBodaOwnerNo = this
            .changeBodaOwnerNo
            .bind(this)

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
    //ownerOfBoda: '',
    // ownerOfBodaYesSelect: true,
    // ownerOfBodaNoSelect: false,
    // bodaOwnerFormShow:false


    changeBodaOwnerYes = () => {
 setTimeout(()=>{
    this.setState({ownerOfBodaYesSelect: true, ownerOfBodaNoSelect: false, ownerOfBoda: 'Yes',bodaOwnerFormShow:false})

 },100)       
  
    }

    changeBodaOwnerNo = () => {
setTimeout(()=>{
    this.setState({ownerOfBodaYesSelect: false, ownerOfBodaNoSelect: true, ownerOfBoda: 'No',bodaOwnerFormShow:true})

},100)       
    }

    clearForm1 = () => {
        this.setState({headerTitle: 'BodaBoda Details Form', form1Cleared: true})
    }

    clearForm2 = () => {}

    backToForm1 = () => {
        this.setState({headerTitle: 'User Details Form', form1Cleared: false, form2Cleared: true})

    }



    render() {

        return (
            <View
                style={{
                height: '100%',
                flex: 1
            }}>

                <Header headerTitle={this.state.headerTitle}></Header>
                {this.state.form1Cleared
                    ? <BodaDetails 
                    ownerOfBodaYesSelect={this.state.ownerOfBodaYesSelect}
                    ownerOfBodaNoSelect={this.state.ownerOfBodaNoSelect}
                    changeBodaOwnerNo={this.changeBodaOwnerNo}
                    changeBodaOwnerYes={this.changeBodaOwnerYes}
                    backToForm1={this.backToForm1}
                    bodaOwnerFormShow={this.state.bodaOwnerFormShow}
                    ></BodaDetails>

                    : <UserDemographics
                        gender={this.state.gender}
                        selected={this.state.selected}
                        femaleSelected={this.state.femaleSelected}
                        maleSelected={this.state.maleSelected}
                        chosenDate={this.state.chosenDate}
                        changeGenderToMale={this.changeGenderToMale}
                        changeGenderToFemale={this.changeGenderToFemale}
                        onValueChange={this.onValueChange}
                        setDate={this.setDate}
                        clearForm1={this.clearForm1}></UserDemographics>
}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

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
import InsuranceDetails from './InsuranceDetails'

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
            chosenDate2:new Date(),
            selected: "254",
            form1Cleared: true,
            form2Cleared: true,
            ownerOfBoda: 'Yes',
            ownerOfBodaYesSelect: true,
            ownerOfBodaNoSelect: false,
            bodaOwnerFormShow: false,
            insuranceYesSelect: false,
            insuranceNoSelect: true,
            Insurance: 'Yes',
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

        this.changeInsuranceYes = this
            .changeInsuranceYes
            .bind(this)

        this.changeInsuranceNo = this
            .changeInsuranceNo
            .bind(this)

    }

    // insuranceYesSelect: true,
    // insuranceNoSelect: false,
    // Insurance: 'Yes',

    changeInsuranceYes=()=>{
        this.setState({insuranceYesSelect: true, insuranceNoSelect: false, Insurance:'Yes'})
    
    }

    changeInsuranceNo=()=>{
        this.setState({insuranceYesSelect: false, insuranceNoSelect: true, Insurance:'No'})
    
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

    setDate = (newDate) => {
        this.setState({chosenDate: newDate});
    }

    setDate2 = (newDate) => {
        this.setState({chosenDate2: newDate});
    }


    onValueChange = (value : string) => {
        this.setState({selected: value});
    }
    // ownerOfBoda: '', ownerOfBodaYesSelect: true, ownerOfBodaNoSelect: false,
    // bodaOwnerFormShow:false

    changeBodaOwnerYes = () => {
        setTimeout(() => {
            this.setState({ownerOfBodaYesSelect: true, ownerOfBodaNoSelect: false, ownerOfBoda: 'Yes', bodaOwnerFormShow: false})

        }, 100)

    }

    changeBodaOwnerNo = () => {
        setTimeout(() => {
            this.setState({ownerOfBodaYesSelect: false, ownerOfBodaNoSelect: true, ownerOfBoda: 'No', bodaOwnerFormShow: true})

        }, 100)
    }

    clearForm1 = () => {
        this.setState({headerTitle: 'BodaBoda Details Form', form1Cleared: true, form2Cleared: false})
    }

    clearForm2 = () => {
        this.setState({headerTitle: 'Insurance Details Form', form1Cleared: true, form2Cleared: true})

    }

    backToForm1 = () => {
        this.setState({headerTitle: 'User Details Form', form1Cleared: false, form2Cleared: true})

    }
    backToForm2 = () => {
        this.setState({headerTitle: 'BodaBoda Details Form', form1Cleared: true, form2Cleared: false})

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
                    ? this.state.form2Cleared
                        ? <InsuranceDetails 
                        chosenDate2={this.state.chosenDate2}
                        Insurance={this.state.Insurance}
                        insuranceNoSelect={this.state.insuranceNoSelect}
                        insuranceYesSelect={this.state.insuranceYesSelect}
                        changeInsuranceNo={this.changeInsuranceNo}
                        changeInsuranceYes={this.changeInsuranceYes}
                        setDate2={this.setDate2}
                        
                        backToForm2={this.backToForm2}></InsuranceDetails>
                        : <BodaDetails
                                clearForm2={this.clearForm2}
                                ownerOfBodaYesSelect={this.state.ownerOfBodaYesSelect}
                                ownerOfBodaNoSelect={this.state.ownerOfBodaNoSelect}
                                changeBodaOwnerNo={this.changeBodaOwnerNo}
                                changeBodaOwnerYes={this.changeBodaOwnerYes}
                                backToForm1={this.backToForm1}
                                bodaOwnerFormShow={this.state.bodaOwnerFormShow}></BodaDetails>

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

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
            gender: 'Male',
            maleSelected: true,
            femaleSelected: false,
            chosenDate: new Date(),
            chosenDate2: new Date(),
            selected: "254",
            form1Cleared: true,
            form2Cleared: false,
            ownerOfBoda: 'Yes',
            ownerOfBodaYesSelect: true,
            ownerOfBodaNoSelect: false,
            bodaOwnerFormShow: false,
            insuranceYesSelect: true,
            insuranceNoSelect: false,
            Insurance: 'Yes',
            licenceNo: '22',
            InsuranceName: '',
            yearOfBirth: this.chosenDate,
            currentYear: '',
            bodaFrameNo: '',
            bodaMake: '',
            plateNo: '',
            bodaOwnerName: '',
            bodaOwnerID: '',
            bodaOwnerPhone: ''
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

        this.getUserDetails = this
            .getUserDetails
            .bind(this)

        this.getBodaDetails = this
            .getBodaDetails
            .bind(this)

    }

    // insuranceYesSelect: true, insuranceNoSelect: false, Insurance: 'Yes',

    componentDidMount() {
        // alert(this.state.yearOfBirth)
        this.getCurrentYear()
    }

    getUserDetails = (membername, idno, phone, base, experience) => {
        this.setState({membername: membername, idno: idno, phone: phone, base: base, experience: experience})

    }

    getBodaDetails = (bodaFrameNo, bodaMake, plateNo, bodaOwnerName, bodaOwnerID, bodaOwnerPhone) => {
        this.setState({
            bodaFrameNo: bodaFrameNo,
            bodaMake: bodaMake,
            plateNo: plateNo,
            bodaOwnerName: bodaOwnerName,
            bodaOwnerID: bodaOwnerID,
            bodaOwnerPhone: bodaOwnerPhone
        })

    }

    getCurrentYear = () => {
        const currentYear = new Date().getFullYear()
        this.setState({currentYear: currentYear})
    }

    getYearObBirth = () => {
        const chosenDate = this
            .state
            .chosenDate
            .toString()
            .substr(4, 12)
        const yearOfBirth = chosenDate.slice(-5);
        this.setState({yearOfBirth: yearOfBirth})

        //Get age of person
        const age = (this.state.currentYear - this.state.yearOfBirth).toString()
        this.setState({age: age})

        //alert(this.state.age) alert(yearOfBirth)
    }
    changeInsuranceYes = () => {
        this.setState({insuranceYesSelect: true, insuranceNoSelect: false, Insurance: 'Yes'})

    }

    changeInsuranceNo = () => {
        this.setState({insuranceYesSelect: false, insuranceNoSelect: true, Insurance: 'No'})

    }

    changeGenderToMale = () => {
        this.setState({maleSelected: true, femaleSelected: false, gender: 'Male'})
    }

    changeGenderToFemale = () => {

        this.setState({maleSelected: false, femaleSelected: true, gender: 'Female'})
    }

    setDate = (newDate) => {
        this.setState({chosenDate: newDate});
        setTimeout(() => {
            this.getYearObBirth()
        }, 500)
        // alert(0)
    }

    // setDate = (newDate) => {     this.setState({chosenDate: newDate}); }

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
        if (this.state.membername == '' || this.state.chosenDate == '' || this.state.idno == '' || this.state.gender == '' || this.state.phone == '' || this.state.base == '' || this.state.experience == '') {
            alert("Please make sure you have completed all the fields.")
            return 0;

        } else if (this.state.age < 18) {
            alert("You must be 18 and above of age.")
            return 0;

        }
        this.setState({headerTitle: 'BodaBoda Details Form', form1Cleared: true, form2Cleared: false})
    }

    clearForm2 = () => {

        if (this.state.bodaFrameNo == '' || this.state.bodaMake == '' || this.state.plateNo == '') {
            alert("Please make sure you have completed all the fields.")

            return 0;
        } else if (this.state.bodaOwnerFormShow == true) {
            if (this.state.bodaOwnerName == '' || this.state.bodaOwnerID == '' || this.state.bodaOwnerPhone == '') {
                alert("Please fill in Details for Boda boda owner")
                return 0;
            }
        } else {}

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

                <Header navigation={this.props.navigation} headerTitle={this.state.headerTitle}></Header>
                {this.state.form1Cleared
                    ? this.state.form2Cleared
                        ? <InsuranceDetails
                                InsuranceName={this.state.InsuranceName}
                                licenceNo={this.state.licenceNo}
                                chosenDate2={this.state.chosenDate2}
                                Insurance={this.state.Insurance}
                                insuranceNoSelect={this.state.insuranceNoSelect}
                                insuranceYesSelect={this.state.insuranceYesSelect}
                                changeInsuranceNo={this.changeInsuranceNo}
                                changeInsuranceYes={this.changeInsuranceYes}
                                setDate2={this.setDate2}
                                backToForm2={this.backToForm2}></InsuranceDetails>
                        : <BodaDetails
                                bodaFrameNo={this.state.bodaFrameNo}
                                bodaMake={this.state.bodaMake}
                                plateNo={this.state.plateNo}
                                bodaOwnerName={this.state.bodaOwnerName}
                                bodaOwnerID={this.state.bodaOwnerID}
                                bodaOwnerPhone={this.state.bodaOwnerPhone}
                                clearForm2={this.clearForm2}
                                ownerOfBodaYesSelect={this.state.ownerOfBodaYesSelect}
                                ownerOfBodaNoSelect={this.state.ownerOfBodaNoSelect}
                                changeBodaOwnerNo={this.changeBodaOwnerNo}
                                changeBodaOwnerYes={this.changeBodaOwnerYes}
                                backToForm1={this.backToForm1}
                                bodaOwnerFormShow={this.state.bodaOwnerFormShow}
                                getBodaDetails={this.getBodaDetails}></BodaDetails>

                    : <UserDemographics
                        membername={this.state.membername}
                        idno={this.state.idno}
                        phone={this.state.phone}
                        base={this.state.base}
                        experience={this.state.experience}
                        age={this.state.age}
                        gender={this.state.gender}
                        selected={this.state.selected}
                        femaleSelected={this.state.femaleSelected}
                        maleSelected={this.state.maleSelected}
                        chosenDate={this.state.chosenDate}
                        changeGenderToMale={this.changeGenderToMale}
                        changeGenderToFemale={this.changeGenderToFemale}
                        onValueChange={this.onValueChange}
                        setDate={this.setDate}
                        clearForm1={this.clearForm1}
                        getUserDetails={this.getUserDetails}></UserDemographics>
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

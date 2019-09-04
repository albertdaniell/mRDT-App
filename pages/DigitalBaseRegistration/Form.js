import React, {Component} from 'react'
const axios = require('axios');
import * as Font from 'expo-font';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
    AsyncStorage,Vibration
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
    Picker,
    Toast
} from 'native-base';

import UserDemographics from './UserDemographics'
import BodaDetails from './BodaBodaDetails'
import InsuranceDetails from './InsuranceDetails'
import SaccoDetails from './SaccoDetails'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            headerTitle: 'Member Details',
            membername: '',
            idno: '',
            dob: '',
            age: '',
            countrycode: "254",
            phone: '',
            base: '',
            base1:'',
            bases:[],
            experience: '',
            gender: 'Male',
            maleSelected: true,
            femaleSelected: false,
            chosenDate: '',
            chosenDate2: '',
            selected: "254",
            form1Cleared: false,
            form2Cleared: false,
            form3Cleared: false,
            ownerOfBoda: 'Yes',
            ownerOfBodaYesSelect: true,
            ownerOfBodaNoSelect: false,
            DailyContribFormShow: false,
            bodaOwnerFormShow: false,
            insuranceYesSelect: true,
            insuranceNoSelect: false,
            Insurance: 'Yes',
            Sacco: 'No',
            SaccoYesSelect: false,
            SaccoNoSelect: true,
            licenceNo: '',
            InsuranceName: '',
            yearOfBirth: this.chosenDate,
            currentYear: '',
            bodaFrameNo: '',
            bodaMake: '',
            plateNo: '',
            bodaOwnerName: null,
            bodaOwnerID: null,
            bodaOwnerPhone: null,
            County: '',
            SubCounty: '',
            Ward: '',
            SaccoName: null,
            DailyContribution: null,
            showAllDataView: false,
            message: '',
            fontLoaded: false,
            userSuccessmsg: '',
            insuranceSuccessmsg: '',
            vehicleSuccessmsg: '',
            ownerSuccessmsg: '',
            saccoSuccessmsg: '',
            myOffline: [
                {
                    Name: 'Alby',
                    age: 20,
                    dob: '12-10',
                    phone: 12929019
                }
            ],

            myOffline2: {
                Name: 'Alby2',
                age: 202,
                dob: '122-10',
                phone: 122929019
            },
            myOfflineArray: []
        }
this.onBaseChange=this.onBaseChange.bind(this)
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

        this.getInsuranceDetails = this
            .getInsuranceDetails
            .bind(this)

        this.clearForm3 = this
            .clearForm3
            .bind(this)
        this.backToForm3 = this
            .backToForm3
            .bind(this)

        this.changeSaccoNo = this
            .changeSaccoNo
            .bind(this)
        this.changeSaccoYes = this
            .changeSaccoYes
            .bind(this)

        this.getSaccoDetails = this
            .getSaccoDetails
            .bind(this)
        this.submitForm = this
            .submitForm
            .bind(this)
        this.showAllData = this
            .showAllData
            .bind(this)
        this.saveInsuranceDetails = this
            .saveInsuranceDetails
            .bind(this)
        this.saveInsuranceDetails2 = this
            .saveInsuranceDetails2
            .bind(this)
        this.saveOwnerDetails = this
            .saveOwnerDetails
            .bind(this)
        this.saveSaccoDetails = this
            .saveSaccoDetails
            .bind(this)
        this.saveVehicleDetails = this
            .saveVehicleDetails
            .bind(this)
        this.saveUserDetails = this
            .saveUserDetails
            .bind(this)

    }
    getBases = async() => {
console.log("getting bases..")
        try {
            
            await axios({method: "GET", url: 'http://134.209.148.107/api/bases/'}).then((res) => {
               // alert(0)
                this.setState({bases: res.data})
                
                console.log(this.state.bases)

                // get base leader name try {     axios({method: "GET", url: 'api/leaders'}) }
                // catch (err) {}
            })

        } catch (err) {}
    }

    // insuranceYesSelect: true, insuranceNoSelect: false, Insurance: 'Yes',

    storeMyOffline = async() => {
        try {
            await AsyncStorage.setItem('myOffline', JSON.stringify(this.state.myOffline))
            console.log("Nicccee")
        } catch (e) {
            alert("Error!!")
        }
    }

    getOfflineData = async() => {
        try {
            await AsyncStorage
                .getItem('myOffline')
                .then((data) => {
                    const stringData = JSON.parse(data)
                    if (stringData !== null) {
                        this.setState({myOfflineArray: stringData})
                        console.log(this.state.myOfflineArray)
                        setTimeout(async() => {

                            var myOffline2 = this.state.myOffline2
                            // this.setState({     myOfflineArray: [         ...this.state.myOfflineArray,
                            //       myOffline2     ] })

                            this.setState({
                                myOfflineArray: [
                                    ...this.state.myOfflineArray,
                                    myOffline2
                                ]
                            })
                            console.log("The pushed data" + JSON.stringify(this.state.myOfflineArray))

                            try {
                                AsyncStorage
                                    .setItem('myOffline', JSON.stringify(this.state.myOfflineArray))
                                    .then(() => {
                                        console.log("Nicccee updating the offline data")
                                    })

                            } catch (e) {
                                console.log("Error updating data with error " + e)
                            }

                            // try{     await
                            // AsyncStorage.setItem('myOffline',JSON.stringify(this.state.myOffline))
                            // console.log("Nicccee")             }catch(e){     alert("Error!!")  }
                        }, 2000);

                    }
                })
        } catch (error) {
            console.log("error occured" + error)
        }
    }

    deleteOffline = async() => {
        try {

            await AsyncStorage
                .removeItem('myOffline')
                .then(() => {
                    alert("Nice clearing offline data")
                })
        } catch (e) {
            console.log(e)
        }
    }

    getOfflineData2 = async() => {
        try {
            await AsyncStorage
                .getItem('myOffline')
                .then((data) => {
                    const myoffdata = JSON.parse(data)
                    if (myoffdata !== null) {
                        this.setState({myOfflineArray: myoffdata})
                        // console.log(this.state.myOfflineArray) console.log(myoffdata)
                        console.log(JSON.stringify(this.state.myOfflineArray))
                        console.log("You have " +myoffdata.length + " records in ur offline data")
                        this
                            .state
                            .myOfflineArray
                            .filter((d) => {
                                if(d.Name === 'Alby'){
                                return (
                                    console.log(d.Name)  
                                )}else{
                                   
                                }

                            })
                    }

                })
        } catch (e) {
            console.log("Error fetching data with error of ---" + e)
        }
    }

    async componentDidMount() {

        // this.storeMyOffline() 
       // this.getOfflineData() 
        //this.deleteOffline()
        setTimeout(() => {
            this.getBases()
        }, 1000);
       // this.getOfflineData2()
        this.getCurrentYear()

        await Font.loadAsync({'Roboto_medium': require('../../assets/Roboto-Medium.ttf')});

        this.setState({fontLoaded: true});
    }

   
    seeData = () => {
        axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            url: 'http://134.209.148.107/api/rider/'
        }).then((response) => {
            console.log(response)

        }).catch(error => {
            console.log(error.message)
            alert(error)
        })
    }
    getUserDetails = (membername, idno, phone,  experience, County, SubCounty, Ward) => {
        this.setState({
            membername: membername,
            idno: idno,
            phone: phone,
            experience: experience,
            County: County,
            SubCounty: SubCounty,
            Ward: Ward
        })

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

    getInsuranceDetails = (InsuranceName, licenceNo) => {
        this.setState({InsuranceName: InsuranceName, licenceNo: licenceNo})

    }

    getSaccoDetails = (SaccoName, DailyContribution) => {
        this.setState({SaccoName: SaccoName, DailyContribution: DailyContribution})
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

    }

    changeSaccoYes = () => {
        this.setState({SaccoYesSelect: true, SaccoNoSelect: false, Sacco: 'Yes', DailyContribFormShow: true})

    }

    changeSaccoNo = () => {
        this.setState({
            SaccoYesSelect: false,
            SaccoNoSelect: true,
            Sacco: 'No',
            DailyContribFormShow: false,
            SaccoName: null,
            DailyContribution: null

        })

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

    }

    // setDate = (newDate) => {     this.setState({chosenDate: newDate}); }

    setDate2 = (newDate) => {
        var myChosenDate = newDate
            .toString()
            .substr(4, 12)

        var myYear = myChosenDate.slice(0, -4)

        this.setState({chosenDate2: newDate});
    }

    onBaseChange = (base1,base) => {
       // alert(base)
        this.setState({base1: base1,base:base});
    }

    onValueChange = (value : string) => {
        this.setState({countrycode: value});
    }
    // ownerOfBoda: '', ownerOfBodaYesSelect: true, ownerOfBodaNoSelect: false,
    // bodaOwnerFormShow:false

    changeBodaOwnerYes = () => {
        setTimeout(() => {
            this.setState({
                ownerOfBodaYesSelect: true,
                ownerOfBodaNoSelect: false,
                ownerOfBoda: 'Yes',
                bodaOwnerFormShow: false,
                bodaOwnerName: '',
                bodaOwnerID: '',
                bodaOwnerPhone: ''

            })

        }, 100)

    }

    changeBodaOwnerNo = () => {
        setTimeout(() => {
            this.setState({ownerOfBodaYesSelect: false, ownerOfBodaNoSelect: true, ownerOfBoda: 'No', bodaOwnerFormShow: true})

        }, 100)
    }

    clearForm1 = () => {
        if (this.state.membername == '' || this.state.chosenDate == '' || this.state.idno == '' || this.state.gender == '' || this.state.phone == '' || this.state.base == '' || this.state.experience == '', this.state.County == '', this.state.SubCounty == '' || this.state.Ward == '') {
            Toast.show({
                position: "top",
                text: 'Please make sure you have completed all the fields',
                buttonText: 'Okay',
                duration: 4000,
                type: "warning",
                style: {
                    marginTop: 30
                }
            })

            return 0;

        } else if (this.state.age < 18) {
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'You must be 18 and above of age',
                buttonText: 'Okay',
                duration: 4000
            })

            return 0;

        }
        this.setState({headerTitle: 'BodaBoda Details', form1Cleared: true, form2Cleared: false, form3Cleared: true})
    }

    clearForm2 = () => {

        if (this.state.bodaFrameNo == '' || this.state.bodaMake == '' || this.state.plateNo == '') {
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'Please make sure you have completed all the fields',
                buttonText: 'Okay',
                duration: 4000,
                type: "warning"
            })

            return 0;
        } else if (this.state.bodaOwnerFormShow == true) {
            if (this.state.bodaOwnerName == '' || this.state.bodaOwnerID == '' || this.state.bodaOwnerPhone == '') {
                Toast.show({
                    style: {
                        marginTop: 30
                    },
                    position: "top",
                    text: 'Please fill in details for bodaboda owner',
                    buttonText: 'Okay',
                    duration: 4000
                })

                return 0;
            }
        } else {}

        this.setState({headerTitle: 'Insurance Details', form1Cleared: true, form2Cleared: true, form3Cleared: false})

    }

    clearForm3 = () => {

        // if (this.state.bodaFrameNo == '' || this.state.bodaMake == '' ||
        // this.state.plateNo == '') {     alert("Please make sure you have completed
        // all the fields.")     return 0; } else if (this.state.bodaOwnerFormShow ==
        // true) {     if (this.state.bodaOwnerName == '' || this.state.bodaOwnerID ==
        // '' || this.state.bodaOwnerPhone == '') {         alert("Please fill in
        // Details for Boda boda owner")         return 0;     } } else {}

        this.setState({headerTitle: 'Sacco Details', form1Cleared: true, form2Cleared: true, form3Cleared: true})

    }

    showAllData = () => {
        this.setState({
            showAllDataView: !this.state.showAllDataView
        })
    }

    submitForm = () => {
        this.setState({insuranceSuccessmsg: '', vehicleSuccessmsg: '', ownerSuccessmsg: '', saccoSuccessmsg: '', userSuccessmsg: ''})

        setTimeout(() => {
            if (this.state.DailyContribFormShow == true) {
                if (this.state.SaccoName == null || this.state.DailyContribution == null) {
                    const DURATION = 10000;
const PATTERN = [1000, 2000, 3000];

Vibration.vibrate(1000);
                    Toast.show({
                        style: {
                            marginTop: 30
                        },
                        position: "top",
                        text: 'Please make sure you have completed all the fields',
                        buttonText: 'Okay',
                        duration: 4000,
                        type: "warning"
                    })

                    return 0;
                }
            }
            // if (this.state.licenceNo == '') {     alert("Please make sure you have
            // completed all the fields.") } else if (this.state.Insurance == 'Yes') {
            // alert("Has insurance") }
            this.saveUserDetails()
        }, 1000)
    }

    backToForm1 = () => {
        this.setState({headerTitle: 'Member Details', form1Cleared: false, form2Cleared: true, form3Cleared: true})

    }
    backToForm2 = () => {
        this.setState({headerTitle: 'BodaBoda Details', form1Cleared: true, form2Cleared: false, form3Cleared: true})

    }

    backToForm3 = () => {

        this.setState({headerTitle: 'Insurance Details', form1Cleared: true, form2Cleared: true, form3Cleared: false, showAllDataView: false})

    }

    saveUserDetails = () => {
        axios({
            method: 'POST',
            url: "http://134.209.148.107/api/rider/",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "Name": this.state.membername,
                "IDNo": this.state.idno,
                "DateofBirth": this.state.chosenDate,
                "Gender": this.state.gender,
                "CountryCode": this.state.countrycode,
                "PhoneNumber": this.state.phone,
                "County": this.state.County,
                "SubCounty": this.state.SubCounty,
                "Ward": this.state.Ward,
                "BaseName": this.state.base1,
                "YearsOfExperience": this.state.experience
            }
        }).then((response) => {

            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'Success saving Member details',
                buttonText: 'Okay',
                duration: 4000,
                type: "success"
            })
            this.setState({userSuccessmsg: 'Success saving Member details'})

            setTimeout(() => {
                this.saveVehicleDetails()
            }, 2000);
            console.log(response.status)
        }).catch((e) => {
            console.log(e)
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'An error occured',
                buttonText: 'Okay',
                duration: 4000,
                type: "danger"
            })
            this.setState({userSuccessmsg: 'An error occured while saving member details'})

        })
    }

    saveVehicleDetails = () => {
        axios({
            method: "POST",
            url: "http://134.209.148.107/api/vehicle/",
            data: {
                "Name": this.state.membername,
                "IDNo": this.state.idno,
                "FrameNumber": this.state.bodaFrameNo,
                "Make": this.state.bodaMake,
                "RegNumber": this.state.plateNo,
                "Ownership": this.state.ownerOfBoda
            }
        }).then(() => {
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'Success saving vehicles details',
                buttonText: 'Okay',
                duration: 4000,
                type: "success"
            })
            this.setState({vehicleSuccessmsg: 'Success saving vehicle details'})

            if (this.state.ownerOfBodaYesSelect === false) {
                setTimeout(() => {
                    this.saveOwnerDetails()
                }, 2000)

            } else {
                setTimeout(() => {
                    this.saveInsuranceDetails()
                }, 2000)

            }

        }).catch((error) => {
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'An Error occured while saving vehicle data',
                buttonText: 'Okay',
                duration: 4000,
                type: "danger"
            })

            this.setState({vehicleSuccessmsg: 'An error occured while saving vehicle details'})

        })
    }

    saveOwnerDetails = () => {
        axios({
            method: "POST",
            url: "http://134.209.148.107/api/owner/",
            data: {
                "Name": this.state.bodaOwnerName,
                "IDNo": this.state.bodaOwnerID,
                "FrameNumber": this.state.bodaFrameNo,
                "PhoneNumber": this.state.bodaOwnerPhone
            }
        }).then((response) => {
            console.log(response.status)

            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'Success saving boda boda owner details',
                buttonText: 'Okay',
                duration: 4000,
                type: "success"
            })
            this.setState({ownerSuccessmsg: 'Success saving boda boda owner details'})

            setTimeout(() => {
                this.saveInsuranceDetails()
            }, 2000);

        }).catch((error) => {

            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'Error while saving owner details',
                buttonText: 'Okay',
                duration: 4000,
                type: "danger"
            })
            this.setState({ownerSuccessmsg: 'Error occured while saving owner details'})

        })
    }

    saveInsuranceDetails = () => {
        //if rider has insurance
        axios({
            method: "POST",
            url: "http://134.209.148.107/api/insurance/",
            data: {
                "Name": this.state.membername,
                "FrameNumber": this.state.bodaFrameNo,
                "HasInsurance": this.state.Insurance,
                "InsuranceCompany": this.state.InsuranceName,
                "InsuranceExpiry": this.state.InsuranceExpiry,
                "LicenseNumber": this.state.licenceNo

            }
        }).then(() => {
            Toast.show({position: "top", text: 'Success saving insurance details', buttonText: 'Okay', duration: 4000, type: "success"})
            this.setState({insuranceSuccessmsg: 'Success saving insurance details'})
            setTimeout(() => {
                this.saveSaccoDetails()
            }, 3000);

        }).catch((error) => {
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'An error occured while saving insurance details',
                buttonText: 'Okay',
                duration: 4000,
                type: "danger"
            })
            this.setState({insuranceSuccessmsg: "Error occured while saving insurance details"})
        })
    }

    saveInsuranceDetails2 = () => {
        //if rider has no insurance
        axios({
            method: "POST",
            url: "http://134.209.148.107/api/insurance/",
            data: {
                "Name": this.state.bodaOwnerName,
                "FrameNumber": this.state.bodaFrameNo,
                "HasInsurance": "No",

                "LicenseNumber": this.state.licenceNo

            }
        }).then(() => {
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'Success saving insurance details',
                buttonText: 'Okay',
                duration: 4000,
                type: "success"
            })

        }).catch((error) => {
            this.setState({insuranceSuccessmsg: "Error occured while saving insurance details"})

        })
    }

    saveSaccoDetails = () => {
        //if rider is in any sacco
        axios({
            method: "POST",
            url: "http://134.209.148.107/api/sacco/",
            data: {
                "Name": this.state.membername,
                "IDNo": this.state.idno,
                "Membership": this.state.Sacco,
                "SaccoName": this.state.SaccoName,
                "DailyContribution": this.state.DailyContribution

            }
        }).then(() => {
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'Success saving Sacco details',
                buttonText: 'Okay',
                duration: 4000,
                type: "success"
            })
            this.setState({saccoSuccessmsg: 'Success saving sacco details'})
            Alert.alert('Member registered successfully!', '', [
                {
                    text: 'Exit',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                }, {
                    text: 'Register another member',
                    onPress: () => console.log('OK Pressed')
                }
            ], {
                cancelable: false
            },);

        }).catch((error) => {
            Toast.show({
                style: {
                    marginTop: 30
                },
                position: "top",
                text: 'Error occured while saving sacco details',
                buttonText: 'Okay',
                duration: 4000
            })
            this.setState({saccoSuccessmsg: 'Error occured while saving sacco details'})

        })
    }
    seeData = () => {
        axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: 'http://134.209.148.107/api/rider/'
        }).then((response) => {
            console.log(response.data)

        }).catch(error => {
            console.log(error.message)

        })
    }

    render() {

        return (
            <View
                style={{
                height: '100%',
                flex: 1
            }}>

                <Header
                    showBack={true}
                    navigation={this.props.navigation}
                    headerTitle={this.state.headerTitle}></Header>
                {this.state.form1Cleared
                    ? this.state.form2Cleared
                        ? this.state.form3Cleared
                            ? <View
                                    style={{
                                    flex: 1
                                }}>
                                    <SaccoDetails
                                    
                                        SaccoNoSelect={this.state.SaccoNoSelect}
                                        SaccoYesSelect={this.state.SaccoYesSelect}
                                        Sacco={this.state.Sacco}
                                        changeSaccoNo={this.changeSaccoNo}
                                        changeSaccoYes={this.changeSaccoYes}
                                        backToForm3={this.backToForm3}
                                        getSaccoDetails={this.getSaccoDetails}
                                        SaccoName={this.state.SaccoName}
                                        DailyContribution={this.state.DailyContribution}
                                        DailyContribFormShow={this.state.DailyContribFormShow}
                                        submitForm={this.submitForm}
                                        showAllData={this.showAllData}
                                        saveUserDetails={this.saveUserDetails}>
                                      
                                        </SaccoDetails>
                                   {/* <View
                                        style={{
                                        flex: 1,
                                        padding: 10
                                    }}>
                                        <Text>{this.state.userSuccessmsg}
                                        </Text>
                                        <Text>{this.state.vehicleSuccessmsg}
                                        </Text>
                                        <Text>{this.state.ownerSuccessmsg}
                                        </Text>
                                        <Text>{this.state.insuranceSuccessmsg}
                                        </Text>
                                        <Text>{this.state.saccoSuccessmsg}
                                        </Text>
                                    </View>   */}
                                </View>
                            : <InsuranceDetails
                                    InsuranceName={this.state.InsuranceName}
                                    licenceNo={this.state.licenceNo}
                                    InsuranceName={this.state.InsuranceName}
                                    licenceNo={this.state.licenceNo}
                                    chosenDate2={this.state.chosenDate2}
                                    Insurance={this.state.Insurance}
                                    insuranceNoSelect={this.state.insuranceNoSelect}
                                    insuranceYesSelect={this.state.insuranceYesSelect}
                                    changeInsuranceNo={this.changeInsuranceNo}
                                    changeInsuranceYes={this.changeInsuranceYes}
                                    setDate2={this.setDate2}
                                    backToForm2={this.backToForm2}
                                    getInsuranceDetails={this.getInsuranceDetails}
                                    clearForm3={this.clearForm3}></InsuranceDetails>
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
                        County={this.state.County}
                        SubCounty={this.state.SubCounty}
                        Ward={this.state.Ward}
                        membername={this.state.membername}
                        idno={this.state.idno}
                        phone={this.state.phone}
                        base={this.state.base}
                        base1={this.state.base1}
                        bases={this.state.bases}
                        experience={this.state.experience}
                        age={this.state.age}
                        gender={this.state.gender}
                        selected={this.state.selected}
                        femaleSelected={this.state.femaleSelected}
                        maleSelected={this.state.maleSelected}
                        chosenDate={this.state.chosenDate}
                        changeGenderToMale={this.changeGenderToMale}
                        changeGenderToFemale={this.changeGenderToFemale}
                        countrycode={this.state.countrycode}
                        setDate={this.setDate}
                        clearForm1={this.clearForm1}
                        getUserDetails={this.getUserDetails}
                        onValueChange
                        ={this.onValueChange}
                        onBaseChange={this.onBaseChange}
                        ></UserDemographics>
}

                {/* {this.state.showAllDataView
                    ? <View>
                            <ScrollView
                                style={{
                                height: 300
                            }}>
                                <ListItem>
                                    <Left>
                                        <Text>Name</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.membername}
                                        </Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text>ID no</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.idno}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>D.O.B</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this
                                                .state
                                                .chosenDate
                                                .toString()
                                                .substr(4, 12)}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Age</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.age}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Country Code</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.countrycode}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Phone</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.phone}
                                        </Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text>County</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.County}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Sub County</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.SubCounty}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Base</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.base}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Years of Experience</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.experience}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>BodaBoda FrameNo</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.bodaFrameNo}
                                        </Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text>BodaBoda Make</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.bodaMake}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>BodaBoda Reg plate no</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.plateNo}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Ownership</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.ownerOfBoda}
                                        </Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text>BodaBoda Owner name</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.bodaOwnerName}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>BodaBoda Owner ID</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.bodaOwnerID}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>BodaBoda Owner Phone</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.bodaOwnerPhone}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Registered with Insurance</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.Insurance}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Insurance Company Name</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.InsuranceName}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Insurance Expires on</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this
                                                .state
                                                .chosenDate2
                                                .toString()
                                                .substr(4, 12)}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Licence Number</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.licenceNo}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Belongs to any sacco</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.Sacco}
                                        </Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left>
                                        <Text>Sacco Name</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.SaccoName}
                                        </Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text>Daily Contribution</Text>
                                    </Left>
                                    <Right
                                        style={{
                                        width: '100%'
                                    }}>
                                        <Text>
                                            {this.state.DailyContribution}
                                        </Text>
                                    </Right>
                                </ListItem>

                            </ScrollView>
                        </View>
                    : null
} */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

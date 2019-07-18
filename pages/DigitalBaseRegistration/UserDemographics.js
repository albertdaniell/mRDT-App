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

export default class UserDemographics extends Component {

    constructor(props) {
        super(props)
        this.state = {
           age:this.props.age,
           membername:this.props.membername,
           idno:this.props.idno,
           phone:this.props.phone,
           base:this.props.base,
           experience:this.props.experience
        }

        // this.setDate = this
        //     .setDate
        //     .bind(this);

    }

  
    componentDidMount() {
        //this.changeGenderToFemale
    }

    render() {

        return (
            
           

                <KeyboardAvoidingView
                    style={{
                    flex: 1
                }}
                    behavior="padding"
                    enabled>

                    <ScrollView>
                        <View
                            style={{
                            backgroundColor: 'white',
                            flex: 1,
                            alignContent: 'flex-end',
                            justifyContent: 'center',
                            padding: 10,
                            marginTop:10
                        }}>

                            <Text style={styles.mytitle}>
                                Please enter your name 
                            </Text>

                            <TextInput defaultValue={this.props.membername}   onChangeText={(membername)=>this.props.getUserDetails(membername,this.props.idno,this.props.phone,this.props.base,this.props.experience,this.props.County,this.props.SubCounty,this.props.Ward)} style={styles.myInput} placeholder="John Doe"></TextInput>

                            <Text style={styles.mytitle}>
                                Please enter your ID number
                            </Text>

                            <TextInput
                            defaultValue={this.props.idno} 
                            onChangeText={(idno)=>this.props.getUserDetails(this.props.membername,idno,this.props.phone,this.props.base,this.props.experience,this.props.County,this.props.SubCounty,this.props.Ward)}
                                keyboardType="number-pad"
                                style={styles.myInput}
                                placeholder="34929199"></TextInput>
                            <Text style={styles.mytitle}>Please select to enter your date of birth</Text>

                            <Content>
                                <DatePicker
                                    defaultDate={new Date()}
                                    style={{
                                    padding: 10,
                                    marginBottom: 10
                                }}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"slide"}
                                    androidMode={"spinner"}
                                    placeHolderText={this
                                    .props
                                    .chosenDate
                                    .toString()
                                    .substr(4, 12)}
                                    textStyle={{
                                    color: "green"
                                }}
                                    placeHolderTextStyle={{
                                    color: "#d3d3d3"
                                }}
                                    onDateChange={this.props.setDate}
                                    disabled={false}/>

                            </Content>

                            <Text style={styles.mytitle}>
                                Your age is

                            </Text>

                            <TextInput editable={false} defaultValue={this.props.age} style={styles.myInput} placeholder="Your age"></TextInput>

                            <Text style={styles.mytitle}>
                                Your Gender

                            </Text>
                            <ListItem>
                                <Left>
                                <TouchableOpacity
                                style={{width:'100%',padding:5}}
                                    onPress={() => this.props.changeGenderToMale()}
                                    > 
                                    <Text>Male</Text>
                                    </TouchableOpacity>

                                   
                                </Left>
                                <Right>
                                    <Radio
                                        color={"#f0ad4e"}
                                        selectedColor={"#5cb85c"}
                                        onPress={() => this.props.changeGenderToMale()}
                                        selected={this.props.maleSelected}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <TouchableOpacity
                                    style={{width:'100%',padding:5}}
                                    onPress={() => this.props.changeGenderToFemale()}
                                    > 
                                    <Text>Female</Text>
                                    </TouchableOpacity>
                                   
                                </Left>
                                <Right>
                                    <Radio
                                        color={"#f0ad4e"}
                                        selectedColor={"#5cb85c"}
                                        onPress={() => this.props.changeGenderToFemale()}
                                        selected={this.props.femaleSelected}/>
                                </Right>
                            </ListItem>

                            <Text style={styles.mytitle}>Choose Country Code</Text>

                            <Picker
                                note
                                mode="dropdown"
                                style={{
                                width: '100%',
                                backgroundColor: 'white',
                                marginBottom: 10
                            }}
                                selectedValue={this.props.selected}
                                onValueChange={this
                                .props.onValueChange
                                .bind(this)}>
                                <Picker.Item label="+254 (Kenya)" value="254"/>
                                <Picker.Item label="+255 (Tanzania)" value="255"/>
                                <Picker.Item label="+256 (Uganda)" value="256"/>
                                <Picker.Item label="+257 (Burundi)" value="257"/>
                                <Picker.Item label="+250 (Rwanda)" value="250"/>
                            </Picker>

                            <Text style={styles.mytitle}>
                                Phone number format is 254791827182

                            </Text>
                            <TextInput
                            defaultValue={this.props.phone} 
                            onChangeText={(phone)=>this.props.getUserDetails(this.props.membername,this.props.idno,phone,this.props.base,this.props.experience,this.props.County,this.props.SubCounty,this.props.Ward)}
                                keyboardType="number-pad"
                                style={styles.myInput}
                                placeholder="254791827182"></TextInput>
                                <Text style={styles.mytitle}>
                               Enter your County

                            </Text>
                            <TextInput 
                            defaultValue={this.props.County} 
                            onChangeText={(County)=>this.props.getUserDetails(this.props.membername,this.props.idno,this.props.phone,this.props.base,this.props.experience,County,this.props.SubCounty,this.props.Ward)}
                             keyboardType="default" style={styles.myInput} placeholder=""></TextInput>

                             <Text style={styles.mytitle}>
                               Enter your Sub County

                            </Text>
                            <TextInput 
                            defaultValue={this.props.SubCounty} 
                            onChangeText={(SubCounty)=>this.props.getUserDetails(this.props.membername,this.props.idno,this.props.phone,this.props.base,this.props.experience,this.props.County,SubCounty,this.props.Ward)}
                             keyboardType="default" style={styles.myInput} placeholder=""></TextInput>
                             <Text style={styles.mytitle}>
                                Enter your ward

                            </Text>
                            <TextInput 
                            defaultValue={this.props.Ward} 
                            onChangeText={(Ward)=>this.props.getUserDetails(this.props.membername,this.props.idno,this.props.phone,this.props.base,this.props.experience,this.props.County,this.props.SubCounty,Ward)}
                             keyboardType="default" style={styles.myInput} placeholder=""></TextInput>
                            <Text style={styles.mytitle}>
                                Specify Base

                            </Text>
                            <TextInput 
                            defaultValue={this.props.base} 
                            onChangeText={(base)=>this.props.getUserDetails(this.props.membername,this.props.idno,this.props.phone,base,this.props.experience,this.props.County,this.props.SubCounty,this.props.Ward)}
                             keyboardType="default" style={styles.myInput} placeholder=""></TextInput>

                            <Text style={styles.mytitle}>
                                Years of experience on road

                            </Text>
                            <TextInput
                            defaultValue={this.props.experience} 
                            onChangeText={(experience)=>this.props.getUserDetails(this.props.membername,this.props.idno,this.props.phone,this.props.base,experience,this.props.County,this.props.SubCounty,this.props.Ward)}
                                keyboardType="number-pad"
                                style={styles.myInput}
                                placeholder="In numbers"></TextInput>
                        </View>
                        <TouchableOpacity
                        onPress={this.props.clearForm1}
                            style={{
                            alignItems: 'center',
                            padding: 20,
                            backgroundColor: '#2962ff'
                        }}>
                            <Text
                                style={{
                                color: 'white'
                            }}>Next</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </KeyboardAvoidingView>

           
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
        marginBottom: 5
    }
});

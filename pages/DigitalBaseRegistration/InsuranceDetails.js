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

export default class Insurance extends Component {

    constructor(props) {
        super(props)

        this.state = {
           Insurance:this.props.Insurance,
           licenceNo:this.props.licenceNo,
           InsuranceName:this.props.InsuranceName
        }
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
<Text>{this.state.InsuranceName}</Text>
                        <Text style={styles.mytitle}>
                            Registered your motor bike with insurance company?

                        </Text>
                        <ListItem>
                            <Left>
                                <Text>Yes</Text>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    onPress={() => this.props.changeInsuranceYes()}
                                    selected={this.props.insuranceYesSelect}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>No</Text>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    onPress={() => this.props.changeInsuranceNo()}
                                    selected={this.props.insuranceNoSelect}/>
                            </Right>
                        </ListItem>
                        <Text>
                            {this.props.insuranceYesSelect}
                        </Text>

                        {this.props.insuranceYesSelect
                            ? <View>
                                    <Text style={styles.mytitle}>
                                        Name of the Insurance company

                                    </Text>
                                    <TextInput
                                    onChangeText={(InsuranceName)=>this.setState({InsuranceName})}
                                        keyboardType="default"
                                        style={styles.myInput}
                                        placeholder="Insurance company name"></TextInput>
                                    <Text style={styles.mytitle}>When is the Insurance Expirry date?</Text>

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
                                            .chosenDate2
                                            .toString()
                                            .substr(4, 12)}
                                            textStyle={{
                                            color: "green"
                                        }}
                                            placeHolderTextStyle={{
                                            color: "#d3d3d3"
                                        }}
                                            onDateChange={this.props.setDate2}
                                            disabled={false}/>
                                    </Content>
                                </View>

                            : null
}

                        <Text style={styles.mytitle}>
                            What is your licence number?

                        </Text>
                        <TextInput
                        onChangeText={(licenceNo)=>this.setState({licenceNo})}
                            keyboardType="default"
                            style={styles.myInput}
                            placeholder="licence number"></TextInput>

                    </View>
                    <ListItem>
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.props.backToForm2()}
                                style={{
                                alignItems: 'center',
                                padding: 20,
                                backgroundColor: '#fff',
                                borderWidth: 1,
                                borderColor: '#2962ff'
                            }}>
                                <Text
                                    style={{
                                    color: 'black'
                                }}>Previous</Text>
                            </TouchableOpacity>
                        </Left>
                        <Right
                            style={{
                            width: '100%'
                        }}>
                            <TouchableOpacity
                                style={{
                                width: '100%',
                                alignItems: 'center',
                                padding: 20,
                                backgroundColor: '#087f23'
                            }}>
                                <Text
                                    style={{
                                    color: 'white'
                                }}>Finish</Text>
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
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

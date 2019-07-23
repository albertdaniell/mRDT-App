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
            Insurance: this.props.Insurance,
            licenceNo: this.props.licenceNo,
            InsuranceName: this.props.InsuranceName
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
                        marginTop: 10
                    }}>

                        <Text style={styles.mytitle}>
                            Registered your motor bike with insurance company?

                        </Text>
                        <ListItem>
                            <Left>
                                <TouchableOpacity
                                    style={{
                                    width: '100%',
                                    padding: 3
                                }}
                                    onPress={() => this.props.changeInsuranceYes()}>
                                    <Text>Yes</Text>
                                </TouchableOpacity>
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
                                <TouchableOpacity
                                    style={{
                                    width: '100%',
                                    padding: 3
                                }}
                                    onPress={() => this.props.changeInsuranceNo()}>
                                    <Text>No</Text>
                                </TouchableOpacity>
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
                                        defaultValue={this.props.InsuranceName}
                                        onChangeText={(InsuranceName) => this.props.getInsuranceDetails(InsuranceName, this.props.licenceNo)}
                                        keyboardType="default"
                                        style={styles.myInput}
                                        placeholder="Insurance company name"></TextInput>
                                    <Text style={styles.mytitle}>When is the Insurance Expirry date?</Text>

                                    <Content
                                        style={{
                                        backgroundColor: "#f2f2f2",
                                        padding: 9,
                                        borderRadius: 4,
                                        marginBottom: 20,
                                        width: '100%'
                                    }}>
                                        <DatePicker
                                            defaultDate={new Date()}
                                            style={{
                                            width: '100%'
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
                            defaultValue={this.props.licenceNo}
                            onChangeText={(licenceNo) => this.props.getInsuranceDetails(this.props.InsuranceName, licenceNo)}
                            keyboardType="default"
                            style={styles.myInput}
                            placeholder="licence number"></TextInput>

                    </View>
                    <View
                        style={{
                        flex: 1,
                        flexDirection: 'row',
                        padding: 10,
                        marginTop: 20
                    }}>

                        <TouchableOpacity
                            onPress={() => this.props.backToForm2()}
                            style={{
                            alignItems: 'center',
                            padding: 20,
                            width: '100%',
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#2962ff',
                            flex: 1
                        }}>
                            <Text
                                style={{
                                color: 'black'
                            }}>Previous</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.props.clearForm3}
                            style={{
                            width: '100%',
                            alignItems: 'center',
                            padding: 20,
                            backgroundColor: '#2962ff',
                            flex: 1
                        }}>
                            <Text
                                style={{
                                color: 'white'
                            }}>Next</Text>
                        </TouchableOpacity>
                    </View>

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

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

export default class BodaBodaDetails extends Component {

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
                        padding: 10
                    }}>
                        <Text style={styles.mytitle}>
                            BodaBoda frame number/ Tuk tuk chaser number

                        </Text>
                        <TextInput keyboardType="default" style={styles.myInput} placeholder=""></TextInput>

                        <Text style={styles.mytitle}>
                            BodaBoda/ Tuk tuk make eg. Honda, Boxer,Cruz,Tus,King Bird

                        </Text>
                        <TextInput keyboardType="default" style={styles.myInput} placeholder="Honda"></TextInput>
                        <Text style={styles.mytitle}>
                            Registration Plate

                        </Text>
                        <TextInput
                            keyboardType="default"
                            style={styles.myInput}
                            placeholder="Plate number"></TextInput>
                        <TextInput style={styles.myInput} placeholder="Your age"></TextInput>

                        <Text style={styles.mytitle}>
                            Does this motor bike belong to you?

                        </Text>
                        <ListItem>
                            <Left>
                                <Text>Yes</Text>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    onPress={() => this.props.changeBodaOwnerYes()}
                                    selected={this.props.ownerOfBodaYesSelect}/>
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
                                    onPress={() => this.props.changeBodaOwnerNo()}
                                    selected={this.props.ownerOfBodaNoSelect}/>
                            </Right>
                        </ListItem>

                     {
                         this.props.bodaOwnerFormShow?
                         <View>
                            <Text style={{fontStyle:'italic',padding:2,marginBottom:10,marginTop:10}}>Give Details of owner</Text>
                        <Text style={styles.mytitle}>
                           Full name

                        </Text>
                        <TextInput
                            keyboardType="default"
                            style={styles.myInput}
                            placeholder="Mary Jane"></TextInput> 

                            <Text style={styles.mytitle}>
                         ID number

                        </Text>
                        <TextInput
                            keyboardType="number-pad"
                            style={styles.myInput}
                            placeholder="29372922"></TextInput> 

                            <Text style={styles.mytitle}>
                                Phone number format is 254791827182

                            </Text>
                            <TextInput
                                keyboardType="number-pad"
                                style={styles.myInput}
                                placeholder="254791827182"></TextInput>
                        </View>
                         
                         
                         :null
                     }

                        
                    </View>

                    <ListItem>
                        <Left>
                            <TouchableOpacity
                                onPress={this.props.backToForm1}
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
                        <Right>
                            <TouchableOpacity
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

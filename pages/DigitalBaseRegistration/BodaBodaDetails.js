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
                        padding: 10,
                        marginTop:10
                    }}>
                        <Text style={styles.mytitle}>
                            BodaBoda frame number/ Tuk tuk chaser number

                        </Text>
                        <TextInput 
                        defaultValue={this.props.bodaFrameNo} 
                            onChangeText={(bodaFrameNo)=>this.props.getBodaDetails(bodaFrameNo,this.props.bodaMake,this.props.plateNo,this.props.bodaOwnerName,this.props.bodaOwnerID,this.props.bodaOwnerPhone)}
                        keyboardType="default" style={styles.myInput} placeholder=""></TextInput>

                        <Text style={styles.mytitle}>
                            BodaBoda/ Tuk tuk make eg. Honda, Boxer,Cruz,Tus,King Bird

                        </Text>
                        <TextInput 
                        defaultValue={this.props.bodaMake} 
                            onChangeText={(bodaMake)=>this.props.getBodaDetails(this.props.bodaFrameNo,bodaMake,this.props.plateNo,this.props.bodaOwnerName,this.props.bodaOwnerID,this.props.bodaOwnerPhone)}
                        keyboardType="default" style={styles.myInput} placeholder="Honda"></TextInput>
                        <Text style={styles.mytitle}>
                            Registration Plate number

                        </Text>
                        <TextInput
                        defaultValue={this.props.plateNo} 
                            onChangeText={(plateNo)=>this.props.getBodaDetails(this.props.bodaFrameNo,this.props.bodaMake,plateNo,this.props.bodaOwnerName,this.props.bodaOwnerID,this.props.bodaOwnerPhone)}
                            keyboardType="default"
                            style={styles.myInput}
                            placeholder="Plate number"></TextInput>

                        <Text style={styles.mytitle}>
                            Does this motor bike belong to you?

                        </Text>
                        <ListItem>
                            <Left>
                            <TouchableOpacity
                                style={{width:'100%',padding:3}}
                                    onPress={() => this.props.changeBodaOwnerYes()}
                                    > 
                                    <Text>Yes</Text>
                                    </TouchableOpacity>
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
                            <TouchableOpacity
                                style={{width:'100%',padding:3}}
                                    onPress={() => this.props.changeBodaOwnerNo()}
                                    > 
                                    <Text>No</Text>
                                    </TouchableOpacity>
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
                            <Text style={{fontStyle:'italic',padding:2,marginBottom:10,marginTop:10}}> ( Give Details of owner )</Text>
                        <Text style={styles.mytitle}>
                           Full name

                        </Text>
                        <TextInput
                        defaultValue={this.props.bodaOwnerName} 
                            onChangeText={(bodaOwnerName)=>this.props.getBodaDetails(this.props.bodaFrameNo,this.props.bodaMake,this.props.plateNo,bodaOwnerName,this.props.bodaOwnerID,this.props.bodaOwnerPhone)}
                            keyboardType="default"
                            style={styles.myInput}
                            placeholder="Mary Jane"></TextInput> 

                            <Text style={styles.mytitle}>
                         ID number

                        </Text>
                        <TextInput
                        defaultValue={this.props.bodaOwnerID} 
                            onChangeText={(bodaOwnerID)=>this.props.getBodaDetails(this.props.bodaFrameNo,this.props.bodaMake,this.props.plateNo,this.props.bodaOwnerName,bodaOwnerID,this.props.bodaOwnerPhone)}
                            keyboardType="number-pad"
                            style={styles.myInput}
                            placeholder="29372922"></TextInput> 

                            <Text style={styles.mytitle}>
                                Phone number format is 254791827182

                            </Text>
                            <TextInput
                            defaultValue={this.props.bodaOwnerPhone} 
                            onChangeText={(bodaOwnerPhone)=>this.props.getBodaDetails(this.props.bodaFrameNo,this.props.bodaMake,this.props.plateNo,this.props.bodaOwnerName,this.props.bodaOwnerID,bodaOwnerPhone)}
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
                            onPress={()=>this.props.clearForm2()}
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

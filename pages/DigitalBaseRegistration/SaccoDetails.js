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
render(){
    return(
        
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
                            Do you belong to any Sacco?

                        </Text>


                        <ListItem>
                            <Left>
                                <TouchableOpacity
                                    style={{
                                    width: '100%',
                                    padding: 3
                                }}
                                    onPress={() => this.props.changeSaccoYes()}>
                                    <Text>Yes</Text>
                                </TouchableOpacity>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    onPress={() => this.props.changeSaccoYes()}
                                    selected={this.props.SaccoYesSelect}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <TouchableOpacity
                                    style={{
                                    width: '100%',
                                    padding: 3
                                }}
                                    onPress={() => this.props.changeSaccoNo()}>
                                    <Text>No</Text>
                                </TouchableOpacity>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    onPress={() => this.props.changeSaccoNo()}
                                    selected={this.props.SaccoNoSelect}/>
                            </Right>
                        </ListItem>

                        {
                            this.props.DailyContribFormShow?
                            <View style={{marginTop:10}}>
                        <Text style={styles.mytitle}>
                                Please enter the sacco name
                            </Text>

                            <TextInput
                            defaultValue={this.props.SaccoName} 
                            onChangeText={(SaccoName)=>this.props.getSaccoDetails(SaccoName,this.props.DailyContribution)}
                                keyboardType="default"
                                style={styles.myInput}
                                placeholder="Harambe"></TextInput>

                                <Text style={styles.mytitle}>
                                Please enter your  contribution
                            </Text>

                            <TextInput
                            defaultValue={this.props.DailyContribution} 
                            onChangeText={(DailyContribution)=>this.props.getSaccoDetails(this.props.SaccoName,DailyContribution)}
                            keyboardType="number-pad"
                                style={styles.myInput}
                                placeholder="1000"></TextInput>
                        </View>
                            
                            :null
                        }

              
                        </View>

                        <ListItem>
                        <Left>
                            <TouchableOpacity
                               onPress={()=>this.props.backToForm3()}
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

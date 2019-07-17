import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpcity,
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
    Left
} from 'native-base';

export default class UserDemographics extends Component {

    render() {

        return (
            <View
                style={{
                height: '100%',
                flex: 1
            }}>
                <Header></Header>

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
                                Please enter your name
                            </Text>

                            <TextInput style={styles.myInput} placeholder="John Doe"></TextInput>

                            <Text style={styles.mytitle}>
                                Please enter your ID number
                            </Text>

                            <TextInput style={styles.myInput} placeholder="34929199"></TextInput>

                            <Text style={styles.mytitle}>
                                Your age is

                            </Text>

                            <TextInput style={styles.myInput} placeholder="Your age"></TextInput>
                            <Text style={styles.mytitle}>
                                Your Gender

                            </Text>
                            <ListItem>
                                <Left>
                                    <Text>Male</Text>
                                </Left>
                                <Right>
                                    <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={()=>alert(0)} selected={false}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Female</Text>
                                </Left>
                                <Right>
                                    <Radio    color={"#f0ad4e"}
                selectedColor={"#5cb85c"} selected={true}/>
                                </Right>
                            </ListItem>

                            <Text style={styles.mytitle}>
                                Phone number formwat is 254791827182

                            </Text>
                            <TextInput style={styles.myInput} placeholder="254791827182"></TextInput>

                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    myInput: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderWidth: 1,

        borderRadius: 4,
        marginBottom: 10
    },
    mytitle: {
        padding: 2,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

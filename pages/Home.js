// import ReactComponent from 'react';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {white} from 'ansi-colors';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Header from '../components/Header'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/tuktuk.jpg')}
                    style={{
                    height: '100%',
                    width: '100%'
                }}>
                    <View
                        style={{
                        backgroundColor: 'rgba(0,0,0,.6)',
                        height: '100%'
                    }}>

                        <View
                            style={{
                            backgroundColor: 'rgba(0,0,0,.9)',
                            flex: 1,
                            alignItems: 'flex-start',
                            height: '100%',
                            alignContent: 'flex-end',
                            justifyContent: 'flex-end',
                            padding: 0,
                            backgroundColor: 'rgba(0,0,0,.2)'
                        }}>
                            <Text
                                style={{
                                color: 'white',
                                fontSize: 50,
                                fontWeight: 'bold',
                                paddingLeft: 10
                            }}>Welcome!</Text>
                            <Text
                                style={{
                                color: 'white',
                                fontSize: 25,
                                fontWeight: 'bold',
                                marginBottom: 20,
                                paddingLeft: 10
                            }}>to M-BodaBoda.</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                                style={{
                                backgroundColor: 'rgba(255,69,0,.5)',
                                padding: 20,
                                alignItems: 'center',
                                borderRadius: 2,
                                width: '100%',
                                marginBottom: 0
                            }}>
                                <Text
                                    style={{
                                    letterSpacing: 4,
                                    color: 'white'
                                }}>GET STARTED</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

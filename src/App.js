import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component{

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDGTv-gWtrg-vvHo0e-c7wEpgxPwPGIBNc",
            authDomain: "auth-45e6e.firebaseapp.com",
            databaseURL: "https://auth-45e6e.firebaseio.com",
            projectId: "auth-45e6e",
            storageBucket: "auth-45e6e.appspot.com",
            messagingSenderId: "286526632323",
            appId: "1:286526632323:web:b4fea7b8e71bead5"
        })
    }

    render(){
        return(
            <View style={ styles.containerStyle }>
                    <Text style= {styles.labelStyle}>
                        Login
                    </Text>
                    <LoginForm/>
            </View>
        )
    }
}

const styles = {
    labelStyle:{
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    containerStyle: {
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        flex: 1
    }
}

export default App
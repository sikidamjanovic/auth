import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import { Button, Header, Spinner } from './components/common'

class App extends Component{

    state = {
        loggedIn: null
    }

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

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true })
            }else{
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View>
                        <Header text="We'll miss you..." />
                        <Button 
                            onPress={() => firebase.auth().signOut()}
                            text="Log Out"
                        />
                    </View>
                )
            case false:
                return <LoginForm/>
            default:
                return <Spinner/>
        }
    }

    render(){
        return(
            <View style={ styles.containerStyle }>
                {this.renderContent()}
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
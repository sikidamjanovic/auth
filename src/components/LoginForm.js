import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
    
    state = {
        email: '',
        password: '',
        error: ''
    }

    onButtonPress = () => {
        const { email, password } = this.state
        
        this.setState({ error: '' })

        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({ error: 'Authentication failed' })
            })
        })
    }

    render(){
        return(
            <Card>

                <Text style = { styles.errorStyle }>{ this.state.error }</Text>

                <CardSection>
                    <Input
                        label = 'Email'
                        placeholder = 'john.doe@gmail.com'
                        value = { this.state.email } 
                        onChangeText = { email => this.setState({ email: email })}
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        label = 'Password'
                        placeholder = '*******'
                        value = { this.state.password } 
                        onChangeText = { password => this.setState({ password: password })}
                        secureTextEntry
                    />
                </CardSection>

                <CardSection>
                    <Button 
                        text = "Log In" 
                        onPress = { this.onButtonPress.bind(this) }
                    />
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

export default LoginForm
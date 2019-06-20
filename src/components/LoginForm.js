import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner, Header } from './common'

class LoginForm extends Component {
    
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress = () => {
        const { email, password } = this.state
        
        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this))
        })
    }

    onLoginFailed = () => {
        this.setState({
            error: 'Authentication Failed :(',
            loading: false
        })
    }

    onLoginSuccess = () => {
        this.setState({ 
            email: '',
            password: '',
            error: '',
            loading: false
         })
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size='small' />
        }else{
            return <Button 
                        text = "Log In" 
                        onPress = { this.onButtonPress.bind(this) }
                    />
        }
    }

    render(){
        return(
            <View>
                <Header text="Hello!"/>
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

                    {this.renderButton()}

                </Card>
            </View>
        )
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20
    }
}

export default LoginForm
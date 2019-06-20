import React, { Component } from 'react';
import { View } from 'react-native';

class Card extends Component{
    render(props){
        return(
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    };
};

const styles = {
    containerStyle: {
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card }
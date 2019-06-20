import React, {Component} from 'react';
import { View } from 'react-native';

class CardSection extends Component{
    render(props){
        return(
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        )
    };
};

const styles = {
    containerStyle: {
        padding: 5,
        marginBottom: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        borderRadius: 20
    }
}

export { CardSection }
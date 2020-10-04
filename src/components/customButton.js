import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'

class customButton extends Component{
    render(){
        const {text,onPress}=this.props;
        return(
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>onPress()}>
                <Text style={styles.buttonTextStyle}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

customButton.propTypes = {
    text:PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    buttonTextStyle: {
        fontSize:20,
        color:'blue',
        textAlign: 'center',
    },
    buttonStyle:{
        padding:5,
        backgroundColor: 'white',
        borderRadius:5,
    }
})

export default customButton
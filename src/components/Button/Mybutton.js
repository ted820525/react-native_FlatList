import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types'

const Mybutton = props=>(

<TouchableOpacity onPress={props.myOnPress}>
    <Text>
        {props.myTitle}
    </Text>

</TouchableOpacity>
)

export default Mybutton

Mybutton.protoType = {
    myTitle: PropTypes.string.isRequired,
    myOnPress: PropTypes.func
}

Mybutton.defaultProps={
    myTitle:'hello'
}
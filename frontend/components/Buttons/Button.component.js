import React, { PureComponent } from 'react';
import {
    TouchableOpacity, Text
} from 'react-native';
import { buttonStyles } from './Button.style';

export default class CustomButton extends PureComponent {
    // static PropTypes = {
    //   content: PropTypes.title.isRequired
    // }

    render() {
        const { text, onPress, style } = this.props;
        const { greenButtonStyle, textStyle } = buttonStyles;
        // baseButtonStyle.backgroundColor = buttonColor;
        return (

            <TouchableOpacity onPress={onPress} style={{ ...style }} >
                <Text style={textStyle}>{text}</Text>
            </TouchableOpacity>

        );
    }
}

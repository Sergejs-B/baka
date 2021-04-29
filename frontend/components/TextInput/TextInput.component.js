import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import { textInputStyles } from './TextInput.style';

export default class CustomTextInput extends PureComponent {
    // static PropTypes = {
    //   content: PropTypes.title.isRequired
    // }
    render() {
        const { textContentType, style } = this.props;
        const { textInputStyle } = textInputStyles;
        // baseButtonStyle.backgroundColor = buttonColor;
        return (

            <TextInput
                {...this.props}
                style={{ ...textInputStyle, ...style }}
                textContentType={textContentType}/>
        );
    }
}

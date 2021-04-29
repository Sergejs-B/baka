import React, { PureComponent } from 'react';
import PropTypes, { View, Text } from 'react-native';

import { textStyles } from './Text.style';

export default class CustomText extends PureComponent {
    //   static PropTypes = {
    // text: PropTypes.text.isRequired
//    }

    render() {
        const { text, children, style } = this.props;
        const { textStyle } = textStyles;

        return (
            <View>
                <Text style={{ ...textStyle, ...style }}
                > {this.props.children}
                </Text>

            </View>
        );
    }
}

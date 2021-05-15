import React, { PureComponent } from 'react';
import { View, Alert } from 'react-native';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import CustomText from '../components/Text/Text.component';
import { textStyles } from '../components/Text/Text.style';

export class RegisterScreen extends PureComponent {
    render() {
        return (

            <View style={{ justifyContent: 'center', flex: 1 }}>
                <CustomText
                    style={{ ...textStyles.textStyle, marginLeft: '5%', marginVertical: 5 }}
                >E-Mail</CustomText>
                <CustomTextInput
                    textContentType='emailAddress'
                    style={{ alignSelf: 'center' }}
                >
                </CustomTextInput>

                <CustomText
                    style={{ ...textStyles.textStyle, marginLeft: '5%', marginVertical: 5 }}
                >Password</CustomText>

                <CustomTextInput
                    secureTextEntry
                    style={{ alignSelf: 'center' }}
                >
                </CustomTextInput>
                <CustomButton
                    text="Create My Profile"
                    onPress={() => Alert.alert('Simple Button pressed')}
                    buttonColor='rgba(141, 209, 103, 1)'
                    style={{ ...buttonStyles.greenButtonStyle, marginVertical: 20 }}
                ></CustomButton>
            </View>

        );
    }
}
export default RegisterScreen;

import React, { PureComponent } from 'react';
import { View, Alert } from 'react-native';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import { textStyles } from '../components/Text/Text.style';
import BottomTabs from '../components/BottomTab/BottomTab.component';

export class ProfileScreen extends PureComponent {
    goToRegister = () => {
        const { navigation } = this.props;

        navigation.navigate('Register');
    }
    render() {
        return (

            <View style={{ justifyContent: 'center', flex: 1 }} >
                <CustomText
                    style={{ ...textStyles.textStyle, marginLeft: '5%', marginVertical: 5 }}
                >E-Mail</CustomText>
                <CustomTextInput

                    textContentType='emailAddress'
                >
                </CustomTextInput>

                <CustomText
                    style={{ ...textStyles.textStyle, marginLeft: '5%', marginVertical: 5 }}
                >Password</CustomText>

                <CustomTextInput
                    textContentType='emailAddress'
                    secureTextEntry
                />
                <CustomButton
                    text="Log In"
                    onPress={() => Alert.alert('Simple Button pressed')}
                    buttonColor='rgba(141, 209, 103, 1)'
                    style={buttonStyles.greenButtonStyle}
                ></CustomButton>
                <CustomText style={{ ...textStyles.textStyle, alignSelf: 'center' }}>
                or
                </CustomText>
                <CustomButton
                    text="Create profile"
                    onPress={this.goToRegister}
                    buttonColor='white'
                    style={{ ...buttonStyles.whiteButtonStyle }}
                ></CustomButton>

            </View>

        );
    }
}
export default ProfileScreen;

import React, { PureComponent, useState } from 'react';
import { View, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import { textStyles } from '../components/Text/Text.style';
import BottomTabs from '../components/BottomTab/BottomTab.component';
import { login } from '../functions/endpoints/auth';
import ProfileScreen from './ProfileScreen';
import { setUserData, setAuthorizationToken, isSignedIn } from '../functions/AsyncStrorage';

export class LoginScreen extends ValidationComponent {
    state = {
        identifier: '',
        password: '',
        SignedIn: false
    }
    
    componentDidMount() {
        this.setSignInStatus().then((SignedIn) => this.setState({ SignedIn }));
    }
    async setSignInStatus() {
        const response = await isSignedIn();
        return response;
    }

    goToRegister = () => {
        const { navigation } = this.props;

        navigation.navigate('Register');
    }
    validation() {
        this.validate({
            identifier: { required: true, email: true },
            password: { required: true }
        });
        if (this.isFormValid()) {
            this.signIn();
        }
    }
    signIn() {
        const { triggerUpdateState } = this.props;
        login(this.state).then(
            (response) => {
                const { data: { user, jwt } } = response;

                console.log(jwt);
                setAuthorizationToken(jwt);
                setUserData(user);
                this.setState({ isSignedIn: true });
                triggerUpdateState();
            },
            (error) => {
                console.log(error);
                return {
                    status: 'error'
                };
            }
        );
    }

    render() {
        console.log(this.props);
        return (

            <View style={{ justifyContent: 'center', flex: 1 }} >
                <CustomText
                    style={{ ...textStyles.textStyle, marginLeft: '5%', marginVertical: 5 }}
                >E-Mail</CustomText>
                <CustomTextInput
                    value= {this.state.identifier}
                    onChangeText={(identifier) => this.setState({ identifier })}
                    style={{ alignSelf: 'center' }}
                    textContentType='emailAddress'
                >
                </CustomTextInput>

                <CustomText
                    style={{ ...textStyles.textStyle, marginLeft: '5%', marginVertical: 5 }}
                >Password</CustomText>

                <CustomTextInput
                    value= {this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry
                    style={{ alignSelf: 'center' }}
                />
                <CustomButton
                    text="Log In"
                    onPress={() => this.validation()}
                    buttonColor='rgba(141, 209, 103, 1)'
                    style={buttonStyles.greenButtonStyle}
                />
                <CustomText style={{ ...textStyles.textStyle, alignSelf: 'center' }}>
                or
                </CustomText>
                <CustomButton
                    text="Create profile"
                    onPress={this.goToRegister}
                    buttonColor='white'
                    style={{ ...buttonStyles.whiteButtonStyle }}
                />
            </View>

        );
    }
}

export default LoginScreen;

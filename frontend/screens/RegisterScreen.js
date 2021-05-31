import React, { PureComponent } from 'react';
import { View, Alert } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import CustomText from '../components/Text/Text.component';
import { textStyles } from '../components/Text/Text.style';
import { register } from '../functions/endpoints/auth';
import { setUserData, setAuthorizationToken } from '../functions/AsyncStrorage';

export class RegisterScreen extends ValidationComponent {
    state = {
        email: '',
        password: ''
    }
    goToLogin = () => {
        const { navigation } = this.props;
        navigation.navigate('Login');
    }
    validation() {
        this.validate({
            email: { required: true, email: true },
            password: { required: true }
        });
        if (this.isFormValid()) {
            this.createAccount();
            this.goToLogin();
        }
    }
    createAccount() {
        register(this.state).then(
            (response) => {
                const { data: { user, jwt } } = response;

                setAuthorizationToken(jwt);
                setUserData(user);

                return {
                    status: 'success'
                };
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
        return (

            <View style={{ justifyContent: 'center', flex: 1 }}>
                <CustomText
                    style={{ ...textStyles.textStyle, marginLeft: '5%', marginVertical: 5 }}
                >E-Mail</CustomText>
                <CustomTextInput
                    value= {this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    textContentType='emailAddress'
                    style={{ alignSelf: 'center' }}
                />

                { this.isFieldInError('email') && this.getErrorsInField('email').map(
                    (errorMessage) => <CustomText key={ errorMessage } style={{ color: 'red' }}>{ errorMessage }</CustomText>
                ) }

                <CustomText
                    style={{ ...textStyles.textStyle, marginLeft: '5%', marginVertical: 5 }}
                >Password</CustomText>

                <CustomTextInput
                    value= {this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry
                    style={{ alignSelf: 'center' }}
                />
                { this.isFieldInError('email') && this.getErrorsInField('email').map(
                    (errorMessage) => <CustomText key={ errorMessage } style={{ color: 'red' }}>{ errorMessage }</CustomText>
                ) }
                <CustomButton
                    text="Create My Profile"
                    onPress= {() => this.validation()}
                    buttonColor='rgba(141, 209, 103, 1)'
                    style={{ ...buttonStyles.greenButtonStyle, marginVertical: 20 }}
                    onText
                ></CustomButton>
            </View>

        );
    }
}
export default RegisterScreen;

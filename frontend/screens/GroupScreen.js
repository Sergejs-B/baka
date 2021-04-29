import React, { PureComponent } from 'react';
import { View, Alert } from 'react-native';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import { textStyles } from '../components/Text/Text.style';
import BottomTabs from '../components/BottomTab/BottomTab.component';

export class GroupScreen extends PureComponent {
    render() {
        return (

            <View style={{ justifyContent: 'center', flex: 1 }} >

                <CustomText>Group</CustomText>
            </View>

        );
    }
}
export default GroupScreen;

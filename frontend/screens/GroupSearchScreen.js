import React, { PureComponent } from 'react';
import {
    View, Alert, ScrollView, Image, TouchableOpacity
} from 'react-native';
import CustomButton from '../components/Buttons/Button.component';
import GroupIcon from '../assets/Group.png';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import { textStyles } from '../components/Text/Text.style';

export class GroupSearchScreen extends PureComponent {
    render() {
        return (
            <ScrollView >
                <View style={{ padding: 15 }}>
                    <View style={{ backgroundColor: 'rgba(196, 196, 196, 1)' }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center'
                        }}>
                            <CustomButton
                                style={{ ...buttonStyles.smallButton }}
                                text='Use profile filter'>
                            </CustomButton>
                            <CustomButton
                                text='Use custom filter'
                                style={{ ...buttonStyles.smallButton }}
                            />
                        </View>
                        <CustomButton
                            text='APPLY FILTER'
                            style={{ ...buttonStyles.greenButtonStyle }}
                        />

                    </View>
                    <TouchableOpacity style={{ marginVertical: 10, flexDirection: 'row' }}>
                        <Image source={GroupIcon} style={{ width: 70, height: 70 }}/>
                        <View style={{ marginHorizontal: 20 }}>
                            <CustomText>GroupName</CustomText>
                            <CustomText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CustomText>
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                        <Image source={GroupIcon} style={{ width: 70, height: 70 }}/>
                        <View style={{ marginHorizontal: 20, width: '80%' }}>
                            <CustomText >GroupName</CustomText>
                            <CustomText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CustomText>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default GroupSearchScreen;

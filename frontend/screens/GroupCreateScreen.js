import React, { PureComponent } from 'react';
import {
    View, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import { textStyles } from '../components/Text/Text.style';
import GroupIcon from '../assets/Group.png';
import ProfileIcon from '../assets/Profile.png';

export class ProfileCreateScreen extends PureComponent {
    goToGroup = () => {
        const { navigation } = this.props;
        navigation.navigate('Group');
    }
    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView >
                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={GroupIcon} />
                            <View style={{ flex: 1 }}>
                                <CustomTextInput style={{ marginLeft: 15, width: '60%' }} placeholder='Name Surname'/>
                                <CustomTextInput style={{ margin: 15, width: '50%', height: 40 }} placeholder='Nickname'/>
                            </View>
                        </View>
                        <CustomText style={{ marginTop: 10 }}>Members</CustomText>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                            <TouchableOpacity style={{ marginHorizontal: 10 }} >
                                <Image source={ProfileIcon} style={{ width: 70, height: 70 }}>

                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginHorizontal: 10 }}>
                                <Image source={ProfileIcon} style={{ width: 70, height: 70 }}>

                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginHorizontal: 10 }}>
                                <Image source={ProfileIcon} style={{ width: 70, height: 70 }}>

                                </Image>
                            </TouchableOpacity>
                        </View>

                        <CustomText style={{ marginTop: 10 }}>CHOOSE GENRE:</CustomText>
                        <View style={{
                            height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                        }}>
                            <Picker style={{ height: 50, width: '100%', borderWidth: 2 }} r>
                                <Picker.Item label = "Steve" value = "steve" />
                                <Picker.Item label = "Ellen" value = "ellen" />
                                <Picker.Item label = "Maria" value = "maria" />
                            </Picker>
                        </View>
                        <CustomText style={{ marginTop: 10 }}>DO YOU TAKE NEWBIES TO THE GROUP?</CustomText>
                        <View style={{
                            height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                        }}>
                            <Picker style={{ height: 50, width: '100%', borderWidth: 2 }} r>
                                <Picker.Item label = "Steve" value = "steve" />
                                <Picker.Item label = "Ellen" value = "ellen" />
                                <Picker.Item label = "Maria" value = "maria" />
                            </Picker>
                        </View>
                        <CustomText style={{ marginTop: 10 }}>REQUIRED EXPERIENCE PLAYING THE INSTRUMENT?</CustomText>
                        <View style={{
                            height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                        }}>
                            <Picker style={{ height: 50, width: '100%', borderWidth: 2 }} r>
                                <Picker.Item label = "Steve" value = "steve" />
                                <Picker.Item label = "Ellen" value = "ellen" />
                                <Picker.Item label = "Maria" value = "maria" />
                            </Picker>
                        </View>
                        <View style={{ width: '100%' }}>
                            <CustomText style={{ marginTop: 10 }} >NOTES</CustomText>

                            <CustomTextInput style={{
                                height: 200, textAlignVertical: 'top', alignSelf: 'center', width: '100%'
                            }} multiline numberOfLines={10} />

                            <CustomButton
                                text='CREATE MY GROUP'
                                buttonColor='green'
                                onPress={this.goToGroup}
                                style={{ ...buttonStyles.greenButtonStyle, width: '100%' }}/>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
export default ProfileCreateScreen;

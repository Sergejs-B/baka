import React, { PureComponent } from 'react';
import {
    View, Image, Platform, StatusBar, ScrollView, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import { textStyles } from '../components/Text/Text.style';
import BottomTabs from '../components/BottomTab/BottomTab.component';
import ProfileIcon from '../assets/Profile.png';
import EditButton from '../assets/EditButton.png';
import NotificationButton from '../assets/NotificationButton.png';

export class ProfileScreen extends PureComponent {
    goToProfileCreate = () => {
        const { navigation } = this.props;
        navigation.navigate('ProfileCreate');
    }
    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView >
                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={ProfileIcon} />
                            <View style={{ flex: 1 }}>
                                <CustomText style={{ marginLeft: 15, fontSize: 20 }} placeholder='Name Surname'>UsernameSurname </CustomText>
                                <CustomText style={{ margin: 15, width: '50%' }} placeholder='Nickname'>@nickname</CustomText>
                            </View>

                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity style={{
                                justifyContent: 'flex-end',
                                marginBottom: 10,
                                marginRight: 10,
                                backgroundColor: 'white',
                                borderRadius: 75,
                                width: 75
                            }}>
                                <Image source={NotificationButton} style={{
                                    height: 75, width: 75
                                }}/>
                            </TouchableOpacity>
                        </View>
                        <CustomText style={{ marginTop: 10 }}>INSTRUMENT:</CustomText>
                        <CustomText>Guitar</CustomText>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1
                            }}
                        />
                        <CustomText style={{ marginTop: 10 }}>EXPERIENCE OF PLAYING THE INSTRUMENT:</CustomText>
                        <CustomText>2 years</CustomText>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1
                            }}
                        />
                        <CustomText style={{ marginTop: 10 }}>PLAYED IN THE GROUPS:</CustomText>
                        <CustomText>2 years</CustomText>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1
                            }}
                        />
                        <CustomText style={{ marginTop: 10 }}>GENRE</CustomText>
                        <CustomText>Post-punk</CustomText>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1
                            }}
                        />
                        <View style={{ width: '100%' }}>
                            <CustomText style={{ marginTop: 10 }} >ABOUT ME</CustomText>

                            <CustomText style={{ marginBottom: 75 }}>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </CustomText>

                        </View>

                    </View>

                </ScrollView>
                <TouchableOpacity style={{
                    position: 'absolute',
                    marginBottom: 10,
                    marginRight: 10,
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderRadius: 75
                }}
                onPress={this.goToProfileCreate}
                >
                    <Image source={EditButton} style={{
                        height: 75, width: 75
                    }}/>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}
export default ProfileScreen;

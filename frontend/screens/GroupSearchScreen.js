import React, { PureComponent } from 'react';
import {
    View, Alert, ScrollView, Image, TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../components/Buttons/Button.component';
import GroupIcon from '../assets/Group.png';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import { textStyles } from '../components/Text/Text.style';

export class GroupSearchScreen extends PureComponent {
    state = {
        isProfileFilter: true,
        isCustomFilter: false
    }

    setCustomFilterActive = () => {
        this.setState({
            isProfileFilter: false,
            isCustomFilter: true
        });
    }
    setProfileFilterActive = () => {
        this.setState({
            isProfileFilter: true,
            isCustomFilter: false
        });
    }
    render() {
        const { isProfileFilter, isCustomFilter } = this.state;
        return (
            <ScrollView >
                <View style={{ padding: 15 }}>
                    <View style={{
                        backgroundColor: 'rgba(196, 196, 196, 1)', marginHorizontal: '-10%', paddingHorizontal: '10%', marginTop: '-10%', paddingTop: '10%'
                    }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center'
                        }}>
                            <CustomButton
                                style={{ ...buttonStyles.smallButton }}
                                text='Use profile filter'
                                onPress= {this.setProfileFilterActive}
                            >
                            </CustomButton>
                            <CustomButton
                                text='Use custom filter'
                                style={{ ...buttonStyles.smallButton }}
                                onPress={this.setCustomFilterActive}
                            />
                        </View>
                        { isCustomFilter && (
                            <View>
                                <CustomText style={{ marginTop: 10 }}>WHAT INSTRUMENT DO YOU PLAY?</CustomText>
                                <View style={{
                                    height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                                }}>
                                    <Picker style={{ height: 50, width: '100%', borderWidth: 2 }} r>
                                        <Picker.Item label = "Steve" value = "steve" />
                                        <Picker.Item label = "Ellen" value = "ellen" />
                                        <Picker.Item label = "Maria" value = "maria" />
                                    </Picker>
                                </View>
                                <CustomText style={{ marginTop: 10 }}>HAVE YOU EVER PLAYED IN A GROUP?</CustomText>
                                <View style={{
                                    height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                                }}>
                                    <Picker style={{ height: 50, width: '100%', borderWidth: 2 }} r>
                                        <Picker.Item label = "Steve" value = "steve" />
                                        <Picker.Item label = "Ellen" value = "ellen" />
                                        <Picker.Item label = "Maria" value = "maria" />
                                    </Picker>
                                </View>
                                <CustomText style={{ marginTop: 10 }}>HOW LONG DO YOU PLAY YOUR INSTRUMENT?</CustomText>
                                <View style={{
                                    height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                                }}>
                                    <Picker style={{ height: 50, width: '100%', borderWidth: 2 }} r>
                                        <Picker.Item label = "Steve" value = "steve" />
                                        <Picker.Item label = "Ellen" value = "ellen" />
                                        <Picker.Item label = "Maria" value = "maria" />
                                    </Picker>
                                </View>
                                <CustomText style={{ marginTop: 10 }}>CHOOSE GENRE</CustomText>
                                <View style={{
                                    height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 15
                                }}>
                                    <Picker style={{ height: 50, width: '100%', borderWidth: 2 }} r>
                                        <Picker.Item label = "Steve" value = "steve" />
                                        <Picker.Item label = "Ellen" value = "ellen" />
                                        <Picker.Item label = "Maria" value = "maria" />
                                    </Picker>
                                </View>
                            </View>
                        )}
                        { isProfileFilter && (
                            <View/>
                        )}
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

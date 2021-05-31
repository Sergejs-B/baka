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
import { createGroup } from '../functions/endpoints/group';
import { updateMusician, getMusician } from '../functions/endpoints/musician';
import { getUserData } from '../functions/AsyncStrorage';
import { GroupScreen } from './GroupScreen';

export class GroupCreateScreen extends PureComponent {
    state = {
        genre: 'hiphop',
        playedInGroup: true,
        experience: 0,
        groupNickname: '',
        groupName: '',
        notes: '',
        ownerId: '',
        inGroup: '',
        groupId: ''
    }
    componentDidMount() {
        getUserData().then((user) => this.setState({ ownerId: user.id },
            () => getMusician(this.state.ownerId).then((musician) => this.setState({ groupId: musician.data.profileData.groupId }))));
        console.log(this.state.ownerId);
        // setState({ profileCreated: user.profileCreated }));
    }
    create = () => {
        createGroup(this.state).then(
            (response) => {
                const { data } = response;
                this.setState({ groupId: data.id });
                updateMusician({ groupId: this.state.groupId }, this.state.ownerId);
                // this.goToGroup();
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

    goToGroup = () => {
        const { navigation } = this.props;
        navigation.navigate('Group');
    }
    render() {
        if (this.state.groupId) { return <GroupScreen {...this.props}/>; }
        return (
            <KeyboardAvoidingView>
                <ScrollView >
                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={GroupIcon} />
                            <View style={{ flex: 1 }}>
                                <CustomTextInput style={{ marginLeft: 15, width: '60%' }} placeholder='Name Surname'
                                    value= {this.state.groupName}
                                    onChangeText={(groupName) => this.setState({ groupName })}/>
                                <CustomTextInput style={{ margin: 15, width: '50%', height: 40 }} placeholder='Nickname'
                                    value= {this.state.groupNickname}
                                    onChangeText={(groupNickname) => this.setState({ groupNickname })}/>
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
                            <Picker style={{ height: 50, width: '100%', borderWidth: 2 }}
                                selectedValue = {this.state.genre}
                                onValueChange={(itemValue) => this.setState({ genre: itemValue }) }>
                                <Picker.Item label = "Rock" value = "Rock" />
                                <Picker.Item label = "Pop" value = "Pop" />
                                <Picker.Item label = "Country" value = "Country" />
                                <Picker.Item label = "Folk" value = "Folk"/>
                                <Picker.Item label = "Metal" value = "Metal"/>
                                <Picker.Item label = "Hip-Hop" value = "Hip-Hop"/>
                            </Picker>
                        </View>
                        <CustomText style={{ marginTop: 10 }}>DO YOU TAKE NEWBIES TO THE GROUP?</CustomText>
                        <View style={{
                            height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                        }}>
                            <Picker style={{ height: 50, width: '100%', borderWidth: 2 }}
                                selectedValue = {this.state.playedInGroup}
                                onValueChange={(itemValue) => this.setState({ playedInGroup: itemValue }) }>
                                <Picker.Item label = "Yes" value = {true} />
                                <Picker.Item label = "No" value = {false} />
                            </Picker>
                        </View>
                        <CustomText style={{ marginTop: 10 }}>REQUIRED EXPERIENCE PLAYING THE INSTRUMENT?</CustomText>
                        <View style={{
                            height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                        }}>
                            <Picker style={{ height: 50, width: '100%', borderWidth: 2 }}
                                selectedValue = {this.state.experience}
                                onValueChange={(itemValue) => this.setState({ experience: itemValue }) }>
                                <Picker.Item label = "Less than 1 year" value = {0} />
                                <Picker.Item label = "More than 1 year" value = {1} />
                                <Picker.Item label = "More than 3 years" value = {3} />
                                <Picker.Item label = "More than 5 years" value = {5} />
                            </Picker>
                        </View>
                        <View style={{ width: '100%' }}>
                            <CustomText style={{ marginTop: 10 }} >NOTES</CustomText>
                            <CustomTextInput style={{
                                height: 200, textAlignVertical: 'top', alignSelf: 'center', width: '100%'
                            }} multiline numberOfLines={10} value= {this.state.notes}
                            onChangeText={(notes) => this.setState({ notes })}/>
                            <CustomButton
                                text='CREATE MY GROUP'
                                buttonColor='green'
                                onPress= {() => { this.create(); }}
                                style={{ ...buttonStyles.greenButtonStyle, width: '100%' }}/>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
export default GroupCreateScreen;

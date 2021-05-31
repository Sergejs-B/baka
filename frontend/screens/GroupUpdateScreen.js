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
import { updateGroup, getGroup, createGroupInstrument } from '../functions/endpoints/group';
import { updateMusician, getMusician } from '../functions/endpoints/musician';
import { getUserData } from '../functions/AsyncStrorage';
import GroupScreen from './GroupScreen';
import AddMember from '../assets/AddMember.png';

export class GroupUpdateScreen extends PureComponent {
    state = {
        genre: 'Hip-Hop',
        playedInGroup: true,
        experience: 0,
        groupNickame: '',
        groupName: '',
        notes: '',
        inGroup: '',
        groupId: '',
        instrments: [],
        memberArray: []
    }
    componentDidMount() {
        getUserData().then((user) => this.setState({
            musicianId: user.id
        },
        () => getMusician(this.state.musicianId).then((musician) => this.setState({
            groupId: musician.data.profileData.groupId
        }, () => getGroup(this.state.groupId).then((group) => this.setState({
            genre: group.data.groupData.genre,
            playedInGroup: group.data.groupData.playedInGroup,
            experience: group.data.groupData.experience,
            groupName: group.data.groupData.groupName,
            groupNickname: group.data.groupData.groupNickname,
            notes: group.data.groupData.notes

        }))))));
    }
    update = () => {
        const instrments = Object.entries(this.state).reduce((acc, [key, value]) => {
            if (key.includes('groupInstrument')) {
                acc.push(value);
            }
            return acc;
        }, []);
        createGroupInstrument({ instrments });

        updateGroup(this.state, this.state.groupId).then(
            (response) => {
                const { data } = response;
                this.goToGroup();
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

    createMember = (item) => (<View style={{
        height: 70, width: 70, borderWidth: 1, borderRadius: 35, marginHorizontal: 10
    }}>
        <Picker style={{
            height: 70, width: '100%', paddingLeft: 70
        }}
        selectedValue = {this.state.item || ''}
        onValueChange={(itemValue) => this.setState({ [`groupInstrument${ item.toString() }`]: itemValue }) }
        key = {item}
        >
            <Picker.Item label = "Guitar" value = "Guitar" />
            <Picker.Item label = "Drums" value = "Drums" />
            <Picker.Item label = "Bass Guitar" value = "Bass Guitar" />
            <Picker.Item label = "Vocal" value = "Vocal"/>
            <Picker.Item label = "Piano" value = "Piano"/>
        </Picker>
    </View>)

    goToGroup = () => {
        const { navigation } = this.props;
        navigation.navigate('Group');
    }
    addMemberArray = () => {
        const { memberArray } = this.state;
        this.setState({ memberArray: [...memberArray, memberArray.length ? memberArray[memberArray.length - 1] + 1 : 1] });
        console.log(this.state.memberArray);
    }
    render() {
        console.log(this.state);
        const { memberArray } = this.state;

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
                        <ScrollView horizontal showsHorizontalScrollIndicator = {false} style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: -10 }}>
                            { memberArray.map(this.createMember) }
                            <TouchableOpacity
                                style={{ marginHorizontal: 10 }}
                                onPress= {() => this.addMemberArray()} >
                                <Image source={AddMember} style={{ width: 70, height: 70 }}/>
                            </TouchableOpacity>

                        </ScrollView>

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
                                text='UPDATE MY GROUP'
                                buttonColor='green'
                                onPress= {() => { this.update(); }}
                                style={{ ...buttonStyles.greenButtonStyle, width: '100%' }}/>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
export default GroupUpdateScreen;

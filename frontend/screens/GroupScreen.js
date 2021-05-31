import React, { PureComponent } from 'react';
import {
    View, Image, Modal, StatusBar, ScrollView, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import { textStyles } from '../components/Text/Text.style';
import ProfileIcon from '../assets/Profile.png';
import GroupIcon from '../assets/Group.png';
import EditButton from '../assets/EditButton.png';
import NotificationButton from '../assets/NotificationButton.png';
import { getGroup } from '../functions/endpoints/group';
import { getMusician } from '../functions/endpoints/musician';
import { getUserData } from '../functions/AsyncStrorage/index';

export class GroupScreen extends PureComponent {
    state={
        isVisible: false,
        genre: 'hiphop',
        playedInGroup: true,
        experience: 0,
        groupNickame: '',
        groupName: '',
        notes: '',
        ownerId: '',
        groupId: '',
        musicianId: ''
    }
    goToGroupUpdate = () => {
        const { navigation } = this.props;
        navigation.navigate('GroupUpdate');
    };
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

    render() {
        checkSwitch = (param) => {
            switch (param) {
                case 0:
                    return (
                        <CustomText>Less than 1 year</CustomText>
                    );
                case 1:
                    return (
                        <CustomText>1-3 years</CustomText>);
                case 3:
                    return (
                        <CustomText>3-5 years</CustomText>);
                case 5:
                    return (
                        <CustomText>More than 5 years</CustomText>);
                default:
            }
        };
        return (
            <KeyboardAvoidingView>
                <ScrollView >
                    <Modal
                        animationType = {'fade'}
                        transparent = {false}
                        visible = {this.state.isVisible}
                        onRequestClose = {() => { console.log('Modal has been closed.'); } }>
                        {/* All views of Modal */}
                        <View >
                            <CustomText> Test</CustomText>
                            <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                                <Image source={GroupIcon} style={{ width: 70, height: 70 }}/>
                                <View style={{ marginHorizontal: 20, width: '80%' }}>
                                    <CustomText >GroupName</CustomText>
                                    <CustomText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CustomText>
                                </View>
                            </View>
                            <CustomButton
                                style={{ ...buttonStyles.whiteButtonStyle, backgroundColor: 'rgba(248, 61, 61, 1)' }}
                                text="Click To Close Modal" onPress = {() => {
                                    this.setState({ isVisible: !this.state.isVisible });
                                }}/>
                        </View>
                    </Modal>
                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={GroupIcon} />
                            <View style={{ flex: 1 }}>
                                <CustomText style={{ marginLeft: 15, fontSize: 20 }}>{this.state.groupName} </CustomText>
                                <CustomText style={{ margin: 15, width: '50%' }}>{this.state.groupNickname}</CustomText>
                            </View>

                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity style={{
                                justifyContent: 'flex-end',
                                marginRight: 10,
                                backgroundColor: 'white',
                                borderRadius: 75,
                                width: 75
                            }}
                            onPress={() => { this.setState({ isVisible: true }); }}>
                                <Image source={NotificationButton} style={{
                                    height: 75, width: 75
                                }}/>
                            </TouchableOpacity>
                        </View>
                        <CustomText >Members</CustomText>
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
                        <CustomText style={{ marginTop: 10 }}>REQUIRED EXPERIENCE OF PLAYING THE INSTRUMENT:</CustomText>
                        {checkSwitch(this.state.experience)}
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1
                            }}
                        />
                        <CustomText style={{ marginTop: 10 }}>PLAYED IN THE GROUPS:</CustomText>
                        <CustomText>{this.state.playedInGroup ? ('Yes') : ('No') }</CustomText>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1
                            }}
                        />
                        <CustomText style={{ marginTop: 10 }}>GENRE</CustomText>
                        <CustomText>{this.state.genre}</CustomText>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1
                            }}
                        />
                        <View style={{ width: '100%' }}>
                            <CustomText style={{ marginTop: 10 }} >ABOUT GROUP</CustomText>

                            <CustomText>
                                {this.state.notes}
                            </CustomText>

                        </View>

                    </View>

                    <TouchableOpacity style={{
                        position: 'absolute',
                        marginBottom: 10,
                        marginRight: 10,
                        bottom: 0,
                        right: 0,
                        backgroundColor: 'white',
                        borderRadius: 75
                    }}
                    onPress={this.goToGroupUpdate}
                    >
                        <Image source={EditButton} style={{
                            height: 75, width: 75
                        }}/>
                    </TouchableOpacity>
                    <CustomButton
                        style={{
                            ...buttonStyles.whiteButtonStyle, backgroundColor: 'rgba(248, 61, 61, 1)', width: '70%', alignSelf: 'flex-start'
                        }}
                        text="LEAVE GROUP" onPress = {() => {
                            this.setState({ isVisible: !this.state.isVisible });
                        }}/>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
export default GroupScreen;

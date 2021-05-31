import React, { PureComponent } from 'react';
import {
    View, Image, ScrollView, KeyboardAvoidingView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../components/Buttons/Button.component';
import CustomTextInput from '../components/TextInput/TextInput.component';
import CustomText from '../components/Text/Text.component';
import { buttonStyles } from '../components/Buttons/Button.style';
import ProfileIcon from '../assets/Profile.png';
import { createMusician } from '../functions/endpoints/musician';
import { getUserData, setUserData } from '../functions/AsyncStrorage/index';
import ProfileScreen from './ProfileScreen';

export class ProfileCreateScreen extends PureComponent {
    state = {
        nameSurname: '',
        nickname: '',
        instrument: 'guitar',
        SignedIn: false,
        playedInGroup: true,
        experience: 0,
        genre: 'rock',
        notes: '',
        musicianId: {},
        profileCreated: 0

    }

    componentDidMount() {
        getUserData().then((user) => this.setState({ musicianId: user.id, profileCreated: user.isProfileCreated }, () => getUserData().then((user) => console.log(user))));
        getUserData().then((user) => console.log(user));
        // setState({ profileCreated: user.profileCreated }));
    }
    goToProfile = () => {
        const { navigation } = this.props;
        navigation.navigate('Profile');
    }
    create = () => {
        createMusician(this.state, this.state.musicianId).then(
            (response) => {
                getUserData().then((user) => {
                    setUserData({
                        ...user,
                        isProfileCreated: 1
                    });
                });

                const { data } = response;
                this.goToProfile();
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
        if (this.state.profileCreated) { return <ProfileScreen {...this.props}/>; }

        return (
            <KeyboardAvoidingView>
                <ScrollView >
                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={ProfileIcon} />
                            <View style={{ flex: 1 }}>
                                <CustomTextInput style={{ marginLeft: 15, width: '60%' }}
                                    placeholder='Name Surname'
                                    value= {this.state.nameSurname}
                                    onChangeText={(nameSurname) => this.setState({ nameSurname })}/>
                                <CustomTextInput style={{ margin: 15, width: '50%', height: 40 }}
                                    placeholder='Nickname'
                                    value= {this.state.nickname}
                                    onChangeText={(nickname) => this.setState({ nickname })}/>
                            </View>

                        </View>
                        <CustomText style={{ marginTop: 10 }}>WHAT INSTRUMENT DO YOU PLAY?</CustomText>
                        <View style={{
                            height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 10
                        }}>
                            <Picker style={{ height: 50, width: '100%', borderWidth: 2 }}
                                selectedValue = {this.state.instrument}
                                onValueChange={(itemValue) => this.setState({ instrument: itemValue }) }
                            >
                                <Picker.Item label = "Guitar" value = "Guitar" />
                                <Picker.Item label = "Drums" value = "Drums" />
                                <Picker.Item label = "Bass Guitar" value = "Bass Guitar" />
                                <Picker.Item label = "Vocal" value = "Vocal"/>
                                <Picker.Item label = "Piano" value = "Piano"/>
                            </Picker>
                        </View>
                        <CustomText style={{ marginTop: 10 }}>HAVE YOU EVER PLAYED IN A GROUP?</CustomText>
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
                        <CustomText style={{ marginTop: 10 }}>HOW LONG DO YOU PLAY YOUR INSTRUMENT?</CustomText>
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
                        <CustomText style={{ marginTop: 10 }}>CHOOSE GENRE</CustomText>
                        <View style={{
                            height: 50, width: '100%', borderWidth: 2, borderRadius: 7, marginTop: 15
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
                        <View style={{ width: '100%' }}>
                            <CustomText style={{ marginTop: 10 }} >NOTES</CustomText>

                            <CustomTextInput style={{
                                height: 200, textAlignVertical: 'top', alignSelf: 'center', width: '100%'
                            }} multiline numberOfLines={10}
                            value= {this.state.notes}
                            onChangeText={(notes) => this.setState({ notes })}/>

                            <CustomButton
                                text='CREATE PROFILE'
                                buttonColor='green'
                                onPress={() => this.create(this.state)}
                                style={{ ...buttonStyles.greenButtonStyle, width: '100%' }}/>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
export default ProfileCreateScreen;

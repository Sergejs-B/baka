/* eslint-disable import/no-cycle */
import { NavigationContainer } from '@react-navigation/native';
import React, { PureComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import BottomTabs from '../BottomTab/BottomTab.component';
import GroupScreen from '../../screens/GroupScreen';
import ProfileCreateScreen from '../../screens/ProfileCreateScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import MusicianSearch from '../../screens/MusicianSearch';
import GroupSearchScreen from '../../screens/GroupSearchScreen';
import { isSignedIn } from '../../functions/AsyncStrorage';
import ProfileUpdateScreen from '../../screens/ProfileUpdateScreen';

export class Navigator extends PureComponent {
    state = {
        SignedIn: false
    }
    componentDidMount() {
        this.triggerUpdateState();
    }
    triggerUpdateState = () => {
        this.setSignInStatus().then((SignedIn) => this.setState({ SignedIn }));
    }
    async setSignInStatus() {
        const response = await isSignedIn();
        return response;
    }
    auth() {
        const AuthStack = createStackNavigator();
        return (
            <AuthStack.Navigator initialRouteName="Login" screenOptions= {{ headerShown: false }}>
                <AuthStack.Screen name="Login">
                    {(props) => <LoginScreen {...props} triggerUpdateState={this.triggerUpdateState} />}
                </AuthStack.Screen>
                <AuthStack.Screen name="Register" component={RegisterScreen} />
            </AuthStack.Navigator>
        );
    }
    app() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName="Profile" screenOptions= {{ headerShown: false }}>
                <Stack.Screen name="BottomTabs">
                    {(props) => <BottomTabs {...props} triggerUpdateState={this.triggerUpdateState} />}
                </Stack.Screen>

                {/* <Stack.Screen name="Group" component={GroupScreen}/>
                <Stack.Screen name="ProfileCreate" component={ProfileCreateScreen}/>

                <Stack.Screen name="Profile">
                    {(props) => <ProfileScreen {...props} triggerUpdateState={this.triggerUpdateState} />}

                </Stack.Screen>
                <Stack.Screen name="MusicianSearch" component={MusicianSearch}/>
                <Stack.Screen name="GroupSearch" component={GroupSearchScreen}/>
               */}
            </Stack.Navigator>
        );
    }
    render() {
        const { SignedIn } = this.state;

        return (
            <NavigationContainer>
                {SignedIn ? this.app() : this.auth()}
            </NavigationContainer>
        );
    }
}
export default Navigator;

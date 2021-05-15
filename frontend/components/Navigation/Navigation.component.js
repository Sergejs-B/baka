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

export class Navigator extends PureComponent {
    render() {
        console.log(this.props);
        const Stack = createStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions= {{ headerShown: false }}>
                    <Stack.Screen name="BottomTabs" component={BottomTabs}/>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Group" component={GroupScreen}/>
                    <Stack.Screen name="ProfileCreate" component={ProfileCreateScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                    <Stack.Screen name="MusicianSearch" component={MusicianSearch}/>
                    <Stack.Screen name="GroupSearch" component={GroupSearchScreen}/>

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Navigator;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { PureComponent } from 'react';
import {Image} from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import profileIcon from '../../assets/Profile.png';
import GroupScreen from '../../screens/GroupScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import MusicianSearch from '../../screens/MusicianSearch';
import GroupSearchScreen  from '../../screens/GroupSearchScreen';


const Tab = createBottomTabNavigator();

export class BottomTabs extends PureComponent {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Login') {
                            iconName = focused
                                ? profileIcon
                                : profileIcon;
                        } else if (route.name === 'Register') {
                            iconName = focused ? profileIcon : profileIcon;
                        }
                        return <Image source={ iconName }/>;
                    }
                })}
            >
                <Tab.Screen name='Login' component={LoginScreen}/>
                <Tab.Screen name='Register' component={RegisterScreen} />

            </Tab.Navigator>
        );
    }
}
export default BottomTabs;

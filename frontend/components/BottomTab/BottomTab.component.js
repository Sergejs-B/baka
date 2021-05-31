import React, { PureComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import ProfileIcon from '../../assets/Profile.png';
import ProfileSelectedIcon from '../../assets/ProfileSelected.png';
import GroupIcon from '../../assets/Group.png';
import GroupSelectedIcon from '../../assets/GroupSelected.png';
import GroupSearchIcon from '../../assets/GroupSearch.png';
import GroupSerachSelectedIcon from '../../assets/GroupSearchSelected.png';
import MusicianSearchIcon from '../../assets/MusicianSearch.png';
import MusicianSearchSelectedIcon from '../../assets/MusicianSearchSelected.png';
import GroupCreateScreen from '../../screens/GroupCreateScreen';
import GroupScreen from '../../screens/GroupScreen';
import ProfileCreateScreen from '../../screens/ProfileCreateScreen';
import MusicianSearch from '../../screens/MusicianSearch';
import GroupSearchScreen from '../../screens/GroupSearchScreen';
import { bottomTabStyles } from './BottomTab.style';
import ProfileScreen from '../../screens/ProfileScreen';
import ProfileUpdateScreen from '../../screens/ProfileUpdateScreen';
import GroupUpdateScreen from '../../screens/GroupUpdateScreen';

const ProfileStack = createStackNavigator();
const GroupStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const { backgroundStyle } = bottomTabStyles;

const Profile = (profileProps) => (
    <ProfileStack.Navigator screenOptions= {{ headerShown: false }}>
        <ProfileStack.Screen

            name="ProfileCreate">
            {(props) => <ProfileCreateScreen {...props} triggerUpdateState={profileProps.triggerUpdateState} /> }
        </ProfileStack.Screen>

        <ProfileStack.Screen
            name="Profile"
        >
            {(props) => <ProfileScreen {...props} triggerUpdateState={profileProps.triggerUpdateState} /> }

        </ProfileStack.Screen>
        <ProfileStack.Screen
            name="ProfileUpdate"
            component={ProfileUpdateScreen}
        />

    </ProfileStack.Navigator>
);
const Group = () => (
    <GroupStack.Navigator screenOptions= {{ headerShown: false }}>
        <GroupStack.Screen
            component={ GroupCreateScreen }
            name="GroupCreate"
        />
        <GroupStack.Screen
            component={ GroupScreen }
            name="Group"
        />
        <GroupStack.Screen
            component={GroupUpdateScreen}
            name="GroupUpdate"
        />

    </GroupStack.Navigator>
);

export class BottomTabs extends PureComponent {
    render() {
        const { triggerUpdateState } = this.props;
        return (

            <Tab.Navigator
                style= {{ ...backgroundStyle }}
                tabBarOptions= {{ showLabel: false, style: backgroundStyle, keyboardHidesTabBar: true }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Profile') {
                            iconName = focused
                                ? ProfileSelectedIcon
                                : ProfileIcon;
                        } else if (route.name === 'Group') {
                            iconName = focused
                                ? GroupSelectedIcon
                                : GroupIcon;
                        } else if (route.name === 'GroupSearch') {
                            iconName = focused
                                ? GroupSerachSelectedIcon
                                : GroupSearchIcon;
                        } else if (route.name === 'MusicianSearch') {
                            iconName = focused
                                ? MusicianSearchSelectedIcon
                                : MusicianSearchIcon;
                        }
                        return <Image source={ iconName } style={{ height: 50, width: 50 }}/>;
                    }
                })}
            >
                <Tab.Screen name='Profile' >
                    {(props) => <Profile {...props} triggerUpdateState={triggerUpdateState} />}
                </Tab.Screen>
                <Tab.Screen name='Group' component={Group} />
                <Tab.Screen name='GroupSearch' component={GroupSearchScreen} />
                <Tab.Screen name='MusicianSearch' component={MusicianSearch} />

            </Tab.Navigator>
        );
    }
}
export default BottomTabs;

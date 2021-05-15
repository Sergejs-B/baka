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

import GroupScreen from '../../screens/GroupScreen';
import ProfileCreateScreen from '../../screens/ProfileCreateScreen';
import MusicianSearch from '../../screens/MusicianSearch';
import GroupSearchScreen from '../../screens/GroupSearchScreen';
import { bottomTabStyles } from './BottomTab.style';
import ProfileScreen from '../../screens/ProfileScreen';

const ProfileStack = createStackNavigator();
const GroupStack = createStackNavigator();


const Tab = createBottomTabNavigator();
const { backgroundStyle } = bottomTabStyles;

const Profile = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            component={ ProfileCreateScreen }
            name="ProfileCreate"
        />
        <ProfileStack.Screen
            component={ ProfileScreen }
            name="Profile"
        />

    </ProfileStack.Navigator>
);
const Group = () => (
    <GroupStack.Navigator>
        <GroupStack.Screen
            component={ ProfileCreateScreen }
            name="GroupCreate"
        />
        <GroupStack.Screen
            component={ ProfileScreen }
            name="Group"
        />

    </GroupStack.Navigator>
);

export class BottomTabs extends PureComponent {
    render() {
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
                <Tab.Screen name='Profile' component={Profile}/>
                <Tab.Screen name='Group' component={Group} />
                <Tab.Screen name='GroupSearch' component={GroupSearchScreen} />
                <Tab.Screen name='MusicianSearch' component={MusicianSearch} />

            </Tab.Navigator>
        );
    }
}
export default BottomTabs;

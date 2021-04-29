import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { PureComponent } from 'react';
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
import ProfileScreen from '../../screens/ProfileScreen';
import MusicianSearch from '../../screens/MusicianSearch';
import GroupSearchScreen from '../../screens/GroupSearchScreen';
import {bottomTabStyles} from './BottomTab.style';

const Tab = createBottomTabNavigator();
const {backgroundStyle} = bottomTabStyles;

export class BottomTabs extends PureComponent {
    render() {
        return (

            <Tab.Navigator
                style= {{...backgroundStyle}}
                tabBarOptions= {{ showLabel: false, style:backgroundStyle }}
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
                        return <Image source={ iconName }/>;
                    }
                })}
            >
                <Tab.Screen name='Profile' component={ProfileScreen}/>
                <Tab.Screen name='Group' component={GroupScreen} />
                <Tab.Screen name='GroupSearch' component={GroupSearchScreen} />
                <Tab.Screen name='MusicianSearch' component={MusicianSearch} />

            </Tab.Navigator>
        );
    }
}
export default BottomTabs;

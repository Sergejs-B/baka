/* eslint-disable import/no-cycle */
import { NavigationContainer } from '@react-navigation/native';
import React, { PureComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import BottomTabs from '../BottomTab/BottomTab.component';


export class Navigator extends PureComponent {
    render() {
        console.log(this.props);
        const Stack = createStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="BottomTabs" screenOptions= {{ headerShown: false }}>
                    <Stack.Screen name="BottomTabs" component={BottomTabs}/>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Navigator;

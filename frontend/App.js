import { NavigationContainer } from '@react-navigation/native';

import {
    StatusBar, SafeAreaView, StyleSheet, Platform
} from 'react-native';
import React, { PureComponent } from 'react';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Navigator from './components/Navigation/Navigation.component';

class App extends PureComponent {
    render() {
        return (
            <Navigator/>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

export default App;

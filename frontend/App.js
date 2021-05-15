import {
    StatusBar, SafeAreaView, StyleSheet, Platform
} from 'react-native';
import React, { PureComponent } from 'react';
import Navigator from './components/Navigation/Navigation.component';

class App extends PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Navigator/>
            </SafeAreaView>
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

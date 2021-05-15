import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class CustomPicker extends Component {
    state = { item: '' }
    updateUser = (item) => {
        this.setState({ item });
    }
    render() {
        return (
            <View style={{
                height: 50, width: '100%', marginTop: 60, borderWidth: 2, borderRadius: 7
            }}>
                <Picker style={{ height: 50, width: '100%', borderWidth: 2 }} r>
                    <Picker.Item label = "Steve" value = "steve" />
                    <Picker.Item label = "Ellen" value = "ellen" />
                    <Picker.Item label = "Maria" value = "maria" />
                </Picker>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
});

import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
    greenButtonStyle: {
        height: 50,
        justifyContent: 'center',
        borderRadius: 7,
        alignSelf: 'center',
        width: '90%',
        borderWidth: 2,
        margin: 15,
        backgroundColor: 'rgba(142, 216, 101, 1)'
    },
    whiteButtonStyle: {
        height: 50,
        justifyContent: 'center',
        borderRadius: 7,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 2,
        margin: 15
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    smallButton: {
        width: '45%',
        borderWidth: 2,
        borderRadius: 7,
        backgroundColor: 'white'
    }
});

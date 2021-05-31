import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTH_TOKEN = 'auth_token';
export const USER = 'user';

export const setAuthorizationToken = async (token) => {
    try {
        await AsyncStorage.setItem(AUTH_TOKEN, token);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
};

export const deleteAuthorizationToken = async () => {
    try {
        await AsyncStorage.removeItem(AUTH_TOKEN);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
};

// eslint-disable-next-line consistent-return
export const getAuthorizationToken = async () => {
    try {
        return AsyncStorage.getItem(AUTH_TOKEN);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
};

export const setUserData = async (user) => {
    try {
        await AsyncStorage.setItem(USER, JSON.stringify(user));
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
};

export const deleteUserData = async () => {
    try {
        await AsyncStorage.removeItem(USER);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
};

// eslint-disable-next-line consistent-return
export const getUserData = async () => {
    try {
        return JSON.parse(await AsyncStorage.getItem(USER));
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
};

export const isSignedIn = async () => !!(await getAuthorizationToken());

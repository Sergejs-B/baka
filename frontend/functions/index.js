import axios from 'axios';
import { isSignedIn, getAuthorizationToken } from './AsyncStrorage';

const authorizationData = async () => {
    const signedIn = await isSignedIn();

    if (signedIn) {
        return { headers: { Authorization: `Bearer ${ await getAuthorizationToken() }` } };
    }

    return {};
};

export const REACT_BACKENDAPI_URL = 'https://5bc6435c321b.ngrok.io';

class API {
    async post(url, data) {
        return axios.post(
            `${ REACT_BACKENDAPI_URL }${ url }`,
            data,
            await authorizationData()
        );
    }

    async get(url) {
        return axios.get(
            `${ REACT_BACKENDAPI_URL }${ url }`,
            await authorizationData()
        );
    }

    async delete(url) {
        return axios.delete(`${ REACT_BACKENDAPI_URL }${ url }`, await authorizationData());
    }

    async put(url, data) {
        return axios.put(`${ REACT_BACKENDAPI_URL }${ url }`, data, await authorizationData());
    }
}

export default new API();

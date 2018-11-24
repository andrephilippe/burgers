import axios from 'axios';
import store from '../resources/store';
import toastr from 'toastr';
import { SHOW_LOADER, HIDE_LOADER } from '../redux/constants/loader.constants';
import { getBaseApi } from './config';

const handleSuccess = response => {
    store.dispatch({ type: HIDE_LOADER });
}

const handleError = err => {
    toastr.error(err.message ? err.message === 'Network Error' ?
        'Opssss, provavelmente não encontramos o seu back-end. Tente executar a aplicação com o comando npm run dev' : err.message
        : err);
    store.dispatch({ type: HIDE_LOADER });
}

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        store.dispatch({ type: SHOW_LOADER });
        axios.post(getBaseApi() + url, data).then(response => {
            handleSuccess(response);
            resolve(response.data);
        }, err => {
            handleError(err);
            reject(err.response ? err.response.data : 'Erro');
        });
    });
}

export const put = (url, data) => {
    return new Promise((resolve, reject) => {
        store.dispatch({ type: SHOW_LOADER });
        axios.put(getBaseApi() + url, data).then(response => {
            handleSuccess(response);
            resolve(response.data);
        }, err => {
            handleError(err);
            reject(err.response ? err.response.data : 'Erro');
        });
    });
}

export const get = (url) => {
    return new Promise((resolve, reject) => {
        store.dispatch({ type: SHOW_LOADER });
        axios.get(getBaseApi() + url).then(response => {
            handleSuccess(response);
            resolve(response.data);
        }, err => {
            handleError(err);
            reject(err.response ? err.response.data : 'Erro');
        });
    });
}
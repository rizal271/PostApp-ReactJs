import axios from 'axios';

const url = 'https://appposnew.herokuapp.com';
// const url = 'http://localhost:8000';

export const postEmail = (data) => {
    return {
        type: 'POST_EMAIL',
        payload: axios.post(`${url}/send/`, data)
    }
};
import axios from 'axios';
const instance = axios.create({
    baseURL:'https://tinder-backend-clone-ckm.herokuapp.com'
});

export default instance;

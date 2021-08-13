import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `https://expressresttest.herokuapp.com/`
    })
}
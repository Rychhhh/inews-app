import axios from 'axios';

const api = process.env.REACT_APP_INEWS_API_KEY

export const fetchLastArticle = async () => {
    try {
        const { data : { data } } = await axios.get(api);

        return data;
    } catch (error) {
        return error;
    }
}

export const fetchInternArticle = async () => {
    try {
        const response = await axios.get(`${api}internasional`);

        return response;
    } catch (error) {
        return error;
    }
}
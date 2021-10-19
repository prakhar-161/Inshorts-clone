const axios = require('axios');
const URL = 'http://localhost/5000';

const getNews = async () => {
    try {
        return await axios.get(`${URL}/news`);
    } catch (error) {
        console.log('error while calling getNews api',error);
    }
};  

module.exports = getNews;
const News = require('../models/newsSchema.js'); 

const getNews = async (request,response) => {
    try {
        let data = await News.find({});

        response.status(200).json(data);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
};

module.exports = getNews;
const News = require('../models/newsSchema.js'); 

const getNews = async (request,response) => {
    try {
        const size = Number(request.query.size);
        const skip = Number(request.query.page);

        let data = await News.find({}).limit(size).skip(size * skip);

        response.status(200).json(data);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
};

module.exports = getNews;
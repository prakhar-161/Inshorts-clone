const data = require('./constants/data.js');
const News = require('./models/newsSchema.js');

const DefaultData = async () => {
    try {
        await News.deleteMany({});
        await News.insertMany(data);

        console.log('data imported');
    } catch (error) {
        console.log('error',error.message);
    }
};  

module.exports = DefaultData;
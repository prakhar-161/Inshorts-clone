import { useEffect, useState } from "react"
import { getNews } from "../service/api";

import Article from "./Article";

const Articles = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        dailyNews();
    }, []);

    const dailyNews = async () => {
        let response =  await getNews();
        //when we get data from api call(api.js), we store it in news car in useState through getNews method.
        setNews(response.data);
        console.log(response);
        // console.log(response.data);
    };


    return (
        // looping through the news to display
        news.map(article => (
            <Article article={article} />
        ))
    )
}

export default Articles

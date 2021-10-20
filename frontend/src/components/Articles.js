import { useEffect, useState } from "react"
import { getNews } from "../service/api";
import InfiniteScroll from 'react-infinite-scroll-component';

import Article from "./Article";

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        dailyNews();
    }, [page]);

    const dailyNews = async () => {
        let response =  await getNews(page);
        //when we get data from api call(api.js), we store it in news car in useState through getNews method.
        setNews([...news, ...response.data]);       //combining new data from api call to old data
        // console.log(response);
        // console.log(response.data);
    };


    return (
        // looping through the news to display
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
        {
            news?.length > 0 && news.map(article => (
                <Article article={article} />
            ))
        }
        </InfiniteScroll>
    )
}

export default Articles

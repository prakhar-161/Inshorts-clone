import { useEffect } from "react"
import { getNews } from "../service/api";

const Articles = () => {

    useEffect(() => {
        dailyNews();
    }, []);

    const dailyNews = async () => {
        let data =  await getNews();
        console.log(data);
    };


    return (
        <p>hello</p>
    )
}

export default Articles

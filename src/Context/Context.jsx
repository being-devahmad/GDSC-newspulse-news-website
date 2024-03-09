import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);

    // Fetch news data and update the state
    const getNewsData = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=87e3395bfeac484983350246ab27aa3e")
        const data = await response.json()
        const newsWithIds = data.articles.map(article => ({ ...article, id: uuidv4() }));
        console.log(newsWithIds)
        setNews(newsWithIds)
        // console.log(data.articles);
        // setNews(data.articles)
    }

    useEffect(() => {
        getNewsData()
    }, [])


    return (
        <NewsContext.Provider value={{ news }}>
            {children}
        </NewsContext.Provider>
    );
};

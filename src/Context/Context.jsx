import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);

    // Fetch news data and update the state
    const getNewsData = async () => {
        try {
            const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_397457303c257d57c812cc4ef444cbfd67f7d&q=news&country=pk&category=sports,technology,politics")
            const data = await response.json()
            const newsWithIds = data.results.map(article => ({ ...article, id: uuidv4() }));
            console.log(newsWithIds)
            setNews(newsWithIds)
        } catch (error) {
            console.log(error)
        }
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

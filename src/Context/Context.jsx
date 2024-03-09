import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);

    // Fetch news data and update the state
    const getNewsData = async () => {
        try {
            const response = await axios("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=87e3395bfeac484983350246ab27aa3e")
            const data = response.data
            const newsWithIds = data.articles.map(article => ({ ...article, id: uuidv4() }));
            console.log(newsWithIds)
            setNews(newsWithIds)
            // console.log(data.articles);
            // setNews(data.articles)
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

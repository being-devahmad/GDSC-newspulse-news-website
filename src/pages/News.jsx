import React from 'react';
import { Link } from 'react-router-dom';
import { useNewsContext } from '../Context/Context';

const News = () => {
    const { news } = useNewsContext();

    // Generate unique IDs for each news item using timestamps
    // const generateUniqueId = () => {
    //     return Date.now().toString();
    // };

    return (
        <>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-10'>
                    {news.map((val, index) => {
                        // const newsId = generateUniqueId(); // Generate unique ID for each news item
                        return (
                            <div className="bg-white border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700" key={val.id}>
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-60" src={val.urlToImage} alt={val.urlToImage} />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{val.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        <span className='font-bold'>Source :</span> {val.source.name}
                                    </p>
                                    <p className="mb-3 text-gray-700 dark:text-gray-400">
                                        <span className='font-bold'>Author :</span> {val.author}
                                    </p>
                                    <Link to={`/news/${val.id}`} className="border my-4 border-blue-800 shadow-lg rounded-md px-4 py-2 text-sm bg-white text-[#393280]">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default News;

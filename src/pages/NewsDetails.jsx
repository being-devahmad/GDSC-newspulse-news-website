import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNewsContext } from "../Context/Context";
import { IoArrowBack } from "react-icons/io5";

const NewsDetails = () => {
    const { news } = useNewsContext();
    const { id } = useParams();
    const singleNews = news.find(newsItem => newsItem.id === id)
    if (!singleNews) {
        return <div>no record found</div>
    }
    return (
        <div className="flex md:flex-nowrap flex-wrap mt-5 gap-9 lg:mx-36 md:mx-24 mx-8">
            <div className="h-screen">
                <Link to={singleNews?.link}>
                    <img
                        src={singleNews?.image_url}
                        alt="Laptop"
                        className=" rounded-md h-96 w-[2500px]"
                    /></Link>
                <Link to={'/news'}>
                    <p className="text-2xl mt-4">
                        <IoArrowBack />
                    </p>
                </Link>
            </div>
            <div className="flex justify-start flex-col">
                <h1 className="font-bold text-3xl pb-5">{singleNews?.title}</h1>
                <h2 className="font-bold text-2xl pt-2">Description:</h2>
                <p className="text-lg">{singleNews?.description}</p>
                <h1 className="text-lg pt-2">
                    <span className="font-bold text-xl">Country: </span>
                    {singleNews?.country}
                </h1>
                <h1 className="text-lg pt-2">
                    <span className="font-bold text-xl">Category: </span>
                    {singleNews?.category[0]}
                </h1>
                <h1 className="text-lg pt-2">
                    <span className="font-bold text-xl">Published At: </span>
                    {singleNews?.pubDate}
                </h1>
                <h1 className="text-lg pt-2">
                    <span className="font-bold text-xl">Language: </span>
                    {singleNews?.language}
                </h1>
            </div>
        </div>
    );
};

export default NewsDetails;

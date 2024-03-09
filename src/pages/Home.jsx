import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="lg:flex items-center justify-between pt-9 bg-gradient-to-r from-orange-100 from-10% to-white to-10% ">
            <div className="lg:px-12 px-4 py-12 lg:w-1/2">
                <h1 className="text-[#393280] font-semibold text-[60px]">
                    NewsPulse
                </h1>
                <p className="leading-7" style={{ color: "rgba(57, 50, 128, 0.80)" }}>
                    Introducing "NewsPulse: Your Daily Briefing" - your go-to destination for staying informed and empowered in today's fast-paced world. With NewsPulse, you can access breaking news, in-depth analysis, and thought-provoking insights at your fingertips. Our intuitive interface delivers curated content tailored to your interests, ensuring you're always up-to-date on the latest developments.
                </p>
                <Link to="/news">
                    <button
                        type="button"
                        className="border my-4 border-blue-800 shadow-lg rounded-md px-4 py-2 text-sm bg-white text-[#393280]"
                    >
                        Explore Now{" "}
                        <span>
                            <i
                                className="fa-solid fa-arrow-right fa-beat px-1"
                                style={{ color: "#393280" }}
                            ></i>
                        </span>
                    </button>
                </Link>
            </div>
            <div className="relative flex justify-end">
                <img
                    className="lg:w-[713px] w-full mr-2 lg:h-[607px] h-[600px] ps-4 flex-shrink-0"
                    // src={HeroImg}
                    src="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_960_720.jpg"
                    alt="Hero Image"
                />
            </div>
        </div>
    );
}

export default Home;
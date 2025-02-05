import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/news")
            .then(response => setNews(response.data.articles))
            .catch(error => console.error("Error fetching news:", error));
    }, []);

    return (
        <div>
            <h2>Live News</h2>
            <div className="news-container"> {/* Correct grid container */}
                {news.map((article, index) => (
                    <div className="news-card" key={index}> {/* Each news item as a card */}
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList;

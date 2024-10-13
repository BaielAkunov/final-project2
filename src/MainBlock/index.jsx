import React, { useEffect, useState } from 'react';
import axios from 'axios';
import css from './MainBlock.module.css'




const MainBlock = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=00ad7c41e9e84719b85c33a7e3c47de4')
            .then(response => {
                setNews(response.data.articles);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul className={css.block}>
            {news.map((article, index) => {
               return ( <a href={article.url} target="_blank" rel="noopener noreferrer"><li  key={article.url || index} className={css.elements}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </li></a>)
            })}
        </ul>
    );
}

export {MainBlock} ;



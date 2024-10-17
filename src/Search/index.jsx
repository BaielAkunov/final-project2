import React, { useState, useEffect, useCallback } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Card, message } from 'antd';
import axios from 'axios';
import debounce from 'lodash.debounce';
import 'react-lazy-load-image-component/src/effects/blur.css';

const { Meta } = Card;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(
    debounce((query) => {
      setLoading(true);
      setError(null);
      axios
        .get(`https://newsapi.org/v2/everything?q=${query}&apiKey=00ad7c41e9e84719b85c33a7e3c47de4`)
        .then((response) => {
          setNewsData(response.data.articles);
          setLoading(false);
        })
        .catch((error) => {
          setError('Error fetching the news');
          setLoading(false);
        });
    }, 500),
    []
  );

  useEffect(() => {
    if (searchQuery) {
      fetchNews(searchQuery);
    }
  }, [searchQuery, fetchNews]);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <div style={{ padding: '10px' }}>
      <Search
        placeholder="Search for news"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={handleSearch}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            handleSearch(event.target.value);
          }
        }}
      />
      <p></p>
      <p></p>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {searchQuery === '' && (
          <div style={{ width: '100%', textAlign: 'center', padding: '20px' }}>
            <img src="https://via.placeholder.com/240" alt="Default" style={{ margin: '10px' }} />
            <img src="https://via.placeholder.com/240" alt="Default" style={{ margin: '10px' }} />
            <img src="https://via.placeholder.com/240" alt="Default" style={{ margin: '10px' }} />
          </div>
        )}
        {newsData.map((item, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 240 }}
            cover={<img alt={item.title} src={item.urlToImage || 'https://via.placeholder.com/240'} />}
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export { SearchBar };



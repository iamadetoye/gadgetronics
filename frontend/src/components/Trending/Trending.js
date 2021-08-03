import React from 'react';
import data from '../../data';
import { Heading, TrendingBox, TrendBox, TrendsBox } from './Trending.styles';

const Trending = () => {
  return (
    <TrendingBox>
      <Heading>
        <h2>Trending</h2>
      </Heading>
      <TrendsBox>
        {data.trends.map((trendBox) => (
          <TrendBox key={trendBox._id}>
            <img src={trendBox.imageUrl} alt={trendBox.title} />
            <span> {trendBox.title}</span>
          </TrendBox>
        ))}
      </TrendsBox>
    </TrendingBox>
  );
};

export default Trending;

// border: 2px solid rgba(0, 0, 58, 0.15);

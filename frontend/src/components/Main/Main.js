import React from 'react';
import data from '../../data';
import { Wrapper } from '../../pages/HomePage/HomePage.styles';
import Hero from '../Hero/Hero';
import Trending from '../Trending/Trending';
import { MainBox } from './Main.styles';

const Main = () => {
  return (
    <MainBox>
      <Hero slides={data.heroBoxes} />
      <Wrapper>
        <Trending />
      </Wrapper>
    </MainBox>
  );
};

export default Main;

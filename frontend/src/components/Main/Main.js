import React from 'react';
import { Wrapper } from '../../pages/HomePage/HomePage.styles';
import Hero from '../HeroSection/Hero/Hero';
import SideBoxes from '../HeroSection/SideBoxes/SideBoxes';
import Trending from '../Trending/Trending';
import { MainBox } from './Main.styles';

const Main = () => {
  return (
    <MainBox>
      <Wrapper>
        <Hero />
        <SideBoxes />
      </Wrapper>
      <Wrapper>
        <Trending />
      </Wrapper>
    </MainBox>
  );
};

export default Main;

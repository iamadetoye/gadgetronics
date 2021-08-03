import React from 'react';
import data from '../../../data';
import { HeroBoxes, HeroBox, ItemsWrapper, ImageWrapper } from './Hero.styles';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <HeroBoxes>
      {data.heroBoxes.map((heroBox) => (
        <HeroBox key={heroBox._id}>
          <ItemsWrapper>
            <div>
              <Icon icon={heroBox.brandIcon} />
              {heroBox.brandName}
            </div>
            <h1>
              {heroBox.heroText}
              <span>{heroBox.span}</span>
            </h1>
            <a href={heroBox.buttonLink}>{heroBox.buttonLabel}</a>
          </ItemsWrapper>
          <ImageWrapper>
            <img src={heroBox.imageUrl} alt={heroBox.brandName} />
          </ImageWrapper>
        </HeroBox>
      ))}
    </HeroBoxes>
  );
};

export default Hero;

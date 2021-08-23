import React, { useEffect, useRef, useState } from 'react';
import data from '../../data';
import {
  HeroDiv,
  HeroBox,
  SideBoxes,
  ItemsWrapper,
  ImageWrapper,
  HeroBoxes,
  SideBox,
  ItemsContainer,
  ImageContainer,
  ArrowBoxes,
  RightArrowBox,
  LeftArrowBox,
  Slide,
} from './Hero.styles';
import { Icon } from '@iconify/react';

const Hero = ({ slides }) => {
  // //////////////

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array(slides) || slides.length <= 0) {
    return null;
  }

  // ////////////////

  return (
    <HeroDiv>
      <HeroBoxes>
        {slides.map((heroBox, index) => (
          <Slide key={heroBox._id}>
            {index === current && (
              <HeroBox>
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
            )}
          </Slide>
        ))}
        {/* {data.heroBoxes.map((heroBox) => (
          <HeroBox key={heroBox._id}>
            {heroBox._id === currentHero && (
              <Slider>
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
              </Slider>
            )}
          </HeroBox>
        ))} */}
        <ArrowBoxes>
          <LeftArrowBox onClick={prevSlide}>
            <Icon icon="fluent:arrow-left-12-filled" />
          </LeftArrowBox>
          <RightArrowBox onClick={nextSlide}>
            <Icon icon="fluent:arrow-right-12-filled" />
          </RightArrowBox>
        </ArrowBoxes>
      </HeroBoxes>

      <SideBoxes>
        {data.sideBoxes.map((sideBox) => (
          <SideBox key={sideBox._id}>
            <ItemsContainer>
              <div>
                <Icon icon={sideBox.brandIcon} />
                <h5>{sideBox.brandName}</h5>
              </div>
              <h3>{sideBox.title}</h3>
              <a href={sideBox.buttonLink}>{sideBox.buttonLabel}</a>
            </ItemsContainer>
            <ImageContainer>
              <img src={sideBox.imageUrl} alt={sideBox.brandName} />
            </ImageContainer>
          </SideBox>
        ))}
      </SideBoxes>
    </HeroDiv>
  );
};

export default Hero;

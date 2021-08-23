import styled from 'styled-components';
// import { GlobalStyles } from '../../globalStyles';
// GlobalStyles

export const ImageContainer = styled.div`
  height: fit-content;

  img {
    height: 10rem;
    width: 12rem;
  }
`;

export const HeroDiv = styled.div`
  min-height: 40rem;
  max-width: 120rem;
  margin: 0 auto 3rem;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: max-content 18.5rem;
  grid-gap: 3rem;

  @media only screen and (max-width: 750px) {
    height: fit-content;
    grid-template-rows: repeat(2, max-content);
  }
`;

export const HeroBoxes = styled.div`
  grid-column: 1/9;
  grid-row: 1/-1;
  display: flex;
  position: relative;
  height: 40rem;

  @media only screen and (max-width: 1024px) {
    grid-column: 1/13;
    grid-row: 1/2;
  }
  @media only screen and (max-width: 750px) {
    position: relative;
    width: 100vw;
    min-height: 60rem;
    height: calc(100vh - 6rem);
    max-height: 75rem;
  }
`;
export const HeroBox = styled.div`
  background-color: var(--color-hero-bg);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;

  border-radius: 1rem;

  display: flex;

  @media only screen and (max-width: 750px) {
    display: block;
    grid-template-rows: repeat(2, max-content);
    border-radius: 0;
    width: 100vw;
  }
`;

export const Slide = styled.div`
  background-color: violet;
  /* height: 100%; */
`;
export const ItemsContainer = styled.div`
  div {
    display: flex;
    gap: 0.1rem;
    padding-top: 3rem;
    align-items: center;

    h5 {
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
  h3 {
    font-family: var(--font-heading);
    font-weight: 900;
    margin: 1.5rem 0;
    font-size: 2rem;
  }
  a {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-brand);

    &:hover {
      color: var(--color-brand-dark);
      text-decoration: underline;
    }
  }
`;

export const ItemsWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 3rem;

  h1 {
    font-size: calc(32px + (48 - 32) * ((100vw - 375px) / (1300 - 375)));
    /* font-size: clamp(3.2rem, 80vw, 4.8rem); */

    font-weight: 900;
    font-family: var(--font-heading);
    white-space: nowrap;
  }
  span {
    font-weight: 400;
    font-size: 1.6rem;

    font-size: calc(14px + (17 - 14) * ((100vw - 375px) / (1300 - 375)));

    font-style: normal;
    white-space: pre-wrap;
    display: block;
    margin: 1rem 0;
    font-family: var(--font-primary);
  }
  a {
    border-radius: 2rem;
    background-color: var(--color-brand);
    font-weight: 700;
    margin-top: 1rem;
    padding: 1rem 2.5rem;
    width: fit-content;
    color: var(--color-fixed-white);
    font-size: 1.6rem;

    &:hover {
      background-color: var(--color-brand-dark);
    }
  }

  @media only screen and (max-width: 750px) {
    padding: 3rem;
    text-align: center;
    min-height: 40vh;
    height: fit-content;

    max-height: 50rem;
    width: calc(100vw - 6rem);
    ///////////////

    a {
      margin: 0 auto;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  object-position: bottom;
  margin-top: auto;
  margin-bottom: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }

  @media only screen and (max-width: 750px) {
    display: block;
    height: fit-content;
    width: fit-content;
    margin: 0 auto;
    z-index: 10000;

    img {
      width: 35rem;
      height: 35rem;
    }
  }
`;

export const SideBoxes = styled.div`
  grid-column: 9/13;
  grid-row: 1/-1;
  display: flex;

  gap: 3rem;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    grid-column: 1/-1;
    grid-row: 2/-1;
    flex-direction: row;

    div {
      /* width: 100%; */
    }
  }

  @media only screen and (max-width: 750px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    position: relative;
    margin: 0 2rem;
    min-height: 40rem;
    height: fit-content;
    /* background-color: #5e0080; */
  }
`;

export const SideBox = styled.div`
  h3 {
    font-size: 1.8rem;
  }
  border-radius: 1rem;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;

  background-color: var(--color-white);
  box-shadow: 0 0 2px var(--color-grey-light);

  //////////////////////
  &:first-of-type {
    padding-left: 2rem;
  }
  &:last-of-type {
    flex-direction: row-reverse;

    padding-right: 2rem;

    div:last-of-type {
      margin-top: auto;
    }
  }

  &:hover {
    box-shadow: 0 1px 5px var(--color-hero-bg);
    background: var(--color-hover-bg);
  }

  @media only screen and (max-width: 750px) {
    /* height: 20rem; */
    width: 100%;
    /* display: block; */
    /* background-color: green; */
  }
`;

export const ArrowBoxes = styled.div`
  display: none;
  @media only screen and (max-width: 750px) {
    position: absolute;
    width: 100%;
    justify-content: space-between;
    display: flex;
    /* width: calc(100vw - 6rem); */
    user-select: none;
    cursor: pointer;
    top: 40%;

    margin: 0 auto;
    padding: 0 2rem;
    gap: 1rem;

    div {
      height: 4.5rem;
      width: 4.5rem;
      color: white;
      background-color: var(--color-brand);
      opacity: 0.5;
      border-radius: 05rem;
      svg {
        padding: 1rem;
        height: 100%;
        width: 100%;
      }

      &:hover {
        background-color: var(--color-brand-dark);
        transform: scale(1.05);
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
`;
export const RightArrowBox = styled.div``;
export const LeftArrowBox = styled.div``;

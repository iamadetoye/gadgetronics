import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(12, 1fr);
  /* grid-gap: 10px; */
  align-content: space-evenly;
  max-width: 1200px;
  margin: auto;
  height: 100%;
`;
export const InfoHeading = styled.div`
  text-transform: uppercase;
  /* text-align: center; */
  height: 3rem;
  font-weight: 700;
  display: flex;
  p {
    margin: auto;
  }
  a {
    color: var(--color-brand);

    &:hover {
      color: var(--color-brand-dark);
    }
  }
`;
export const Header = styled.header`
  background-color: var(--color-white);
  height: 10rem;
`;

/////////////////
//Search
////////////////////

export const Search = styled.div`
  margin: 0.5rem 0;
  button {
    &:first-of-type {
      grid-column: 1/2;
    }
    &:last-of-type {
      grid-column: 12/13;
    }
  }
  input {
    position: relative;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 1.4rem;
    font-family: inherit;
    font-weight: bolder;
    color: var(--color-grey-dark);

    &:first-of-type {
      grid-column: 2/7;
      margin-right: 0.1rem;
    }
    &:nth-of-type(2) {
      grid-column: 7/12;
      padding-right: 6.5rem;
      margin-left: 0.1rem;
      margin-right: -2rem;
    }
  }
  svg {
    height: 25px;
    width: 25px;
  }
`;

/////////////////
//Main
////////////////////
export const Main = styled.div`
  background-color: var(--color-white);
  height: fit-content;
`;

/////////////////
//Hero
////////////////////
export const HeroSection = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const Hero = styled.div`
  display: block;
  margin: 3rem 0;
  height: 45rem;
  grid-column: 1/9;
  margin-right: 1.5rem;
  background-color: gray;
`;
export const AsideHero = styled.div`
  grid-column: 9/-1;
  display: flex;

  margin: 3rem 0;

  flex-direction: column;
  background-color: green;
  margin-left: 1.5rem;
`;
export const Trending = styled.div``;

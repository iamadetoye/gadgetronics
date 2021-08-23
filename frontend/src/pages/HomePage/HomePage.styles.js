import styled from 'styled-components';

export const Home = styled.div`
  max-width: 200rem;
  margin: 0 auto;
  overflow: hidden;
  background-color: var(--color-light-bg);
`;
export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1200px;
  margin: auto;
  height: 100%;
`;
export const InfoHeading = styled.div`
  text-align: center;
  padding: 1rem 3rem;
  font-weight: 400;
  display: flex;
  p {
    margin: auto;
  }
  a {
    color: var(--color-brand);
    font-weight: 700;

    &:hover {
      color: var(--color-brand-dark);
      text-decoration: underline;
    }
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
  padding-left: 3rem;
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

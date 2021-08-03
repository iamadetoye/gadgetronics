import styled from 'styled-components';

export const HeroBoxes = styled.div`
  height: 40rem;
  grid-column: 1/9;
  display: flex;
  padding: 3rem 0;
  padding-right: 1.5rem;
`;
export const HeroBox = styled.div`
  background-color: #fffa94;

  border-radius: 1rem;
  width: 100%;

  display: flex;
  padding-left: 5rem;
  padding-top: 5rem;
`;

export const ItemsWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 10rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 900;
    font-family: var(--font-heading);

    font-style: italic;
  }
  span {
    font-weight: 400;
    font-size: 1.6rem;
    font-style: normal;

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
    color: var(--color-white);
    font-size: 1.6rem;

    &:hover {
      background-color: var(--color-brand-dark);
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 60%;
  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: bottom;
  }
`;

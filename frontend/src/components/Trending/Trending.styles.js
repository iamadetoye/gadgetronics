import styled from 'styled-components';

export const TrendingBox = styled.div`
  grid-column: 1/13;

  min-height: 40rem;
`;
export const Heading = styled.div`
  h2 {
    display: flex;
    flex-direction: row;
    text-align: center;
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 2.4rem;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  h2::before,
  h2::after {
    content: '';
    flex: 1;
    border-bottom: 0.5rem solid var(--color-grey-light);
    margin: auto;
  }
`;
export const TrendsBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const TrendBox = styled.div`
  /* background-color: grey; */
  border-radius: 1rem;
  box-shadow: 0px 2px 5px 0 var(--color-grey-light);
  height: 12rem;
  width: 32.5%;
  margin: 0 auto;
  display: flex;
  cursor: pointer;

  span {
    font-weight: 700;
    font-size: 1.8rem;
    margin: auto 1rem;
  }
  img {
    height: 80%;
    width: 40%;
    object-fit: contain;
    object-position: left;
    margin: auto 0;
  }

  &:hover {
    color: var(--color-brand);
    background-color: var(--color-hover-bg);
    box-shadow: 0px 5px 5px 0 var(--color-grey-light);
  }
`;

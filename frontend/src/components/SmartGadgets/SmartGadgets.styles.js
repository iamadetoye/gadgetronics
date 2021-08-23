import styled from 'styled-components';

export const SmartGadgetsBox = styled.section`
  padding: 3rem;
  /* background-color: #008000; */

  @media only screen and (max-width: 970px) {
    padding: 2rem;
  }
`;

export const SmartWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  /* background-color: #f7f; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media only screen and (max-width: 970px) {
    /* background-color: #daa520; */
    grid-template-rows: repeat(2, max-content);
    grid-gap: 1.5rem;
  }
`;

export const SmartHeading = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 2.4rem;
  }
  span {
    width: 85%;

    font-weight: 400;
    font-family: var(--font-primary);
    font-size: calc(14px + (17 - 14) * ((100vw - 375px) / (1300 - 375)));

    display: block;
    margin: 5rem 0;
    
  }
  div {
    display: flex;
    gap: 1.5rem;

    margin-top: auto;

    svg {
      background-color: var(--color-brand);
      border-radius: 50%;
      padding: 1rem;
      cursor: pointer;
      height: 4rem;
      width: 4rem;
      color: var(--color-hover-bg);
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));

      &:hover {
        background-color: var(--color-brand-dark);
        color: var(--color-hover-bg);
        transform: scale(1.02);
      }
    }
  }
  @media only screen and (max-width: 970px) {
    grid-column: 1/-1;
    div {
      display: none;
    }
    h3 {
      font-family: var(--font-heading);
      font-weight: 900;
      font-size: 2.4rem;
    }
    span {
      width: 100%;

      font-weight: 400;
      font-family: var(--font-primary);
      font-size: calc(14px + (17 - 14) * ((100vw - 375px) / (1300 - 375)));

      display: block;
      margin: 2rem 0;
    }
    grid-row: 1/2;
  }
`;

export const SmartBoxes = styled.div`
  grid-column: 4/-1;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-left: 4rem;
  overflow-x: scroll;

  @media only screen and (max-width: 970px) {
    margin-left: 0;
    grid-column: 1/-1;
    grid-row: 2/-1;
  }
`;

export const SmartBox = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 26rem;
  min-width: 22rem;
  height: 30rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 3rem;
  button {
    position: absolute;
    right: 3rem;
    bottom: 3rem;
    border-radius: 2rem;

    svg {
      height: 2rem;
      width: 2rem;
    }

    &:hover {
      background-color: var(--color-brand-dark);
    }
  }
  @media only screen and (max-width: 970px) {
    padding: 2rem;
    button {
      /* right: 2rem;
      bottom: 2rem; */
    }
  }
`;

export const SmartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h4 {
    color: var(--color-grey-light);
    margin-bottom: 1rem;
    font-family: var(--font-heading);
  }
  a {
    color: var(--color-post-footer);
    text-decoration: underline;
    margin-bottom: 1rem;
    font-weight: 700;
    &:hover {
      color: var(--color-brand);
      text-decoration: underline;
    }
  }
  p {
    font-size: 1.8rem;
    font-weight: 900;
    margin-top: 0.8rem;
  }
`;

export const SmartImage = styled.div`
  height: 9rem;
  text-align: center;
  margin-bottom: 3.5rem;
  img {
    height: 14rem;
    width: 13rem;
    object-fit: contain;
    object-position: top;
  }
`;

export const IconBox = styled.div`
  display: none;
  @media only screen and (max-width: 970px) {
    display: flex;
    gap: 0.5rem;

    svg {
      height: 4rem;
      width: 4rem;
      padding: 0.75rem;
      background-color: var(--color-brand);
      border-radius: 50%;
      color: var(--color-fixed-white);
      cursor: pointer;

      &:hover {
        background-color: var(--color-brand-dark);
        transform: scale(1.05);
      }
    }
  }
`;

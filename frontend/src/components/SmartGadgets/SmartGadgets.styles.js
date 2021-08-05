import styled from 'styled-components';

export const SmartGadgetsBox = styled.section`
  padding: 3rem 0; /* height: 150px; */
  overflow: hidden;
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
    font-size: 1.8rem;
    width: 85%;

    font-weight: 400;
    font-family: var(--font-primary);

    display: block;
    margin: 5rem 0;
  }
  div {
    display: flex;
    gap: 1.5rem;

    margin-top: auto;

    svg {
      background-color: var(--color-white);
      border-radius: 50%;
      padding: 1rem;
      cursor: pointer;
      height: 4rem;
      width: 4rem;
      color: var(--color-grey-light-2);
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));

      &:hover {
        color: var(--color-brand);
        background-color: var(--color-hover-bg);
      }
    }
  }
`;

export const SmartBoxes = styled.div`
  grid-column: 4/-1;
  display: flex;
  justify-content: space-between;
  padding-left: 4rem;
`;

export const SmartBox = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 26rem;
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

export const IconBox = styled.div``;

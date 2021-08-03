import styled from 'styled-components';

export const SmartGadgetsBox = styled.section`
  padding: 3rem 0; /* height: 150px; */
  overflow: hidden;
`;

export const SmartHeading = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: column;

  /* background-color: whitesmoke; */

  h3 {
    font-family: var(--font-heading);
    font-weight: 900;
  }
  span {
    /* font-size: 1.6rem; */
    font-weight: normal;
    font-family: var(--font-primary);

    display: block;
    margin: 4rem 0;
  }
  div {
    display: flex;
    gap: 1.5rem;

    margin-top: auto;

    svg {
      background-color: var(--color-white);
      border-radius: 50%;
      padding: 1.2rem;
      height: 5rem;
      width: 5rem;
      color: var(--color-grey-light-2);
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));

      &:hover {
        color: var(--color-brand);
        background-color: var(--color-grey-light);
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
  background-color: var(--color-white);
  width: 26rem;
  height: 30rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 3rem;
`;

export const SmartDetails = styled.div`
  width: 80%;
`;

export const SmartImage = styled.div`
  height: 12rem;
  text-align: center;
  img {
    height: 12rem;
    width: fit-content;
    object-fit: contain;
  }
`;

export const IconBox = styled.div``;

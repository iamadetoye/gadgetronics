import styled from 'styled-components';

/////////////////
//Search
////////////////////

export const SearchContainer = styled.div`
  margin: 0.5rem 0;
  padding: 0 3rem;

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
    color: var(--color-grey-light-2);
    background: var(--color-white);
    height: 4.2rem;
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

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

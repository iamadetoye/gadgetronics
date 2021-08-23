import styled from 'styled-components';

export const SubscribeBox = styled.div`
  background-color: var(--color-subscribe);
  color: var(--color-fixed-white);
  padding: 3rem;

  @media only screen and (max-width: 900px) {
    padding: 2rem;
  }
`;

export const SubWrapper = styled.div`
  /* background-color: indigo; */

  max-width: 120rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;

  p {
    grid-column: 1/6;
  }

  form {
    display: flex;
    grid-column: 8/13;
    justify-content: space-between;
  }
  button:hover {
    background-color: var(--color-brand-dark);
    transform: scale(1.03);
  }

  @media only screen and (max-width: 796px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media only screen and (max-width: 690px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    grid-gap: 1.5rem;
    p {
      grid-row: 1/2;
      grid-column: 1/-1;
      text-align: center;
    }
    form {
      grid-row: 2/-1;
      grid-column: 1/-1;
    }
  }
`;

export const InputEmail = styled.input`
  /* grid-column: 9/11; */
  width: 100%;
  background-color: transparent;
  /* padding: 1rem; */
  font-size: 1.6rem;
  font-family: inherit;
  color: var(--color-grey-light);
  border: none;
  border-bottom: 0.2rem solid var(--color-grey-light);
  outline: none;
  margin-right: 2rem;
`;

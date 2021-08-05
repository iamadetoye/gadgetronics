import styled from 'styled-components';

export const SubscribeBox = styled.div`
  background-color: var(--color-subscribe);
  color: var(--color-white);
  padding: 3rem 0;

  p {
    grid-column: 1/5;
  }

  form {
    display: flex;
    grid-column: 8/13;
    justify-content: space-between;

    /* height: 100%; */
  }
  button:hover {
background-color: var(--color-brand-dark);
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

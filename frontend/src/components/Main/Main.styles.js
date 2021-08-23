import styled from 'styled-components';

export const MainBox = styled.section`
  padding: 3rem;
  padding-bottom: 3rem;
  background-color: var(--color-white);
  /* max-width: 120rem; */
  margin: 0 auto;

  @media only screen and (max-width: 750px) {
    padding: 0;
    padding-bottom: 1.5rem;
  }
`;

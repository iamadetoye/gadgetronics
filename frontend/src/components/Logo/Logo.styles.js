import styled from 'styled-components';

export const LogoBox = styled.div`
  grid-column: 1/4;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 10px;
  /* overflow: hidden; */

  p {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 2.8rem;
  }
  span {
    font-size: 1.4rem;
    color: var(--color-grey-light);
  }
`;
export const LogoDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

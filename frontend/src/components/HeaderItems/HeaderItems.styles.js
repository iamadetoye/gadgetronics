import styled from 'styled-components';

export const HeaderItemsBox = styled.div`
  grid-column: 5/13;
  display: flex;
  justify-content: space-between;
`;
export const HeaderItem = styled.div`
  display: flex;
  gap: 1rem;
    span {
        font-weight: 700;
        color: var(--color-grey-light);
        font-size: 1.2rem;


    }
    p {
        font-weight: 900;
        font-size: 1.6rem;
    }


  &:hover {
    cursor: pointer;
    svg,
    p {
      color: var(--color-brand-dark);
    }
  }

  &:first-of-type {
  }

  &:nth-of-type(2) {
  }
  &:last-of-type {
  }
`;

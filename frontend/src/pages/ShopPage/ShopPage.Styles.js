import styled, { css } from 'styled-components';

const shopLeftLinkStyles = css`
  :active,
  :link,
  :visited {
    color: var(--color);
  }
`;
const shopLeftItemStyles = css`
  padding: 0.5rem 1.5rem;
  /* background: var(--color-bg-primary); */
  /* margin: 0.5rem 0; */
  cursor: pointer;

  :hover {
    background-color: grey;
  }
`;

export const Shop = styled.div`
  padding: 3rem;
  background: var(--color-white);
`;
export const ShopWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  gap: 3rem;
`;
export const ShopLeft = styled.div``;
export const ShopCategories = styled.div`
  background: var(--color-bg-primary);
  border-radius: 1rem;
  grid-column: 1/5;
  padding: 2rem;
`;
export const ShopBox = styled.div`
  grid-column: 5/-1;
  background: var(--color-white);
  /* background: black; */
`;
export const ShopCat = styled.ul`
  h4 {
    margin: 1rem 0;
  }
`;
export const ShopCatItem = styled.li`
  ${shopLeftItemStyles}
  a {
    ${shopLeftLinkStyles}
  }
`;
export const ShopCatItemLink = styled.a``;
export const ShopTrends = styled.ul`
  h4 {
    margin: 1rem 0;
  }
`;
export const ShopTrendsItem = styled.li`
  ${shopLeftItemStyles}
  a {
    ${shopLeftLinkStyles}
  }
`;
export const ShopTrendsItemLink = styled.a``;

export const ProductList = styled.ul`
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(17rem, 35rem));
`;
export const ProductBox = styled.li`
  height: 30rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background: darkcyan;
  background: var(--color-white);
  box-shadow: 0px 2px 5px 0.1px var(--color-grey-light);

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: inherit;
  }
`;
export const CategoryCardsBox = styled.div`
  height: 100%;
`;
export const CategoryCard = styled.div`
  width: 100%;
  min-height: 5rem;
  margin-bottom: 1.5rem;
`;
export const CategoryCardHeading = styled.div`
  background: rgba(78, 23, 101, 0.5);

  padding: 3rem;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--font-heading);
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;

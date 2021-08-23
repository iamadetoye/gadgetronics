import styled from 'styled-components';

export const FooterBox = styled.footer`
  background-color: var(--color-pre-footer);
  color: var(--color-grey-light);
  padding: 3rem;
  padding-bottom: 0;

  min-height: 27rem;
  font-size: 1.4rem;

  h3 {
    width: fit-content;
    font-family: var(--font-heading);
    color: var(--color-fixed-white);
    font-size: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 50%;
      left: 0;
      bottom: 0;
      /* height: 0.3rem; */
      border-bottom: 0.3rem solid var(--color-brand);
    }
  }

  li {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 2rem;
  }
`;

export const WrapFoot = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 120rem;
  margin: 0 auto;
  grid-gap: 2rem;

  @media only screen and (max-width: 950px) {
    grid-template-rows: repeat(2, max-content);
  }
  @media only screen and (max-width: 650px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const BrandItems = styled.ul`
  grid-column: 1/4;
  @media only screen and (max-width: 950px) {
    grid-row: 1/2;
    grid-column: 1/7;
  }
`;
export const QuickLinks = styled.ul`
  grid-column: 5/7;

  li {
    width: fit-content;
    cursor: pointer;

    &:hover {
      color: var(--color-brand);
    }
  }

  @media only screen and (max-width: 950px) {
    grid-row: 1/2;
    grid-column: 7/13;
  }
`;
export const OurApps = styled.ul`
  grid-column: 7/10;

  a img {
    width: 14rem;
    height: 5rem;
    object-fit: contain;
    object-position: center;
  }

  @media only screen and (max-width: 950px) {
    grid-row: 2/3;
    grid-column: 1/7;
  }
`;
export const Contact = styled.ul`
  grid-column: 10/13;

  li {
    width: fit-content;
    cursor: pointer;
    flex-direction: row;

    &:hover {
      color: var(--color-brand);
    }
  }
  svg {
    color: var(--color-brand);
  }

  @media only screen and (max-width: 950px) {
    grid-row: 2/3;
    grid-column: 7/13;
  }
`;

export const Partners = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  svg {
    height: 2rem;
    width: fit-content;
  }
`;
export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  svg {
    background-color: var(--color-brand);
    color: var(--color-fixed-white);
    height: 4rem;
    width: 4rem;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: var(--color-brand-dark);
      color: var(--color-hover-bg);
    }
  }
`;

export const PostFooter = styled.div`
  margin-top: 3rem;
  text-align: center;
  padding: 1rem;
  p,
  a {
    color: var(--color-grey-light-2);
  }

  p {
    margin: 0 auto;
    width: fit-content;
    font-size: 1.4rem;
    font-weight: 700;
  }
  a:hover {
    color: var(--color-brand);

    text-decoration: underline;
  }
`;

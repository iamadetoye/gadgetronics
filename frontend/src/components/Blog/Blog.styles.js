import styled from 'styled-components';

export const BlogSection = styled.section`
  background-color: var(--color-white);
  /* padding: 3rem 0; */

  padding: 3rem;
  /* background-color: #008000; */

  @media only screen and (max-width: 970px) {
    padding: 2rem;
  }
`;

export const BlogWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  /* background-color: #f7f; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media only screen and (max-width: 970px) {
    /* background-color: #daa520; */
    grid-template-rows: repeat(2, max-content);
    grid-gap: 1.5rem;
  }
`;

export const BlogHeading = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 2.4rem;
  }
  span {
    width: 85%;

    font-weight: 400;
    font-family: var(--font-primary);
    font-size: calc(14px + (17 - 14) * ((100vw - 375px) / (1300 - 375)));

    display: block;
    margin: 5rem 0;
  }
  div {
    display: flex;
    gap: 1.5rem;

    margin-top: auto;
  }
  @media only screen and (max-width: 970px) {
    grid-column: 1/-1;
    div {
      display: none;
    }
    h3 {
      font-family: var(--font-heading);
      font-weight: 900;
      font-size: 2.4rem;
    }

    span {
      width: 100%;

      font-weight: 400;
      font-family: var(--font-primary);
      font-size: calc(14px + (17 - 14) * ((100vw - 375px) / (1300 - 375)));

      display: block;
      margin: 2rem 0;
      a {
        color: var(--color-brand);

        &:hover {
          color: var(--color-brand-dark);
          font-weight: 700;
        }
      }
    }

    grid-row: 1/2;
  }
`;

export const BlogPosts = styled.div`
  /* grid-column: 4/-1;
  display: flex;
  justify-content: space-between;
  padding-left: 4rem; */

  grid-column: 4/-1;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-left: 4rem;

  @media only screen and (max-width: 970px) {
    margin-left: 0;
    grid-column: 1/-1;
    grid-row: 2/-1;
    overflow-x: scroll;
  }
`;
export const BlogPost = styled.div`
  background-color: var(--color-white);
  position: relative;
  width: 26rem;
  /* height: fit-content; */
  padding-bottom: 1.5rem;

  img {
    height: 15rem;
    width: 100%;
    min-width: 20rem;
  }
  h4 {
    font-size: 1.7rem;
    margin: 1rem 0;
  }
  a {
    color: var(--color-brand);
    text-decoration: underline;
    font-family: var(--font-heading);
    font-weight: 900;
  }
  span {
    display: block;
    font-size: calc(14px + (17 - 14) * ((100vw - 375px) / (1300 - 375)));
    font-weight: 400;
    color: var(--color-grey-light);
  }
  blockquote {
    font-weight: 400;
    margin-top: 0.5rem;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export const BlogMore = styled.a`
  display: block;
  background-color: var(--color-brand);
  width: max-content;
  padding: 1rem 3rem;
  border-radius: 2rem;
  color: var(--color-fixed-white);
  &:hover {
    background-color: var(--color-brand-dark);
    transform: scale(1.05);
    font-weight: 700;
  }

  @media only screen and (max-width: 970px) {
    display: none;
  }
`;
export const BlogMore2 = styled.a`
  display: none;
  @media only screen and (max-width: 970px) {
    display: block;
    background-color: var(--color-brand);
    width: max-content;
    padding: 1rem 3rem;
    border-radius: 2rem;
    color: var(--color-fixed-white);
    &:hover {
      background-color: var(--color-brand-dark);
      transform: scale(1.05);
      font-weight: 700;
    }
  }
`;

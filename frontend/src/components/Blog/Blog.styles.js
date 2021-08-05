import styled from 'styled-components';

export const BlogSection = styled.section`
  background-color: var(--color-white);
  padding: 3rem 0;
`;

export const BlogHeading = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 2.4rem;
    a {
      color: var(--color-brand);
      background-color: transparent;
      padding: inherit;
    }
  }
  span {
    font-size: 1.8rem;
    width: 85%;

    font-weight: 400;
    font-family: var(--font-primary);

    display: block;
    margin: 5rem 0;
  }
  a {
    background-color: var(--color-brand);
    color: var(--color-white);
    padding: 1.5rem 3rem;
    margin-top: auto;
    font-weight: 700;
    border-radius: 3rem;
    width: fit-content;
  }
`;

export const BlogPosts = styled.div`
  grid-column: 4/-1;
  display: flex;
  justify-content: space-between;
  padding-left: 4rem;
`;

export const BlogPost = styled.div`
  position: relative;
  /* background-color: green; // var(--color-white); */
  width: 26rem;
  height: 36rem;

  img {
    height: 15rem;
    width: 100%;
  }
  h4 {
    font-size: 2rem;
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
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--color-grey-light);
  }
  blockquote {
    font-weight: 400;
    margin-top: 0.5rem;
  }
`;

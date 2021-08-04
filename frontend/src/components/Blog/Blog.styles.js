import styled from 'styled-components';

export const BlogSection = styled.section`

  background-color:  var(--color-white);
  padding: 3rem 0;

`;

export const BlogHeading = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: var(--font-heading);
    font-weight: 900;
  }
  span {
    font-size: 1.6rem;
    width: 85%;

    font-weight: 400;
    font-family: var(--font-primary);

    display: block;
    margin: 5rem 0;
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


  img{
      height: 15rem;
      width: 100%;
  }
`;

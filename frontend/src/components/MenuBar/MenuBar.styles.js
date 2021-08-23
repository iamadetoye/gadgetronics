import styled, { keyframes } from 'styled-components';


const MoveInLeft = keyframes`
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(0);

}`;
const MoveInRight = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-100%);

}`;

export const MenuBarContainer = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;

    user-select: none;

    width: 100vw;

    position: sticky;
    top: 0;
    z-index: 1001;
    background-color: var(--color-white);
    box-shadow: 0 0.1rem 1rem cyan;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label svg {
    height: 3.5rem;
    width: 3.5rem;
    padding: 0.4rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: red;
    }
  }
`;
export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavContainer = styled.div`
  input {
    display: none;
  }
  input:checked ~ aside {
    display: block;
    animation: ${MoveInLeft} 0.3s ease-in forwards;
    transform-origin: left;
  }
  input:not(:checked) ~ aside {
    display: block;
    animation: ${MoveInRight} 0.2s ease-in forwards;
    transform-origin: right;
  }
`;
export const Navigation = styled.nav`
  margin: 2rem;
  /* margin-bottom: 8rem; */
  overflow-y: scroll;
`;
export const SideBar = styled.aside`
  overflow-y: scroll;
  position: fixed;
  top: 6rem;
  left: 0;
  height: calc(100vh - 6rem);
  width: 100%;
  max-width: 60rem;
  background: var(--color-hover-bg);

  h4 {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 1.8rem;
    padding: 0.5rem 0;
  }
  a {
    color: inherit;
  }
`;
// export const Categories = styled.ul``;
// export const Category = styled.li`
//   padding: 0.5rem 1rem;
//   font-size: 1.6rem;
// `;

// export const CatLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-weight: 700;
//   width: 100%;

//   &:focus {
//     color: var(--color-brand);
//     font-weight: 900;
//   }

//   &:focus ~ div {
//     animation: ${DropIt} 0.3s ease-in forwards;
//     transform-origin: top;
//   }
//   svg {
//     background-color: none;
//     height: 1.6rem;
//     width: 1.6rem;
//     padding: 0;
//   }
// `;

export const Brands = styled.ul`
  li {
    padding: 0.5rem 1rem;
    font-weight: 700;

    &:hover {
      color: var(--color-brand);
    }
  }
  font-size: 1.6rem;
  font-weight: 400;
`;
export const FindUs = styled.ul`
  font-size: 1.4rem;
  font-weight: 700;

  h4 {
    font-size: 1.6rem;
  }
  a:hover {
    color: var(--color-brand);
    margin-left: 0.5rem;
    font-style: italic;
    transition: 0.2s;
  }
  li {
    padding: 0.5rem 1rem;
  }
`;
// export const CatItems = styled.div`
//   opacity: 0;
//   visibility: hidden;
//   height: 0;
//   span {
//     display: block;
//   }
// `;

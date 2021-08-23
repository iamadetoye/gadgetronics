import styled, {keyframes} from 'styled-components';


///////////Animations
const DropIt = keyframes`
  0% {
    transform: scaleY(0);
    height: 0;

  }
  80% {
    transform: scaleY(1.1);

  }
  100% {
    transform: scaleY(1);
    opacity: 1;
    height: 100%;
    visibility: visible;
  }

 `;


export const CategoriesBox = styled.ul``;
export const Category = styled.li`
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
`;

export const CatLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  width: 100%;

  &:focus {
    color: var(--color-brand);
    font-weight: 900;
  }

  &:focus ~ div {
    animation: ${DropIt} 0.3s ease-in forwards;
    transform-origin: top;
  }
  svg {
    background-color: none;
    height: 1.6rem;
    width: 1.6rem;
    padding: 0;
  }
`;

export const CatItems = styled.div`
  opacity: 0;
  visibility: hidden;
  height: 0;
  span {
    display: block;
  }
`;

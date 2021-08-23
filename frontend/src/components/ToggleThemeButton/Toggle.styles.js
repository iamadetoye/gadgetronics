import styled from 'styled-components';

export const ToggleContainer = styled.div`
  border-radius: 3rem;
  border: 2px solid transparent;

  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 4rem;

  &:hover {
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    /* background: ${({ theme }) => theme.gradient}; */
  }

  svg {
    height: auto;
    width: 2.5rem;
    position: absolute;

    transition: all 0.2s linear;

    // sun icon

    &:first-of-type {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-of-type(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }

    // moon icon
  }
`;

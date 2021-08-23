import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
  font-size: 62.5%;
}
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --font-primary: 'Lato', sans-serif;
  --font-heading: 'Playfair Display', serif;
  --color-brand: #ff607c;
  --color-brand-dark: #ff234b;
  --color-grey-light: #c4c4c4;
  --color-grey-dark: #2b2d2f;
  --color-grey-light-2: #848ba4;
 --color-hero-bg: ${({ theme }) => theme.heroBg};
  --color-subscribe: #3f3f58;
  --color-pre-footer: #181833;
  --color-white:   ${({ theme }) => theme.bgSecondary};
  --color-hover-bg:  ${({ theme }) => theme.gradient};
  --color-post-footer:  ${({ theme }) => theme.greyPrimary};
  --color-fixed-white: #ffffff;
  --color-bg-primary:${({ theme }) => theme.bgPrimary};
  --color: ${({ theme }) => theme.color};

}


body {
  font-size: 1.8rem;
  font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (2000 - 300)));

  height: 100vh;
  background: var( --color-bg-primary) ;

  color: var(--color);
  font-family: var(--font-primary);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  transition: all 0.25s;

}
::-webkit-scrollbar {
  width: 1.2rem;
}
::-webkit-scrollbar-track {

  background-color: inherit;
}
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.384);
  border-radius: 15rem;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
::-webkit-scrollbar:hover {
  display: block;
}

.roundedIcon {
  background-color: var(--color-white);

  font-size: 40px;
  color: var(--color-brand);
  border-radius: 50%;
  padding: 10px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));
}
.normalIcon {
  color: inherit;
  font-size: 25px;
  display: inline-block;
}
button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  background-color: var(--color-brand);
  color: var(--color-fixed-white);
  border: none;
  cursor: pointer;
  font-size: 12px;
}
.roundedButton {
  z-index: 100;

  border-radius: 70px;
  width: 12em;
  font-weight: 700;
}
.rightRoundedButton {
  border-radius: 0 70px 70px 0;
}
.leftRoundedButton {
  border-radius: 70px 0 0 70px;
  width: 12em;
  height: 3.5em;
  font-weight: 700;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--font-heading);
}


`;

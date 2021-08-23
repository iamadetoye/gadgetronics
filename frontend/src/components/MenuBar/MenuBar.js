import React from 'react';
import data from '../../data';

import { UseDarkMode } from '../../DarkMode/DarkMode';

import { lightTheme, darkTheme } from '../../themes';

import { LogoSmall } from '../Logo/LogoSmall';
import {
  MenuBarContainer,
  LeftSide,
  RightSide,
  NavContainer,
  Navigation,
  SideBar,
  Brands,
  FindUs,

} from './MenuBar.styles';

import { Icon } from '@iconify/react';
import Toggle from '../ToggleThemeButton/Toggle';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../globalStyles';
import Categories from '../Categories/Categories';

const MenuBar = () => {
  const [theme, toggleTheme] = UseDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <MenuBarContainer>
        <LeftSide>
          <NavContainer>
            <input type="checkbox" id="sideToggle" />
            <label name="sideToggle" htmlFor="sideToggle">
              <Icon className="normalIcon" icon="ci:menu-alt-01" />
            </label>
            <SideBar>
              <Navigation>
                <Categories/>
             
                <Brands>
                  <h4>Brands</h4>
                  {data.Brands.map((brand) => (
                    <li key={brand._id}>
                      <a href={brand.link}>{brand.name}</a>
                    </li>
                  ))}
                </Brands>
                <FindUs>
                  <h4>Gadgetronics</h4>
                  <li>
                    <a href="/">Store Locator</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="/">Report a problem</a>
                  </li>
                  <li>
                    <a href="/">About us </a>
                  </li>
                  <li>
                    <a href="/">Warranty Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms and Cnnditions</a>
                  </li>
                  <li>
                    <a href="/">FAQs</a>
                  </li>
                </FindUs>
              </Navigation>
            </SideBar>
          </NavContainer>

          <LogoSmall />
        </LeftSide>
        <RightSide>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          {/* <Icon className="normalIcon" icon="emojione-monotone:crescent-moon" />
        <Icon className="normalIcon" icon="bi:sun-fill" /> */}
          {/* emojione-monotone:sun,emojione:crescent-moon */}

          <Icon className="normalIcon" icon="eva:search-fill" />
          <Icon className="normalIcon" icon="clarity:shopping-cart-solid" />
        </RightSide>
      </MenuBarContainer>
    </ThemeProvider>
  );
};

export default MenuBar;

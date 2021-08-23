import React from 'react';
import './Header.Styles';
import { HeaderBox } from './Header.Styles';
import { Wrapper } from '../../pages/HomePage/HomePage.styles';
import Logo from '../Logo/Logo';
import HeaderItems from '../HeaderItems/HeaderItems';


const Header = () => {
  return (
    <HeaderBox>
      <Wrapper>
        <Logo />
        <HeaderItems />
      </Wrapper>
   
    </HeaderBox>
  );
};

export default Header;

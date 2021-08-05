import React from 'react';
import data from '../../data';
import { LogoBox, LogoDescription } from './Logo.styles';

const Logo = () => {
  return (
    <LogoBox>
      <img src={data.logo} alt="logo" />
      <LogoDescription>
        <p>Gadgetronics</p>
        <span>No.1 for Gadgets and electronics</span>
      </LogoDescription>
    </LogoBox>
  );
};

export default Logo;

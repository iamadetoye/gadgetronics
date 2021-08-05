import { Icon } from '@iconify/react';
import React from 'react';
import { Wrapper } from '../../pages/HomePage/HomePage.styles';
import Logo from '../Logo/Logo';
import { FooterBox, FooterItem } from './Footer.styles';

const Footer = () => {
  return (
    <FooterBox>
      <Wrapper>
        <FooterItem>
          <Logo />
          <li>FooterItemFooterItem</li>
          <li>FooterItemFooterItem</li>
        </FooterItem>
        <FooterItem>
          <h3>Quick Links</h3>
          <li>Trending</li>
          <li>GAdgets Blog</li>
          <li>Cart</li>
          <li>Checkout</li>
          <li>Products</li>
        </FooterItem>
        <FooterItem>
          <h3>Our Apps</h3>
          <svg/>
        </FooterItem>
        <FooterItem>
          <h3>Contact</h3>
          <li>
            <Icon />
            77 Adetoye Street, Lagos, Nigeria
          </li>
          <li>
            <Icon />
            Monday - Saturday, 8:30am - 10:00pm
          </li>
          <li>
            <Icon />
            +234 (0) 816 782 0935
          </li>
        </FooterItem>
      </Wrapper>
    </FooterBox>
  );
};

export default Footer;

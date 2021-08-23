import { Icon } from '@iconify/react';
import React from 'react';
import data from '../../data';
import Logo from '../Logo/Logo';
import {
  FooterBox,
  Socials,
  WrapFoot,
  BrandItems,
  QuickLinks,
  OurApps,
  Partners,
  Contact,
  PostFooter,
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterBox>
      <WrapFoot>
        <BrandItems>
          <Logo />
          <li>
            Social links:
            <Socials>
              <Icon icon="ph:medium-logo-fill" />
              <Icon icon="akar-icons:twitter-fill" />
              <Icon icon="ph:instagram-logo-bold" />
              <Icon icon="brandico:facebook" />
            </Socials>
          </li>
          <li>
            Official partners
            <Partners>
              <Icon icon="logos:visa" />
              <Icon icon="logos:stripe" />
              <Icon icon="grommet-icons:mastercard" />
              <Icon icon="file-icons:apple" />
            </Partners>
          </li>
        </BrandItems>
        <QuickLinks>
          <h3>Quick Links</h3>
          <li>Trending</li>
          <li>Gadgets Blog</li>
          <li>Cart</li>
          <li>Checkout</li>
          <li>Products</li>
        </QuickLinks>
        <OurApps>
          <h3>Our Apps</h3>
          {data.apps.map((img) => (
            <li key={img._id}>
              <a href={img.link}>
                <img src={img.image} alt={img.key} />
              </a>
            </li>
          ))}
        </OurApps>
        <Contact>
          <h3>Contact</h3>

          <li>
            <Icon icon="eva:pin-fill" />
            77 Adetoye Street, Lagos, Nigeria
          </li>
          <li>
            <Icon icon="bx:bx-time" />
            Monday - Saturday, 8:30am - 10:00pm
          </li>
          <li>
            <Icon icon="fluent:call-24-filled" />
            +234 (0) 816 782 0935
          </li>
        </Contact>
      </WrapFoot>

      <PostFooter>
        <p>
          © <a href="/"> Gadgetronics</a> by
          <a href="/"> Abdullahi Adetoye Mustapha</a> | 2021
        </p>
      </PostFooter>
    </FooterBox>
  );
};

export default Footer;

import React from 'react';
import { Icon } from '@iconify/react';
import {
  Header,
  InfoHeading,
  LogoBox,
  LogoDescription,
  Wrapper,
  Search,
} from './HomePage.styles';

import Icons from '../../components/Icons/Icons';
import HeaderItems from '../../components/HeaderItems/HeaderItems';
import Main from '../../components/Main/Main';
import data from '../../data';
import SmartGadgets from '../../components/SmartGadgets/SmartGadgets';

const HomePage = () => {
  return (
    <div>
      <InfoHeading>
        <p>
          How was your experience with us? We’ll love to improve to serve you.
          Click <a href="/">here</a> to let us know
        </p>
      </InfoHeading>
      {/* Header */}
      <Header>
        <Wrapper>
          <LogoBox>
            <img src={data.logo} alt="logo" />
            <LogoDescription>
              <p>Gadgetronics</p>
              <span>No.1 for Gadgets and electronics</span>
            </LogoDescription>
          </LogoBox>

          <HeaderItems />
        </Wrapper>
      </Header>
      <Search>
        <Wrapper>
          <button className="leftRoundedButton">
            Categories <Icon className="normalIcon" icon={Icons.menu} />
          </button>
          <input type="search" placeholder="Search products and categories" />
          <input type="select" placeholder="Select brand"></input>
          <button className="roundedButton">
            <Icon className="normalIcon" icon={Icons.search} />
            Search
          </button>
        </Wrapper>
      </Search>

      <Main />
      <SmartGadgets/>
    </div>
  );
};

export default HomePage;

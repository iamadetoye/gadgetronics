import React from 'react';
import {
  // InfoHeading,
  Home,
} from './HomePage.styles';

import Main from '../../components/Main/Main';
import SmartGadgets from '../../components/SmartGadgets/SmartGadgets';
import Blog from '../../components/Blog/Blog';
import Subscribe from '../../components/Subscribe/Subscribe';


const HomePage = () => {
  return (
    <Home>
      {/* <InfoHeading>
        <p>
          How was your experience with us? We’ll love to improve to serve you.
          Click <a href="/">here</a> to let us know
        </p>
      </InfoHeading> */}
      {/* Header */}

     

      <Main />
      <SmartGadgets />
      <Blog />
      <Subscribe />

    </Home>
  );
};

export default HomePage;

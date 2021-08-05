import React from 'react';
import { Wrapper } from '../../pages/HomePage/HomePage.styles';
import { InputEmail, SubscribeBox } from './Subscribe.styles';

const Subscribe = () => {
  return (
    <SubscribeBox>
      <Wrapper>
        <p>
          Subscribe to get updates about our latest products and tech updates
          right in your email
        </p>
        <form>
          <InputEmail type="email" placeholder="Email Address" required />
          <button className="roundedButton" type="submit">
            Subscribe
          </button>
        </form>
      </Wrapper>
    </SubscribeBox>
  );
};

export default Subscribe;

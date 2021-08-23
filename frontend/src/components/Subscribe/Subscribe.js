import React from 'react';
import { InputEmail, SubscribeBox, SubWrapper } from './Subscribe.styles';

const Subscribe = () => {
  return (
    <SubscribeBox>
      <SubWrapper>
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
      </SubWrapper>
    </SubscribeBox>
  );
};

export default Subscribe;

import { Icon } from '@iconify/react';
import React from 'react';
import data from '../../data';
import './SmartGadgets.styles';
import {
  SmartGadgetsBox,
  SmartBox,
  SmartBoxes,
  SmartImage,
  SmartDetails,
  SmartWrapper,
  SmartHeading,
  IconBox,
} from './SmartGadgets.styles';

const SmartGadgets = () => {
  return (
    <SmartGadgetsBox>
      <SmartWrapper>
        <SmartHeading>
          <h3>
            Smart Gadgets
            <span>
              Day in day-out gadgets to make life easier and a better place for
              everyone.
            </span>
          </h3>

          <IconBox>
            <Icon icon="eva:arrow-ios-back-fill" />
            <Icon icon="eva:arrow-ios-forward-fill" />
          </IconBox>
        </SmartHeading>

        <SmartBoxes>
          {data.smartGadgets.map((smartGadgetBox) => (
            <SmartBox key={smartGadgetBox._id}>
              <SmartImage>
                <img
                  src={smartGadgetBox.image}
                  alt={smartGadgetBox.brandName}
                />
              </SmartImage>

              <SmartDetails>
                <h4>{smartGadgetBox.brandName}</h4>
                <a href={smartGadgetBox.linkUrl}>{smartGadgetBox.linkLabel}</a>
                <p>{smartGadgetBox.price}</p>
              </SmartDetails>
              <button>
                <Icon icon="clarity:shopping-cart-solid" />
              </button>
            </SmartBox>
          ))}
        </SmartBoxes>
        <IconBox>
          <Icon icon="eva:arrow-ios-back-fill" />
          <Icon icon="eva:arrow-ios-forward-fill" />
        </IconBox>
      </SmartWrapper>
    </SmartGadgetsBox>
  );
};

export default SmartGadgets;

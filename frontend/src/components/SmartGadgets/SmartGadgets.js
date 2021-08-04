import { Icon } from '@iconify/react';
import React from 'react';
import data from '../../data';
import { Wrapper } from '../../pages/HomePage/HomePage.styles';
import './SmartGadgets.styles';
import {
  SmartGadgetsBox,
  SmartBox,
  SmartBoxes,
  SmartImage,
  SmartDetails,
  SmartHeading,
  IconBox,
} from './SmartGadgets.styles';

const SmartGadgets = () => {
  return (
    <SmartGadgetsBox>
      <Wrapper>
        <SmartHeading>
          <h3>
            Smart Gadgets
            <span>
              Day in day-out gadgets to make life easier and a better place for
              everyone.
            </span>
          </h3>

          <IconBox>
            <Icon icon="akar-icons:chevron-left" />
            <Icon icon="akar-icons:chevron-right" />
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
      </Wrapper>
    </SmartGadgetsBox>
  );
};

export default SmartGadgets;

//    {
//     title: 'Smart Gadgets',
//     description:
//       'Day in day-out gadgets to make life easier and a better place for everyone.',
//   },

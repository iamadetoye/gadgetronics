import { Icon } from '@iconify/react';
import React from 'react';
import data from '../../data';
import { HeaderItem, HeaderItemsBox } from './HeaderItems.styles';

const HeaderItems = () => {

  return (
    <HeaderItemsBox>
      {data.headerItems.map((headerItem) => (
        <HeaderItem key={headerItem._id} className="headerItem">
          <Icon className="roundedIcon" icon={headerItem.icon} />
          <div>
            <span>{headerItem.description}</span>
            <p>{headerItem.title}</p>
          </div>
        </HeaderItem>
      ))}
    </HeaderItemsBox>
  );
};

export default HeaderItems;

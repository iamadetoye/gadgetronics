import { Icon } from '@iconify/react';
import React from 'react';
import { Wrapper } from '../../pages/HomePage/HomePage.styles';
import { SearchContainer } from './Search.styles';
import Icons from '../../components/Icons/Icons';


const Search = () => {
  return (
    <SearchContainer>
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
    </SearchContainer>
  );
};

export default Search;

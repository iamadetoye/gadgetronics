import { Icon } from '@iconify/react';
import React from 'react';
import data from '../../data';
import './Categories.Styles';
import {
  CategoriesBox,
  Category,
  CatItems,
  CatLink,
} from './Categories.Styles';



const Categories = () => {
  return (
    <div>
      <CategoriesBox>
        <h4>Categories</h4>
        {data.Categories.map((category) => (
          <Category key={category._id}>
            <CatLink href="#">
              {category.title}

              <Icon icon="akar-icons:chevron-down" />
            </CatLink>

            <CatItems>
              {category.products.map((subCat) => (
                <span key={subCat._id}>
                  <a href={subCat.link}> {subCat.label}</a>
                </span>
              ))}
            </CatItems>
          </Category>
        ))}
      </CategoriesBox>
    </div>
  );
};

export default Categories;

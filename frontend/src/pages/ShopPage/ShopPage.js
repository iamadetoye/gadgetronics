import React from 'react';
import data from '../../data';
import { Icon } from '@iconify/react';

import './ShopPage.Styles';
import {
  Shop,
  ShopWrapper,
  ShopCategories,
  ShopBox,
  ShopTrends,
  ShopCat,
  ShopLeft,
  ShopCatItem,
  ShopCatItemLink,
  ShopTrendsItem,
  ShopTrendsItemLink,
  CategoryCard,
  CategoryCardsBox,
  ProductList,
  CategoryCardHeading,
  ProductBox,
} from './ShopPage.Styles';

const ShopPage = () => {
  const categories = data.Categories;

  return (
    <Shop>
      <ShopWrapper>
        <ShopCategories>
          <ShopLeft>
            <ShopCat>
              <h4>CATEGORIES</h4>

              {categories.map((category) => (
                <ShopCatItem key={category._id}>
                  <span>
                    <ShopCatItemLink href={category.linkCat}>
                      {category.title}
                    </ShopCatItemLink>
                  </span>
                </ShopCatItem>
              ))}
            </ShopCat>
            <ShopTrends>
              <h4>TRENDING GADGETS</h4>

              {data.trends.map((trend) => (
                <ShopTrendsItem key={trend._id}>
                  <span>
                    <ShopTrendsItemLink href={trend.link}>
                      {trend.title}
                    </ShopTrendsItemLink>
                  </span>
                </ShopTrendsItem>
              ))}
            </ShopTrends>
          </ShopLeft>
        </ShopCategories>

        <ShopBox>
          <CategoryCardsBox>
            {categories.map((category) => (
              <CategoryCard key={category._id}>
                <CategoryCardHeading>
                  <h3> {category.title}</h3>
                  {/* <img src={category.image} alt="fdgd" /> */}
                </CategoryCardHeading>
                <ProductList>
                  {category.products.map((product) => (
                    <ProductBox key={product._id}>
                      <img src={product.thumbnail} alt={product.label} />
                      <span>{product.name}</span>
                      <h4>${product.discountedPrice} </h4>
                      <span>${product.price} </span>
                      <p>50% off!</p>
                      <Icon icon="bi:star-fill" />
                      <Icon icon="bi:star-fill" />
                      <Icon icon="bi:star-fill" />
                      <Icon icon="bi:star-half" />
                      <Icon icon="bi:star" />
                      <span>({product.numRatings}) </span>
                      <p> {product.countInStock} left in stock </p>
                      {/* <Icon icon='emojione:shooting-star' />
                      <Icon icon='emojione:glowing-star' /> */}
                    </ProductBox>
                  ))}
                </ProductList>
              </CategoryCard>
            ))}
          </CategoryCardsBox>
        </ShopBox>
      </ShopWrapper>
    </Shop>
  );
};

export default ShopPage;

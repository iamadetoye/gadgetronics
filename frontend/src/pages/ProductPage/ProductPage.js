import React from 'react';
import data from '../../data';

const ProductPage = (props) => {
  const product = data.smartGadgets.find((x) => x._id === props.match.params);
  return (
    <div>
      <h1>HEY</h1>
    </div>
  );
};

export default ProductPage;

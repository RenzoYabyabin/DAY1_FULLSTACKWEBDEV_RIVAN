import React from "react";
import ProductGuide from "../components/ProductGuide";
import Product_list from "../components/Product_List";

const Products = () => {
  return (
    <div>
      <ProductGuide />
      <Product_list />
      <Header />
    </div>
  );
};

export default Products;

import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { ProductPage } from "./ProductPage";
const list = data.data;

export function Product() {
  const { id } = useParams();
  const currentProduct = list.find((product) => product.id === id);

  return currentProduct ? (
    <ProductPage product={currentProduct} />
  ) : (
    <h1>NOT FOUND</h1>
  );
}

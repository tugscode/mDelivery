import React from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import queryString from "query-string";
import Breadcrumb from "./Breadcrumb"
import NotFound from "./NotFound"

import { useFood } from "../contexts/FoodContext";
const FoodSearch = () => {
  const { search } = useLocation();
  const foodSearch = queryString.parse(search);
  const [foods] = useFood()

  let foundFood = foods.filter((j) =>
    j.name.toLowerCase().includes(foodSearch.q)
  );
  let foodFound = false;
  if (foundFood.length > 0) {
    foodFound = true;
  }
  let searchContent = foodFound ? (
    <div className="row">
      {foundFood.map((data, index) => {
        return (
            <Card
              data={data}
              key={data.name}
            />
        );
      })}
    </div>
  ) : (
    <NotFound/>
  );

  return (
    <div className="container mb-5">
      <Breadcrumb value={foodSearch.q} />
      {searchContent}
    </div>
  );
};

export default FoodSearch;

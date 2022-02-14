import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodContext";

function Salad() {
  const [mainMenu, setMainMenu] = useState([]);
  const [foods] = useFood()
  useEffect(()=>{
    setMainMenu(
      foods
      .filter((p)=>{
        return p.category === "Салад ба зууш"
      })
      .slice(0,4)
    )
  },[foods])

  return (
    <Container>
      <div className="row">
        {mainMenu.map((data) =>
        (
          <Card
            data= {data}
            // img={data.img}
            // name={data.name}
            // discountPrice={data.discountPrice}
            // price={data.price}
            // sales={data.sales}
            // percent={data.discountPercentage}
            // ingredients={data.ingredients}
            // key={data.name}
          />
        )
        )}
      </div>

    </Container>
  );
}
export default Salad;

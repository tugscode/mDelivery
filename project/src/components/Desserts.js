import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodContext";

function Desserts() {
  const [foods] = useFood()
  const [desserts, setMainMenu] = useState([]);
  useEffect(()=>{
    setMainMenu(
      foods
      .filter((p)=>{
        return p.category === "Амттан"
      })
      .slice(0,4)
    )
  },[foods])

  return (
    <Container>
      <div className="row">
        {desserts.map((data) => {
          return (
            <Card
              data = {data}
              key= {data}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default Desserts;

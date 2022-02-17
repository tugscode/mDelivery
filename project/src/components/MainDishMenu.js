import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodContext";

function MainDishMenu() {
  const [foods] = useFood()
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(()=>{
    setMainMenu(
      foods
      .filter((p)=>{
        return p.category === "Үндсэн хоол"
      })
      .slice(0,4)
    )
  },[foods])
  return (
    <Container>
      <div className="row">
        {mainMenu.map((data) => {
          return (
            <Card
            data= {data}
            key = {data.name}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default MainDishMenu;

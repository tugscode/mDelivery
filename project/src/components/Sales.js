import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodContext";

function Sales() {
  const [sale, setSale] = useState([]);
  const [foods] = useFood()
  useEffect(()=>{
    setSale(
      foods
      .filter((p)=>{
        return p.category === "Амттан"
      })
      .slice(0 , 4)
    )
  },[foods])
  return (
    <Container>
      <div className="row ">
        {sale.map((i) => (
          <Card
          data = {i}
            // img={i.img}
            // name={i.name}
            // discountPrice={i.discountPrice}
            // price={i.price}
            // sales={i.sales}
            // percent={i.discountPercentage}
            // ingredients={i.ingredients}
            // key={i.name}
          />
        ))}
      </div>
    </Container>
  );
}
export default Sales;

import React, {useEffect, useState}from "react";
import Meal from "../img/meal.png"
import DeleteMeal from "../img/delete_meal.png"
import "../css/cartItems.css"
import { basketService } from "../services/basketService";
import { NavLink} from "react-router-dom";

function CartItems() {
    const [count, setCount] = useState(1);
    const [first, setFirst] = useState({ success: false });
    const [changed, setChanged] = useState(false);
    const handleCounter = (num) => {
        setCount((count) => (count > 0 ? (count += num) : (count = 1)));
      };
    
    useEffect(()=>{
      basketService
      .getBasketInfo()
      .then((res)=> res.json())
      .then((data)=> setFirst(data))
    },[changed])
    
    const deletedBasket = async (d)=>{
      basketService
      .deleteBasket(d)
      .then((data)=> data.json())
      .then((data)=>{
        if(data.success){
          setChanged(!changed)
        }
      })
    }
    const updateBasket = (q, id)=>{
      basketService.addItem({count: q, food_id: id}).then((data)=>{
        if (data.success){
          setChanged(!changed)
        }
      })
    }

    const el = first.baskets
    let summit = 0
  
    return (
      <div className="main-body">
      {first.success === true ? (
        el.map((data) => {
          summit += data.product.price * data.quantity;
          return (
            <div>
              <div className="cart-items">
                <div className="thumbnail">
                  <img
                    src={
                      "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" +
                      data.product.image
                    }
                    alt=""
                    className="item-image"
                  />
                </div>
                <div className="details">
                  <p className="cart-item-name">{data.product.name}</p>
                  <p className="cart-item-price">{data.product.price}</p>
                  <div className="buttons">
                    <button onClick={() => updateBasket(-1, data.product._id)}>
                      -
                    </button>
                    <p>{data.quantity}</p>
                    <button
                      onClick={() => {
                        updateBasket(1, data.product._id);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="close-button">
                  <img
                    src={DeleteMeal}
                    onClick={() => deletedBasket(data)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>zahialga achaallaj baina</div>
      )}
            <div className="order-section">
                <p className="totalPrice">{summit}₮</p>
              <NavLink to="/address">
                <button className="order-button">Захиалах</button>
              </NavLink>
            </div>
        </div>
    )
}

export default CartItems;

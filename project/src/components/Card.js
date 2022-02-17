import React, { useState , useEffect} from "react";
import { Col, Modal } from "react-bootstrap";
import '../css/card.css'
import TestModal from './ExampleModal'
import { useFood } from "../contexts/FoodContext";

const Card = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [foods] = useFood()
    let cards = props.data.sales ? (
        <div className="card"
        >
            <img src={ "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" + props.data.image} alt="img" />
            <div className="badge">{props.data.discount}%</div>
            <p>{props.data.name}</p>
            <div class="middle">
                <img className="hoverImg" src="/icons/whiteMarket.svg" alt="hover" />
                <div class="hoverText">Сагслах</div>
            </div>
            <div className="price">
                <p className="activePrice">{new Intl.NumberFormat().format(props.data.price - props.data.price * props.data.discount / 100)}₮ </p>
                <strike className="strike-dark">{new Intl.NumberFormat().format(props.data.price)}₮ </strike>
            </div>
        </div>
    ) : (
        <div className="card"
        >
            <img src={"https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" + props.data.image} alt="img"/>
            <div class="middle">
                <img className="hoverImg" src="/icons/whiteMarket.svg" alt="hover" />
                <div class="hoverText">Сагслах</div>
            </div>
            <p>{props.data.name}</p>
            <div className="price">
                <p className="activePrice">{new Intl.NumberFormat().format(props.data.price)}₮ </p>
            </div>
        </div>
    )

    return (
        <>

            <Col xs={6} md={3} className="mb-4" >
                <div onClick={() => setShowModal(true)}
                    className="singleCard">
                    {cards}
                </div>
            </Col >


            {showModal && <TestModal data={props} showHandler={setShowModal} />}
        </>
    )
}

export default Card;
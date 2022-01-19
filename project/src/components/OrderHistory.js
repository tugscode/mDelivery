
import React from "react";
import "../css/orderhistory.css";

const OrderHistory = () => {
    return (
        <div className="order-main ">
            <div className="order-content-box tabler-order-content-box">
                <p className="order-component-title">Захиалгын түүх</p>
                <div className="orders">
                    <div className="order-detail">
                        <div className="iconBackground">
                            <img className="orderIcon" src="/icons/market.svg" alt="" />
                        </div>
                        <ul className="order-info">
                            <li className="order-Id">Захиалга #1231231</li>
                            <li className="order-state">Хүлээгдэж буй.</li>
                        </ul>
                    </div>
                    <div className="order-date">2022/01/07</div>
                </div>
                <div className="delivered-orders">
                    <div className="order-detail">
                        <div className="delivered-iconBackground">
                            <img className="delivered-orderIcon" src="/icons/market.svg" alt="" />
                        </div>
                        <ul className="order-info">
                            <li className="delivered-order-Id">Захиалга #1231231</li>
                            <li className="delivered-order-state">Амжилттай.</li>
                        </ul>
                    </div>
                    <div className="delivered-order-date">2022/01/07</div>
                </div>
                <div className="delivered-orders">
                    <div className="order-detail">
                        <div className="delivered-iconBackground">
                            <img className="delivered-orderIcon" src="/icons/market.svg" alt="" />
                        </div>
                        <ul className="order-info">
                            <li className="delivered-order-Id">Захиалга #1231231</li>
                            <li className="delivered-order-state">Амжилттай.</li>
                        </ul>
                    </div>
                    <div className="delivered-order-date">2022/01/07</div>
                </div>
            </div>

            <div className="order-content-box delivered-order-content-box">
                <div className="order-title">
                    <p className="order-component-title">Дэлгэрэнгүй</p>
                    <p className="active-order-id">#213123123</p>
                </div>
                <div className="orderList">
                    <p className="orderItemName">Салмон загас</p>
                    <p className="orderItemNumber">(1)</p>
                </div>
                <div className="orderList">
                    <p className="orderItemName">Чикен бургер</p>
                    <p className="orderItemNumber">(1)</p>
                </div>
            </div>
        </div>
    )
};

export default OrderHistory;

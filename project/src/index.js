import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { FoodProvider } from "./contexts/FoodContext";
import { BasketContext, BasketProvider } from "./contexts/BasketContext";

ReactDOM.render(
  <React.StrictMode>
    <BasketProvider>
      <UserProvider>
        <FoodProvider>
          <App />
        </FoodProvider>
      </UserProvider>
    </BasketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

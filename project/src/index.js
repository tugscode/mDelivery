import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import App from "./App";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { FoodProvider } from "./contexts/FoodContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      {/* <FoodProvider>
      </FoodProvider> */}
        <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

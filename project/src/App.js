import React, { ModalContext ,createContext , useState, useContext , useEffect } from "react";
import "./App.css";
import HeaderMenu from './components/navbar'
import Home from "./components/Home";
import Menu from "./components/Menu";
import Delivery from "./components/Delivery";
import Search from "./components/Search";
import User from "./components/User";
import Market from "./components/Market";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import Login from "./components/Login"
import Register from "./components/Register"
import NotFound from "./components/NotFound";
import PageInsideMenu from "./components/PageInsideMenu";
import TermOfUse from "./components/TermOfUse"
import Privacy from './components/Privacy'
import ForgetPassword from './components/ForgetPassword'
import NewPassword from "./components/NewPassword";
import OrderHistory from "./components/OrderHistory";
import UserProfile from "./components/UserProfile";
import FoodSearch from "./components/FoodSearch";
import AddressVertification from "./components/AddressVerification";
import { fService } from "./services/fService";
import {useFood} from "./contexts/FoodContext"
function App() {
  const [foods , setFoods] = useState([])
    useEffect(()=>{
        fService
        .getAllFood()
        .then((response)=>response.json())
        .then((data)=>{
            if(data.success){
                setFoods(data.data)
            }
        })
        .finally(()=>{})
    } ,[])
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={"/search"} component={FoodSearch}/>
        <Route path="/menu" component={Menu} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/search" component={Search} />
        <Route path="/user" component={User} />
        <Route path="/market" component={Market} />
        <Route path="/termofuse" component={TermOfUse} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/pageInsideMenu" component={PageInsideMenu} />
        <Route path="/forget" component={ForgetPassword} />
        <Route path="/newpassword" component={NewPassword} />
        <Route path="/address" component={AddressVertification} />
        <Route path="/orderhistory" component={OrderHistory} />
        <Route path="/userProfile" component={UserProfile}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React, { useContext, useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/layout/ProductDetails";
import Login from "./components/layout/Login";
import NotFound from "./components/NotFound";
import ShoppingContext from "./context/Shopping/shoppingContext";
import { auth } from "./Firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/layout/Payment";


const promise = loadStripe("pk_test_51PlVRqLMgtFI0dfMiRI1LB9BZgwOsceCPiUKoXY95dBuNn0FKET08Bo8aK3Z2L7UT4yUI8Rdk1hJwS2HBv028J1d002MARPYt1")


const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser} = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User Is ->", authUser);

      if(authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

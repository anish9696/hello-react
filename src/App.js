import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 * Food ordering company
 * ANNService
 * App Layout
 * Header
 *    logo
 *    Nav item(Home, aboutUs, cart, links)
 * Body
 *    searchComponent, Restaurant component(Restaurant card), FoodComponent (Food Card)
 *    Restaurant card
 *      - Img
 *      -  Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  copyright
 *  links
 *  Address
 *  Contact
 */

//not using keys (not acceptable) <<< index as key <<<<<<<< unique id(best practice)

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

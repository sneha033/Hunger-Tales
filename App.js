import React from "react";
import ReactDom from "react-dom/client";
import Header from "./component/header.js";
import Body from "./component/body";
import Footer from "./component/footer"


/**
 * header
 *      -logo
 *      -nav bars : home about Contact
 *      -cart
 * body
 *      -search bar
 *      -cards
 *          =image, name, rating , cuisines
 * footer
 *      -copyright
 */





const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(Applayout());

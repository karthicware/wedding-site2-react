import React from "react";
import ReactDOM from "react-dom";

import Header from "./pages/header";
import HappyCouple from "./pages/happy-couple";
import TwitterCards from "./pages/twitter-cards";
import Quote from "./pages/quote";
import Footer from "./pages/footer";

function App() {
  return (
    <>
      <Header />
      <div className="main main-raised">
        <div
          className="container-fluid"
          style={{ padding: "0px 120px 0px 120px" }}
        >
          <HappyCouple />
          <TwitterCards />
          <Quote />
        </div>
      </div>

      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";

import Header from "./pages/header";
import HappyCouple from "./pages/happy-couple";
import TwitterCards from "./pages/twitter-cards";
import Quote from "./pages/quote";
import Footer from "./pages/footer";
import Event from "./pages/event";
import People from "./pages/people";
import Gallery from "./pages/gallery";
import CountdownTimer from "./pages/countdown-timer";
import Thankyou from "./pages/thankyou";

function App() {
  return (
    <>
      <Header />
      <div className="main main-raised">
        <div className="container-fluid" style={{ padding: "0px" }}>
          <HappyCouple />
          <Event />
          <Gallery />
          <TwitterCards />
          <CountdownTimer days={2} />
          <People />
          <Quote />
          <Thankyou />
        </div>
      </div>

      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

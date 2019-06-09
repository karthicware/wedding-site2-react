import React from "react";
//import { ReactComponent as BubbleBg } from "./bg_1.svg";

const style = {
  img: { height: 225, objectFit: "cover" }
};

const Card1 = () => {
  return (
    <div
      className="card card-profile ml-auto mr-auto"
      style={{ maxWidth: "360px" }}
    >
      <div className="card-header card-header-image">
        <img
          style={style.img}
          className="img"
          alt=""
          src="../../assets/img/wedding_ceremony.jpeg"
        />
      </div>

      <div className="card-body ">
        <h2 className="card-title gv_font text-danger">Wedding Ceremony</h2>
      </div>
      <div className="card-footer justify-content-center">
        <div
          className="card card-with-border"
          data-background="color"
          data-color="red"
        >
          <div className="content">
            <p className="description">Park Hayatt Hotel</p>
            <p>New York Friday</p>
            <p>24 Jan 2019 4:30pm-6:15pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div
      className="card card-profile ml-auto mr-auto"
      style={{ maxWidth: "360px" }}
    >
      <div className="card-header card-header-image">
        <img
          style={style.img}
          alt=""
          className="img"
          src="../../assets/img/wedding_party.jpg"
        />
      </div>

      <div className="card-body ">
        <h2 className="card-title gv_font text-danger">Wedding Party</h2>
      </div>
      <div className="card-footer justify-content-center">
        <div
          className="card card-with-border"
          data-background="color"
          data-color="red"
        >
          <div className="content">
            <p className="description">Park Hayatt Hotel</p>
            <p>New York Friday</p>
            <p>24 Jan 2019 4:30pm-6:15pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div
      className="card card-profile ml-auto mr-auto"
      style={{ maxWidth: "360px" }}
    >
      <div className="card-header card-header-image">
        <img
          style={style.img}
          alt=""
          className="img"
          src="../../assets/img/dinner.jpg"
        />
      </div>

      <div className="card-body ">
        <h2 className="card-title gv_font text-danger">Dinner</h2>
      </div>
      <div className="card-footer justify-content-center">
        <div
          className="card card-with-border"
          data-background="color"
          data-color="red"
        >
          <div className="content">
            <p className="description">Park Hayatt Hotel</p>
            <p>New York Friday</p>
            <p>24 Jan 2019 4:30pm-6:15pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Event = () => {
  return (
    <div className="section grey_bg" style={style.background}>
      <h1 className="title text-danger text-center">Events</h1>
      <div className="row">
        <div className="col-md-4">
          <Card1 />
        </div>
        <div className="col-md-4">
          <Card2 />
        </div>
        <div className="col-md-4">
          <Card3 />
        </div>
      </div>
    </div>
  );
};

export default Event;

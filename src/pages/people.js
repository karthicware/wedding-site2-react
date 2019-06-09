import React from "react";

const style = {
  img: { height: 225, objectFit: "cover" }
};

const Card1 = () => {
  return (
    <div className="card" style={{ maxWidth: "360px" }}>
      <img
        style={style.img}
        className="card-img-top"
        alt=""
        src="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      />

      <div className="card-body ">
        <h4 className="card-title gv_font text-danger">Thandavam</h4>
        <h3>
          <small className="muted">Father</small>
        </h3>
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className="card" style={{ maxWidth: "360px" }}>
      <img
        style={style.img}
        alt=""
        className="card-img-top"
        src="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      />

      <div className="card-body ">
        <h4 className="card-title gv_font text-danger">Thandavam</h4>
        <h3>
          <small className="muted">Father</small>
        </h3>
      </div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className="card" style={{ maxWidth: "360px" }}>
      <img
        style={style.img}
        alt=""
        className="card-img-top"
        src="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      />

      <div className="card-body ">
        <h4 className="card-title gv_font text-danger">Thandavam</h4>
        <h3>
          <small className="muted">Father</small>
        </h3>
      </div>
    </div>
  );
};

const People = () => {
  return (
    <div className="section text-center">
      <h1 className="title text-danger">Our Family</h1>
      {/* Groom Family */}
      <div className="row">
        <div className="col-md-12">
          <h3 className="gv_font title pull-left">Natarajan's Family</h3>
        </div>
      </div>

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
      {/* Bride Family */}

      <div className="row">
        <div className="col-md-12">
          <h3 className="gv_font title pull-right">Shamini's Family</h3>
        </div>
      </div>
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

export default People;

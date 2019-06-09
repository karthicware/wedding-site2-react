import React from "react";

const style = {
  card: {
    maxWidth: "100%"
  }
};

const Quote = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="card card-nav-tabs" style={style.card}>
          <div className="card-header card-header-warning">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>
                It is a truth universally acknowledged, that a single man in
                possession of a good fortune, must be in want of a wife.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

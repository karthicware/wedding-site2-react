import React from "react";

const Quote = () => {
  return (
    <div className="section ">
      <div className="row">
        <div class="card card-nav-tabs">
          <div class="card-header card-header-danger">Quote</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>
                It is a truth universally acknowledged, that a single man in
                possession of a good fortune, must be in want of a wife.
              </p>
              <footer class="blockquote-footer">
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

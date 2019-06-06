import React from "react";

const TwitterCards = () => {
  return (
    <div className="card bg-info">
      <div className="card-body">
        <h5 className="card-category card-category-social">
          <i className="fa fa-twitter" /> Twitter
        </h5>
        <h4 className="card-title">
          <a href="#pablo">
            &quot;Best wishes on this wonderful journey, as you build your new
            lives together.&quot;
          </a>
        </h4>

        <div className="card-stats">
          <div className="author">
            <a href="#pablo">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                alt="..."
                className="avatar img-raised"
              />
              <span>Vignesh</span>
            </a>
          </div>
          <div className="stats ml-auto">
            <i className="material-icons">favorite</i> 2.4K &#xB7;
            <i className="material-icons">share</i> 45
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterCards;

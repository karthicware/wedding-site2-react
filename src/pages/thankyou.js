import React from "react";

const styles = {
  card: {
    maxWidth: "100%",
    // opacity: 0.5,
    // position: "relative",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')"
  },
  card2: {
    maxWidth: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }
};

const Thankyou = () => {
  return (
    // <div className="card card-background" style={styles.card}>

    //   <div className="card-body">
    //     <h1 className="title gv_font text-danger text-center">Thank you </h1>

    //     <p className="card-description">for being with us</p>

    //     <a href="#pablo" className="btn btn-white btn-link">
    //       <i className="material-icons">watch_later</i> Watch Later
    //     </a>
    //   </div>
    // </div>
    <div
      class="card card-just-text card-with-border"
      data-background="image"
      data-src="assets/img/music-3.jpg"
      style={styles.card2}
    >
      <div class="content">
        <div class="filter filter-red" />
        <p className="h1 gv_font">Thank You</p>
        <h4 class="title title-modern">For Being With Us</h4>
        <p class="description gv_font">Save The Date</p>
        <p class="description">04 Sep 2017</p>
      </div>

      <div class="filter" />
    </div>
  );
};

export default Thankyou;

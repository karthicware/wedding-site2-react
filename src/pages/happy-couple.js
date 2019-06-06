import React from "react";

const styles = {
  img: { height: "300px", width: "300px", objectFit: "cover" }
};

const HappyCouple = () => {
  return (
    <div className="section text-center">
      <h2 className="title text-danger">Happy Couple</h2>

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-6 text-center">
          <img src="../assets/img/groom.jpg" style={styles.img} alt="Groom" />
          <h3 className="title gv_font">Natarajan</h3>
          <h5 class="text-muted">
            Describe about your nature, wish, hobbies etc in a clear way and
            give the other opponents a clear understanding of your personality,
            keep it simple..
          </h5>
        </div>
        <div className="col-md-6 text-center">
          <img src="../assets/img/bride.jpg" style={styles.img} alt="Groom" />
          <h3 className="title gv_font">Shamini</h3>
          <h5 class="text-muted">
            Describe about your nature, wish, hobbies etc in a clear way and
            give the other opponents a clear understanding of your personality,
            keep it simple..
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HappyCouple;

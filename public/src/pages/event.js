import React from "react";

const Event = () => {
  return (
    <div className="section ">
      <div className="row">
        <div class="card mb-3">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

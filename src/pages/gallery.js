import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const images = [
      {
        original: "http://lorempixel.com/1000/600/nature/1/",
        thumbnail: "http://lorempixel.com/250/150/nature/1/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/2/",
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/3/",
        thumbnail: "http://lorempixel.com/250/150/nature/3/"
      }
    ];
    return (
      <div className="section text-center">
        <h1 className="title text-danger">Gallery</h1>

        <div className="row">
          <div className="col-md-12">
            <ImageGallery items={images} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;

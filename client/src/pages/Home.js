import React from "react";
//responsible for setting up the slideshow; behind the scenes
// where the error is occuring
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// testing

//creating a variable to store images within a object
const slideImages = [
  {
    url: "images/one.jpg",
  },
  {
    url: "images/two.jpg",
  },
  {
    url: "images/three.jpg",
  },
];

const Home = () => {
  return (
    <div className="slide-container">
      {/* using the map function to return the objects index value from slideImages */}
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
      <div className="about-section">
        <h1 className="about-h1">About Me</h1>
        <p className="about-paragraph">
          Hello, my name is Isaiji, and I'm a digital graphic artist
          specializing in making graphic designs. Find what you're looking for
          yourself or great gifts for your family and friends. You'll find
          unique merchandise with my art on t-shirts, sweatshirts, mugs,
          stickers, and more! Please connect with my social media below or send
          me an inquiry on the contact page.
        </p>
      </div>
    </div>
  );
};

export default Home;

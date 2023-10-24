import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.jpg";
import about2Img from "../../assets/about2.jpg";
import about3Img from "../../assets/about3.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} />
            <img src={about3Img} />
            <img src={about2Img} />

          </div>
          {/* <div className="about-img1">
            <img src={about2Img} />
          </div> */}
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Welcome to BookHub, your ultimate destination for book lovers and
              avid readers! At BookHub, we are passionate about connecting
              readers with their next great read. Whether you're a bibliophile
              searching for your next literary adventure or a student looking
              for academic resources, we've got you covered.
            </p>
            <p className="fs-17">
              <b>Our Mission:</b>
            </p>
            <p className="fs-17">
              At BookHub, we are on a mission to promote literacy and the joy of
              reading. We believe that books have the power to inspire, educate,
              and entertain. By providing a reliable platform for book
              discovery, we aim to empower readers to explore new worlds and
              broaden their horizons.
            </p>
            <p className="fs-17">
              <b>Get Involved:</b>
            </p>
            <p className="fs-17">
              Join our community of readers and be a part of this exciting
              journey. Whether you're an author, a publisher, or a passionate
              reader, there are numerous ways to get involved. Contribute book
              reviews, recommend your favorite titles, or partner with us to
              showcase your publications. Together, let's make reading a shared
              adventure.
            </p>

            <p className="fs-17">
              Thank you for being a part of BookHub. Happy reading!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

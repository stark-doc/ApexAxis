import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stats.css";

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <Slider {...settings}>
        <div className="quote">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHnKjkiFjj_UA/profile-displayphoto-shrink_800_800/0/1618228243299?e=2147483647&v=beta&t=WN5lpWQXU-kVug0035UmkJ8IzuH9kYTSBnT5aJ64jko"
            alt="Sarah"
            className="ui small circular image"
          />
          <blockquote>
            <i className="quote left large blue icon centered"></i>I had the privilege of catching the attention of investors who truly understand the significance of sustainability and social impact in the business landscape.
            Their support has been instrumental in propelling my startup to new heights, and I am incredibly grateful for the opportunity they have provided.
            Through their investment, I have not only gained the financial backing necessary to scale my venture but also the validation that our focus on sustainability and social impact is resonating with stakeholders. 
            This vote of confidence has bolstered our morale and reinforced our commitment to making a positive difference in the world.
            <i className="quote right blue icon centered"></i>
          </blockquote>
          <h2>- Sarah</h2>
        </div>
        <div className="quote">
          <center>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQG7UwFNE_uAEA/profile-displayphoto-shrink_800_800/0/1668692752907?e=2147483647&v=beta&t=fBZufw20QIF_HvcNu1nJBK05pA60ofUKQhB13x09L8E"
            alt="Michael"
            className="ui small circular image"
          />
          </center>
          <blockquote>
            <i className="quote left icon pink large centered"></i>Being noticed and supported by investors who prioritize sustainability and social impact has been an incredible turning point for our college project. 
            Their recognition of the significance of our initiative has not only provided the necessary financial support but also validated our mission to create positive change.
            The commitment to sustainability and social impact has infused our project with invaluable guidance and resources.{" "}
            <i className="quote right pink icon centered"></i>
          </blockquote>
          <h2>- Michael</h2>
        </div>
      </Slider>
    );
  }
}

function Testimony() {
  return (
    <div className="testimonials">
      <h1>Hear what our Users say</h1>
      <Carousel />
    </div>
  );
}

export default Testimony;

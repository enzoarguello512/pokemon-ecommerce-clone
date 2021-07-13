import React from "react"
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from './../../Atoms/Image/Image';

function CardSlider() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    adaptiveHeight: true,
    speed: 500
  }

  return (
    <div>
      <h2>Cartas Destacadas</h2>
      <Slider {...settings}>
        <div>
          <h5 className="fw-bold text-center">Leafeon</h5>
          <Image imgClass="img-fluid m-auto" src="/images/BWP_ES_BW87.png" alt="Leafeon" />
        </div>
        <div>
          <h5 className="fw-bold text-center">Flareon</h5>
          <Image imgClass="img-fluid m-auto" src="/images/BWP_ES_BW88.png" alt="Flareon" />
        </div>
        <div>
          <h5 className="fw-bold text-center">Vaporeon</h5>
          <Image imgClass="img-fluid m-auto" src="/images/BWP_ES_BW89.png" alt="Vaporeon" />
        </div>
        <div>
          <h5 className="fw-bold text-center">Glaceon</h5>
          <Image imgClass="img-fluid m-auto" src="/images/BWP_ES_BW90.png" alt="Glaceon" />
        </div>
        <div>
          <h5 className="fw-bold text-center">Jolteon</h5>
          <Image imgClass="img-fluid m-auto" src="/images/BWP_ES_BW91.png" alt="Jolteon" />
        </div>
        <div>
          <h5 className="fw-bold text-center">Genesect</h5>
          <Image imgClass="img-fluid m-auto" src="/images/BWP_ES_BW99.png" alt="Genesect" />
        </div>
      </Slider>
    </div>
  )
}

export default CardSlider;


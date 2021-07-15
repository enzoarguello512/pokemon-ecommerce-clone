import React from "react"
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from './../../Atoms/Image/Image';
import H5 from './../../Atoms/H5/H5';


function CardSlider() {

  const settings = {
    className: "center h-460px",
    centerMode: true,
    infinite: true,
    centerPadding: "15px",
    slidesToShow: 5,
    adaptiveHeight: true,
    speed: 300,
  }

  return (
    <div>
      <h2 className="text-white py-2">Cartas Destacadas</h2>
      <Slider {...settings}>
        <div className="text-white mb-5">
          <Image imgClass="img-fluid m-auto center__image" src="/images/BWP_ES_BW87.png" alt="Leafeon" />
          <div className="mx-3 mt-3">
            <H5>Leafeon</H5>
            <p className="center__desc">Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.</p>
          </div>
        </div>
        <div className="text-white">
          <Image imgClass="img-fluid m-auto center__image" src="/images/BWP_ES_BW88.png" alt="Flareon" />
          <div className="mx-3 mt-3">
            <H5>Flareon</H5>
            <p className="center__desc">Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, tu rival lanza una moneda. Si sale cruz, ese ataque no hace nada.</p>
          </div>
        </div>
        <div className="text-white">
          <Image imgClass="img-fluid m-auto center__image" src="/images/BWP_ES_BW89.png" alt="Vaporeon" />
          <div className="mx-3 mt-3">
            <H5>Vaporeon</H5>
            <p className="center__desc">Hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia para los Pokémon en Banca.)</p>
          </div>
        </div>
        <div className="text-white">
          <Image imgClass="img-fluid m-auto center__image" src="/images/BWP_ES_BW90.png" alt="Glaceon" />
          <div className="mx-3 mt-3">
            <H5>Glaceon</H5>
            <p className="center__desc">Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.</p>
          </div>
        </div>
        <div className="text-white">
          <Image imgClass="img-fluid m-auto center__image" src="/images/BWP_ES_BW91.png" alt="Jolteon" />
          <div className="mx-3 mt-3">
            <H5>Jolteon</H5>
            <p className="center__desc">Puedes descartar una Energía Lightning unida a este Pokémon. Si lo haces, este ataque hace 40 puntos de daño más.</p>
          </div>
        </div>
        <div className="text-white">
          <Image imgClass="img-fluid m-auto center__image" src="/images/BWP_ES_BW99.png" alt="Genesect" />
          <div className="mx-3 mt-3">
            <H5>Genesect</H5>
            <p className="center__desc">Lanza una moneda. Si sale cara, descarta una Energía unida al Pokémon Defensor.</p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default CardSlider;


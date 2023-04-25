import React from "react";
import "../Styles/AboutUs.css";
import logo from "../Images/air-canada-2-logo-png-transparent.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div>
        <h1>About Us</h1>
      </div>
      <div className="background-logo">
        <img src={logo} />
      </div>
      <div className="about-us-container">
        <div>
          <strong>Qui sommes-nous?</strong>
        </div>
        <div>
          Chez SuicidAir, votre priorité est notre confort. Nous faisons tout ce
          qui n’est pas en notre possible pour vous assurer un vol long et
          désagréable. SuicidAir, la compagnie aérienne nationale de
          l’Absurdistan, vous propose une foule de destinations variées.
        </div>
        <br />
        <br />

        <div>
          <strong>Confort et sécurité </strong>
        </div>
        <div>
          Il est important pour nous que vous soyez à votre aise et en sécurité
          tout au long de votre vol. Voilà pourquoi nous avons mis en place
          plusieurs mesures uniques à notre compagnie. Tout d’abord, l’option «
          Devenez votre propre pilote » vous permet littéralement prendre le
          contrôle de l’appareil. Premier arrivé, premier servi! Ensuite,
        </div>
        <br />
        <br />
        <div>
          asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf
          asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf
          asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf
          asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf
          asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf
          asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf
          asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf asfdgasdf
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

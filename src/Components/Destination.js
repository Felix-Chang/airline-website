import React from "react";
import logo from "../Images/air-canada-2-logo-png-transparent.jpg";
import "../Styles/Destination.css";
import Conseil from "./Conseil";
import { conseil } from "./conseil_texte";
const Destination = () => {
  return (
    <div>
      <div>
        <h1>Destination</h1>
        <div className="destination-logo">
          <img src={logo} />
        </div>
      </div>
      <div className="destination-content">
        <div className="general">
          <div className="sub-header">Description generale du pays</div>
          <div>
            Absurdistan: L’Absurdistan est LA destination voyage de votre
            automne 2023! Situé à la frontière de du Lesotho et de la
            Yougoslavie, l’Absurdistan est un incontournable de l’Amérique du
            Sud! Ses paysages désertiques rappellent la beauté des pays
            nordiques et ses plaines montagneuses vous donneront le vertige.
            L’Absurdistan est la destination numéro 1 chez nos clients qui n’ont
            jamais voyagé! Vous n’en reviendrez pas! Littéralement! En 2025, sur
            les 7 clients à avoir voyagé avec SuicidAir en Absurditan, seuls 9
            sont revenus sains et saufs!
          </div>
        </div>
        <div className="destination-description">
          <div className="left">
            <div className="description-img">
              <img src={logo} />
            </div>
            <Conseil number={1} text={conseil.first} />
            <Conseil number={2} text={conseil.second} />
          </div>
          <div className="right">
            <div className="description-img">
              <img src={logo} />
            </div>
            <Conseil number={1} text={conseil.first} />
            <Conseil number={2} text={conseil.second} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Destination;

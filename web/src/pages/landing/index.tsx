import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcons from "../../assets/images/icons/study.svg";
import giveClassesIcons from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcons from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

import "./styles.css";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data

      setTotalConnections(total)
    })
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcons} alt="Estudar" />
            Estudar
          </Link>

          <Link to="give-classes" className="give-classes">
            <img src={giveClassesIcons} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões ja realizadas
          <img src={purpleHeartIcons} alt="Coração roxo"></img>
        </span>
      </div>
    </div>
  );
}

export default Landing;

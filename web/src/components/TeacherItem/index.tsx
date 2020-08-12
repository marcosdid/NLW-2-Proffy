import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/60055989?s=460&u=e690f902b4003c72e754e1a7c4929fb1b4628b73&v=4"
          alt="Marcos Alves"
        />

        <div>
          <strong>Marcos Alves</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
        dolorem
        <br />
        <br />
        tenetur facilis debitis labore quaerat quisquam hic! Praesentium
        dolorem, aut quidem, eos minus, dolore cupiditate veniam consectetur
        architecto corporis voluptatum!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,90</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;

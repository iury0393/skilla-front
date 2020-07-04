import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/Directory/directory.component";
import Trophy from '../../assets/trophy.svg';

const HomePage = () => (
  <div className="homepage">
    <img className="icone-principal" src={Trophy} alt=""/>
    <p className="text-principal">Skilla é um projeto feito por alunos da unifor para estagiários<br />Terem chance no mercado de TI.</p>
    <p className="text-principal">O que oferecemos na aplicação:</p>
    <Directory/>
  </div>
);

export default HomePage;

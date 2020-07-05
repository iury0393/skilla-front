import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/Directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <div className="text-principal">
      Bem vindo ao Skilla!
      <p className="text-principal">
        Consiga um emprego e se aprimore no mercado de trabalho com a gente!
      </p>
    </div>
    <Directory/>
  </div>
);

export default HomePage;

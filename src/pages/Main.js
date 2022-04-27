import React, { Component } from "react";
import styled from "styled-components";
import IconCoracao from "../assets/icon-coracao.png";
import IconLegal from "../assets/icon-legal.svg";
import CapitaoFantastico from "../assets/capitao-fantastico.png";



class Main extends Component {
  state = {
    filme: [
      {
        Img: CapitaoFantastico
      },
    ]
  };

  render() {
    return (
      <div>
          <div className="box-capitao">
            <img className="img-capitao" src={CapitaoFantastico} alt="capitao fantastico"/>
            <div className="box-capitao-two">
            <img className="icon-coracao" src={IconCoracao} alt="Icon coração"/>
            <p className="paragrafo-visto">Visto recentemente</p>
            <h1 className="box-h1-capitao">Capitão Fantástico</h1>
            <p className="paragrafo-capitao-texto">Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
            <div className="box-icon-legal">
            <p className="paragrafo">4/5</p>
            <img className="icon-legal" src={IconLegal} alt="icon"/>
            </div>
            </div>
            </div>

      </div>
    );
  }
}

export default Main;
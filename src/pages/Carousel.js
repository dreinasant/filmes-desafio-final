import React, { Component } from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";
import Shrek from "../assets/shrek.png";
import HojeEuQuero from "../assets/hoje-eu-quero.png";
import SpiderMan from "../assets/spider-man.png";
import SonhoDeLib from "../assets/sonho-de-lib.png";
import QueHorasElaVolta from "../assets/que-horas-ela-volta.png";

import CoracaoCinza from "../assets/icon-coracao-cinza.svg";
import IconeLegal from "../assets/icon-legal.svg";
import IconMaoWhiteOne from "../assets/icon-mao-white-home.svg";
import IconMaoOrange from "../assets/icon-mao-orange-home.svg";
import IconCoracaoWhiteOne from "../assets/icon-coracao-white-home1.svg";



const BoxCarousel = styled(Carousel)`
color: white;

`
const Seta = styled.svg`
  fill: white;
  opacity: 10;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  bottom: 1vw;
  right: 7px;

  &:hover {
  opacity: 0.6;
  }
`;

const Descricao = styled.p`
color: white;
font-size: 0.6em;
font-family: Arial;
margin-top: 0.3vw;
width: 39vh;
height: 8vh;
margin-bottom: 2.3vw;
`;

export default class carousel extends Component {


    state = {
        filmes: [
          {
            Image: CoracaoCinza,  
            Img: Shrek,
            Nome: "Shrek",
            Avaliacao: "4/5",
            Imagem: IconeLegal,
            Descricao: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
          },
          {
            Image: IconCoracaoWhiteOne, 
            Img: HojeEuQuero,
            Nome: "Hoje Eu Quero Voltar Sozinho",
            Avaliacao: "-",
            Imagem: IconMaoWhiteOne,
            Descricao: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
          },
          {
            Image: IconCoracaoWhiteOne,
            Img: SpiderMan,
            Nome: "Spider Man",
            Avaliacao: "3/5",
            Imagem: IconMaoOrange,
            Descricao: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
          },
          {
            Image: CoracaoCinza,
            Img: SonhoDeLib,
            Nome: "Um Sonho de Liberdade",
            Avaliacao: "4,4/5",
            Imagem: IconeLegal,
            Descricao: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento para sobreviver à prisão.",
          },
          { 
            Image: CoracaoCinza,
            Img: QueHorasElaVolta, 
            Nome: "Que Horas Ela Volta?",
            Avaliacao: "-",
            Imagem: IconMaoWhiteOne,
            Descricao: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
          }
        ]
      };


  render() {
    return (
      <div className="intro-carousel">
          <h2 className="intro-h2">Destaques</h2>
        <BoxCarousel
        autoplayReverse={false}
          renderCenterLeftControls={({ previousSlide }) => (
            <Seta
              onClick={previousSlide}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </Seta>
          )}
    
          renderCenterRightControls={({ nextSlide }) => (
            <Seta onClick={nextSlide} 
            xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></Seta>
        )}
        dragging={true}
        wrapAround={true}
        autoplay={true}
        autoplayInterval={2000}
        slidesToShow={5}
        cellSpacing={10}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "none",
          }
        }}
      >

      
      {this.state.filmes.map((item) => (
        <div>
          
          <div>
            <img className="icon-coracao-carousel" src={item.Image} alt="icon-coracao"/>
            <img className="imgs-filmes-carousel" src={item.Img} alt="imagens-filmes"/>
          </div>

            <div className="container-title-carousel">
            <h1 className="title-filmes-carousel"> {item.Nome} </h1>
            
            <div className="intro-avaliacao">
            <p className="paragrafo-avaliacao-carousel"> {item.Avaliacao} </p>
            <img className="icon-legal-carousel" src={item.Imagem} alt="Icone-legal"/>
            </div>
            </div>

            
            <div className="intro-descricao">
               <p className="paragrafo-descricao"> {item.Descricao} </p>
            </div>


          </div>
        ))}
        
        </BoxCarousel>
      </div>
    );
  }
}
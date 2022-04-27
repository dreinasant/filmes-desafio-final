import React, { Component } from "react";
import styled from "styled-components";
import Shrek from "../assets/shrek.png";
import HojeEuQuero from "../assets/hoje-eu-quero.png";
import SpiderMan from "../assets/spider-man.png";
import SonhoDeLib from "../assets/sonho-de-lib.png";
import QueHorasElaVolta from "../assets/que-horas-ela-volta.png";
import FugaGalinha from "../assets/fuga-galinha.jpg";
import Emicida from "../assets/amar-elo.jpg";
import Rocketman from "../assets/rocketman.jpg";

import CoracaoCinza from "../assets/icon-coracao.png";
import CoracaoWhite from "../assets/icon-coracao-branco1.svg";

import IconeLegal from "../assets/icon-mao.svg";
import IconLegalBrancoOne from "../assets/icon-mao-branco1.svg";
import IconLegalOrangeOne from "../assets/icon-mao-orange1.svg";
import IconLegalWhiteOne from "../assets/icon-mao-white2.svg";
import IconLegalRedOne from "../assets/icon-mao-red1.svg";
import IconLegalBrancoThree from "../assets/icon-mao-branco3.svg";
import Lupa from "../assets/icon-lupa.png";


const InputHome = styled.input`

  background-image: url(${Lupa});
  background-color: #2C2C2C;
  background-position: 1%;
  background-repeat: no-repeat;
  border: none;
  width: 400px;
  height: 31px;
  padding-left: 30px;
  color: white;

  position: relative;
  top: -50.3px;
  left: 60vw;
`


export default class Todos extends Component {

  state = {
    TodosOsFilmes: [
      {
        Image: CoracaoCinza,  
        Img: Shrek,
        Nome: "Shrek",
        Avaliacao: "4/5",
        Imagem: IconeLegal,
        Descricao: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
      },
      {
        Image: CoracaoWhite, 
        Img: HojeEuQuero,
        Nome: "Hoje Eu Quero Voltar Sozinho",
        Avaliacao: "-",
        Imagem: IconLegalBrancoOne,
        Descricao: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
      },
      {
        Image: CoracaoWhite,
        Img: SpiderMan,
        Nome: "Spider Man",
        Avaliacao: "3/5",
        Imagem: IconLegalOrangeOne,
        Descricao: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      },
      {
        Image: CoracaoCinza,
        Img: SonhoDeLib,
        Nome: "Um Sonho de Liberdade",
        Avaliacao: "4,5/5",
        Imagem: IconeLegal,
        Descricao: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
      },
      { 
        Image: CoracaoCinza,
        Img: QueHorasElaVolta, 
        Nome: "Que Horas Ela Volta?",
        Avaliacao: "-",
        Imagem: IconLegalWhiteOne,
        Descricao: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
      },
      { 
        Image: CoracaoCinza,
        Img: FugaGalinha, 
        Nome: "A Fuga das Galinhas",
        Avaliacao: "2/5",
        Imagem: IconLegalRedOne,
        Descricao: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",
      },
      { 
        Image: CoracaoWhite,
        Img: Emicida, 
        Nome: "AmarElo",
        Avaliacao: "5/5",
        Imagem: IconeLegal,
        Descricao: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.",
      },
      { 
        Image: CoracaoCinza,
        Img: Rocketman, 
        Nome: "Rocketman",
        Avaliacao: "-",
        Imagem: IconLegalBrancoThree,
        Descricao: "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.",
      },
    ],
    filmesFiltrados: []
  };

  filtro = (event) =>{
    this.setState({filmesFiltrados : this.state.TodosOsFilmes})

    const FiltroFilmes = this.state.filmesFiltrados.filter((item) =>{
        if(item.Nome.toLowerCase().includes(event.target.value.toLowerCase())){
            return true;
        }
    });

    this.setState({
      filmesFiltrados : FiltroFilmes
    });
}

componentDidMount (){
    this.setState({filmesFiltrados: this.state.TodosOsFilmes})
}


  render() {
    return (
      
      <div>
        <InputHome className="inputfilter" onChange={this.filtro} type="text" placeholder="Pesquisar" />
        <div> 
          <h2 className="h2-todos">Todos</h2>
        </div>

        <div className="container-todos">
        {this.state.filmesFiltrados.map((item) => (

        <div>

            <div>
            <img className="container-img-filmes" src={item.Img} alt="imagens-filmes"/>
            <img className="img-coracao-todos" src={item.Image} alt="icon-coracao"/>
            </div>

            <div className="container-title-todos">
            <h1 className="title-filmes-todos"> {item.Nome} </h1>
            
            <div className="container-avaliacao-todos">
            <p className="paragrafo-todos-avaliacao"> {item.Avaliacao} </p>
            <img className="icon-legal-todos" src={item.Imagem} alt="Icone-legal"/>
            </div>
            </div>

            <div>
            <p className="container-descricao"> {item.Descricao} </p>
            </div>

            </div>
        
          ))}
          </div>
          </div>
          
    );
  }
}
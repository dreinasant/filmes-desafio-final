import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Categorias from "./pages/Categorias";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Logo from "../src/assets/logo.png";
import SetaParaBaixo from "../src/assets/seta-para-baixo.png";
import Lupa from "../src/assets/icon-lupa.png";
import IconBoneco from "../src/assets/icon-boneco.png";
import IconSetaBoneco from "../src/assets/icon-seta-boneco.png";
import Butom from "./components/Button";

import Todos from "./ListCategoria/Todos";
import Favoritos from "./ListCategoria/Favoritos";
import JáVistos from "./ListCategoria/Vistos";
import Adicionados from "./ListCategoria/Adicionados";



const GlobalStyle = createGlobalStyle`
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  list-style: none;
}
`;

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

`

const LinkHomeInicio = styled(Link)`
  color: white;
  text-decoration: none;
  
  &:hover{
    opacity: 0.5;
  }
`;

const Input = styled.input`


`
const LinkTodos = styled(Link)`
  color: white;
  text-decoration: none;
  display: none;
 
`




export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <nav className="nav-header">
          <div className="container">
          <ul className="box-list">
          <li className="intro-li">
              <a href="http://localhost:3000/"><img className="img-logo" src={Logo} alt="logo"/></a>
            </li>
            <li className="intro-li">
              <LinkHomeInicio to="/">Inicio</LinkHomeInicio>
            </li>
            <li className="intro-li">
              <Categorias/>
              <img
                className="img-seta-categoria"
                src={SetaParaBaixo}
                alt="seta-para-baixo"
              />
            </li>

            <li>
              <LinkTodos to="/todos">Todos</LinkTodos>
              </li>

              <li>
              <LinkTodos to="/favoritos">Favoritos</LinkTodos>
            </li>

            <li>
              <LinkTodos to="/javistos">Já Vistos</LinkTodos>
            </li>

            <li>
              <LinkTodos to="/adicionados">Adicionados</LinkTodos>
            </li>

          </ul>
          </div>
          <div className="box">

            <Butom/>
          
          <InputHome className="input-home" type="text" placeholder="Pesquisar"/>
          
          </div>
          <div>
          <img className="icon-boneco-home" src={IconBoneco} alt="icon-boneco"/>
          <img className="icon-seta-boneco" src={IconSetaBoneco} alt="seta-icon-boneco"/>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/todos" element={<Todos/>}/>
          <Route path="/favoritos" element={<Favoritos/>}/>
          <Route path="/javistos" element={<JáVistos/>}/>
          <Route path="/adicionados" element={<Adicionados/>}/>
        </Routes>
      </Router>

    );
  }
}
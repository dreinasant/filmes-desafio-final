import React, { Component } from "react";


export default class Categorias extends Component {
        state = {
          stateList: false
        };
      
        handleList = () => {
          this.setState({ stateList: !this.state.stateList });
        };
      

        render() {
            return (
                
              <div className="box-dropdown">
                <button className="botao-categorias">Categorias</button>
                
                  <div className="box-butom">
                  <a href="todos">Todos</a>
                  <a href="favoritos">Favoritos</a>
                  <a href="javistos">Já vistos</a>
                  <a href="adicionados">Adicionados</a>
                  </div>
                
                
              </div>
            );
          }
        }
import React, { useState } from "react";
import Modal from "./Modal";
import "../styles.scss";

function Butom() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App">
      <button className="button-home" onClick={() => setIsModalVisible(true)}>Adicionar filme</button>
      {isModalVisible ? ( 
      <Modal onClose={() => setIsModalVisible (false)}>
        <h2 className="box-h2-modal" >Modal</h2>
        </Modal> 
        ) : null}
    </div>
  );
}

export default Butom;
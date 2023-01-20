import React, { useState } from "react";
import { firebaseDB } from "../firebaseconfig";
import { doc, deleteDoc } from "firebase/firestore";
import { Modal } from "./Modal";
import logo from "../assets/muneca.png";

const Producto = ({ producto, userId }) => {
  const { id, nombre, descripcion, edadminima, compania, precio } = producto;

  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const deleteProducto = async () => {
    try {
      if (window.confirm("Deseas eliminar el producto")) {
        await deleteDoc(doc(firebaseDB, "productos", id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card mb-4" style={{ width: "14rem", margin: "10px" }}>
      <div className="card-header">
        <img
          className="card-img-top"
          src={logo}
          alt="Card image cap"
          style={{ height: "100%", width: "66px", margin: "10px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <span>Nombre:</span> {nombre}
        </h5>
        <p className="card-text" style={{ color: "#171a4a" }}>
          Descripcion: {descripcion}
        </p>
        <h6 className="card-text">Edad minima: {edadminima}</h6>
        <h6 className="card-text">Compania: {compania}</h6>
        <h6 className="card-text">Precio: {precio}</h6>
      </div>
      <br />
      <div
        className="card-footer"
        style={{
          backgroundColor: "pink",
          height: "100%",
          width: "117px",
          margin: "10px",
        }}
      >
        <div className="action-icons icons-card-producto">
          <i
            className="material-icons action-icon"
            role="button"
            title="Edit"
            onClick={showModal}
          >
            edit
          </i>
          <i
            className="material-icons action-icon"
            role="button"
            title="Delete"
            onClick={deleteProducto}
          >
            delete
          </i>
        </div>
      </div>

      {isVisible && (
        <Modal
          mode="edit"
          isVisible={isVisible}
          producto={producto}
          hideModal={hideModal}
        />
      )}
    </div>
  );
};

export default Producto;

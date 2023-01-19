import React, { useState } from "react";
import ReactModal from "react-modal";
import { firebaseDB } from "../firebaseconfig";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const customStyles = {
  content: {
    minHeight: "40%",
    width: "35%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    backgroundColor: "white",
    boxShadow:
      "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
  },
};

export const Modal = ({ producto, mode, isVisible, hideModal }) => {
  console.log(producto);
  const { id, nombre, descripcion, edadminima, compania, precio } = producto;
  //const uid = userId;

  const [newNombre, setNewNombre] = useState(nombre);
  const [newDescripcion, setNewDescripcion] = useState(descripcion);
  const [newEdadminima, setNewEdadminima] = useState(edadminima);
  const [newCompania, setNewCompania] = useState(compania);
  const [newPrecio, setNewPrecio] = useState(precio);

  const [isOpen, setIsOpen] = useState(isVisible);

  const handleNombreChange = (e) => setNewNombre(e.target.value);
  const handleDescripcionChange = (e) => setNewDescripcion(e.target.value);
  const handleEdadminimaChange = (e) => setNewEdadminima(e.target.value);
  const handleCompaniaChange = (e) => setNewCompania(e.target.value);
  const handlePrecioChange = (e) => setNewPrecio(e.target.value);

  const closeModal = () => {
    setIsOpen(false);
    hideModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "edit") {
      updateProducto();
    } else {
      createProducto();
    }
  };

  const createProducto = async () => {
    try {
      if (
        newNombre === "" ||
        newDescripcion === "" ||
        newEdadminima === "" ||
        newCompania === "" ||
        newPrecio === ""
      ) {
        alert("los campos deben estar llenos, para crear el producto");
      } else {
        await addDoc(collection(firebaseDB, "productos"), {
          nombre: newNombre,
          descripcion: newDescripcion,
          edadminima: newEdadminima,
          compania: newCompania,
          precio: newPrecio,
          fecha: Date.now(),
        });
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateProducto = async () => {
    try {
      if (
        newNombre === "" ||
        newDescripcion === "" ||
        newEdadminima === "" ||
        newCompania === "" ||
        newPrecio === ""
      ) {
        alert("los campos deben estar llenos, para actualizar el producto");
      } else {
        await setDoc(doc(firebaseDB, "productos", id), {
          nombre: newNombre,
          descripcion: newDescripcion,
          edadminima: newEdadminima,
          compania: newCompania,
          precio: newPrecio,
          fecha: Date.now(),
        });
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      appElement={document.getElementById("root")}
    >
      <div className="modal-header">
        <span className="material-icons modal-close-btn" onClick={closeModal}>
          cancel
        </span>
      </div>
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="div-campos-modal">
          <p>NOMBRE</p>
          <input
            className="input-modal"
            type="text"
            value={newNombre}
            placeholder="Nombre del juguete"
            onChange={handleNombreChange}
          />
        </div>
        <div className="div-campos-modal">
          <p>DESCRIPCION</p>
          <textarea
            className="textarea-descripcion"
            rows="5"
            cols="40"
            type="text"
            value={newDescripcion}
            placeholder="Descripcion del juguete"
            onChange={handleDescripcionChange}
          />
        </div>

        <div className="div-campos-modal">
          <p>EDAD MINIMA</p>
          <input
            className="input-modal"
            type="text"
            value={newEdadminima}
            placeholder="Edad minima"
            onChange={handleEdadminimaChange}
          />
        </div>
        <div className="div-campos-modal">
          <p>COMPANIA</p>
          <input
            className="input-modal"
            type="text"
            value={newCompania}
            placeholder="Compania"
            onChange={handleCompaniaChange}
          />
        </div>
        <div className="div-campos-modal">
          <p>PRECIO</p>
          <input
            className="input-modal"
            type="text"
            value={newPrecio}
            placeholder="Precio"
            onChange={handlePrecioChange}
          />
        </div>

        {mode === "edit" ? (
          <button type="submit" className="edit-btn">
            {" "}
            Editar Producto
          </button>
        ) : (
          <button type="submit" className="create-btn">
            {" "}
            Crear Producto
          </button>
        )}
      </form>
    </ReactModal>
  );
};

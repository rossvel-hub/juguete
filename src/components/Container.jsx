import React, { useState } from "react";
import Producto from "./Producto";
import { useData } from "../hooks/useData";
import { Modal } from "./Modal";

const Container = () => {
  const { docs: productos, userId } = useData("productos");
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
  };

  const hideModal = () => setIsVisible(false);
  const newProducto = {
    nombre: "",
    descripcion: "",
    edadminima: "",
    compania: "",
    precio: "",
  };

  return (
    <div className="container">
      <header className="productoss-header">
      <div className="btn-add-producto-modal">
        <button className="big-add" onClick={showModal}>
          AGREGAR PRODUCTO
        </button>
        {isVisible && (
          <Modal
            mode="create"
            isVisible={true}
            producto={newProducto}
            hideModal={hideModal}
          />
        )}
      </div>
      </header>

      <div className="productos-container">
        <div className="productos-grid ">
          {productos.map((producto) => (
            <Producto key={producto.id} producto={producto} userId={userId} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Container;

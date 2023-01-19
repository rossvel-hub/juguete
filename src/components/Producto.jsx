import React, {useState} from "react";
import { firebaseDB } from '../firebaseconfig'
import { doc, deleteDoc } from "firebase/firestore";
import{ Modal } from "./Modal";


const Producto = ({producto, userId}) => {
    // const fecha = new Date(producto.fecha).toLocaleDateString('es-MX',{year:'numeric', month:'2-digit', day:'2-digit'});
    console.log("producto");
    const { id, nombre, descripcion, edadminima, compania, precio} = producto;

    const [isVisible, setIsVisible ] = useState(false);
    const showModal= () => setIsVisible(true);
    const hideModal = () => setIsVisible(false);

    const deleteProducto = async () => {
        try{
            if(window.confirm('Deseas eliminar el producto')){
                await deleteDoc(doc(firebaseDB, 'productos', id))
            }
        }catch (error) {
            console.error(error);
        }
    }


  return (
    <article className='producto-card'>
			<div className='producto-card-header'>
				<h3>Nombre: {nombre}</h3>
			</div>
				<div className='producto-card-body'>
					<p>Descripcion: {descripcion}</p>
                    <p>Edad minima: {edadminima}</p>
                    <p>Compania: {compania}</p>
                    <p>Precio: {precio}</p>
					<br/>
				</div>
			<div className='producto-card-footer'>
				{/* <p className='date-last-modification'>{fecha}</p> */}
				<div className="action-icons">
				<i className="material-icons action-icon" role="button" title="Edit" onClick={showModal}>edit</i>
				<i className="material-icons action-icon" role="button" title="Delete" onClick={deleteProducto} >delete</i>
				</div>
			</div>

		{
			isVisible &&
			<Modal note={producto} mode='edit' isVisible={isVisible} hideModal={hideModal} userId={userId}/>
		}
		</article>
  )
}

export default Producto
import React, {useState}from 'react';
import ReactModal from 'react-modal';
import { firebaseDB } from '../firebaseconfig';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const customStyles = {
	content: {
	minHeight: '40%',
	width: '65%',
	top: '50%',
	left: '50%',
	right: 'auto',
	bottom: 'auto',
	transform: 'translate(-50%, -50%)',
	borderRadius: '15px',
	backgroundImage: 'linear-gradient(to top, rgb(214, 205, 241) 30%, rgb(222, 236, 235) 100%)',
	boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)'
	},
};

export const Modal = (producto, mode, isVisible, hideModal, userId) => {
    const { id, nombre, descripcion,edadminima, compania, precio} = producto;
	const uid = userId;
	const [newNombre, setNewNombre] = useState(nombre);
	const [newDescripcion, setNewDescripcion] = useState(descripcion);
	const [newEdadminima, setNewEdadminima] = useState(edadminima);
	const [newCompania, setNewCompania] = useState(compania);
	const [newPrecio, setNewPrecio] = useState(precio);



	const [isOpen, setIsOpen] = useState(isVisible);
	const closeModal = () => {
		setIsOpen(false);
		hideModal();
	};

	const handleNombreChange = e => setNewNombre(e.target.value);
	const handleDescripcionChange = e => setNewDescripcion(e.target.value);
	const handleEdadminimaChange = e => setNewEdadminima(e.target.value);
	const handleCompaniaChange = e => setNewCompania(e.target.value);
	const handlePrecioChange = e => setNewPrecio(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();
		if (mode === 'edit') {
			updateProducto();
		} else {
			createProducto();
		}

	}

	const createProducto = async () => {
		try {
			if (newNombre === '' || newDescripcion === '') {
				alert('los campos deben estar llenos, para crear el producto');
			} else {
				await addDoc(collection(firebaseDB, 'productos'), {
					nombre: newNombre,
					descripcion: newDescripcion,
					edadminima: newEdadminima,
					compania:newCompania,
					precio:newCompania,
					fecha: Date.now(),
					uid: uid,
				})
				closeModal();
			}

		} catch (error) {
			console.error(error);
		}
	}

	const updateProducto = async () => {
		try {
			if (newNombre === '' || newDescripcion === '') {
				alert('los campos deben estar llenos, para actualizar el producto');
			} else {
				await setDoc(doc(firebaseDB, 'productos', id), {
					nombre: newNombre,
					descripcion: newDescripcion,
					edadminima: newEdadminima,
					compania:newCompania,
					precio:newCompania,
					fecha: Date.now(),
					uid: uid,
				})
				closeModal();
			}

		} catch (error) {
			console.error(error);
		}
	}

	return (
		<ReactModal isOpen={isOpen} style={customStyles} appElement={document.getElementById('root')}>
			<div className='modal-header'>
				<span className='material-icons modal-close-btn' onClick={closeModal}>
					cancel
				</span>
			</div>
			<form className='modal-form' onSubmit={handleSubmit}>
				<input className='input-nombre' type='text' value={newNombre} placeholder='Nombre del juguete' onChange={handleNombreChange} />
				<textarea className='textarea-descripcion' type='text' value={newDescripcion} placeholder='Descripcion del juguete' onChange={handleDescripcionChange} />
				<input className='input-edadMinima' type='text' value={newEdadminima} placeholder='Edad minima' onChange={handleEdadminimaChange} />
				<input className='input-compania' type='text' value={newCompania} placeholder='Compania' onChange={handleCompaniaChange} />
				<input className='input-precio' type='text' value={newPrecio} placeholder='Precio' onChange={handlePrecioChange} />

				{
					mode === 'edit' ?
						<button type='submit' className='edit-btn'> Editar Producto</button> :
						<button type='submit' className='create-btn'> Crear Producto</button>
				}
			</form>
		</ReactModal>
	)
}

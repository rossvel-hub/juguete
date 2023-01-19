import React, {Fragment, useState} from 'react'
import Producto from './Producto'
import { useData } from '../hooks/useData'
import { Modal } from './Modal'


const Container = () => {
	
    const { docs: productos, userId } = useData('productos');
	const [isVisible, setIsVisible] = useState(false);

    const showModal = () => setIsVisible(true);
	const hideModal = () => setIsVisible(false);

    console.log(useData('productos'));

    const newProducto = {nombre: '', descripcion:''}

  return (
    <Fragment>
			<header className="productoss-header">
				<h3 className='color-user'><br/>Productos</h3>
			</header>

			<div className='productos-container'>
					<div className='notes-grid'>
						{   
							productos.map((producto) => (
								<Producto key={producto.id} producto={producto} userId={userId}/>
							))
						}
					</div>
			</div>
			<button className='big-add show-add-note' onClick={showModal}>
				<i className='material-icons'>add</i>
			</button>
			{
				isVisible &&
				<Modal mode='create' isVisible={isVisible} note={newProducto} hideModal={hideModal} userId={userId}/>
			}
		</Fragment>
  )
}

export default Container
import { useState, useEffect } from 'react';
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  // inicia con el pedido que hay guardado en el localstorage y se pone en el state
  useEffect(() => {
      const carritoLS = JSON.parse( localStorage.getItem('carrito')) ?? [];
      setCarrito(carritoLS)
  }, []);

  // guardamos en el storage el pedido del carrito para no perderlo
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = producto => {
    // Controla que no se duplique el pedido en el carrito
    if(carrito.some( articulo => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo) => {
          if(articulo.id === producto.id ) {
            articulo.cantidad = producto.cantidad;
          }
          return articulo;
      });
      // agrega el carrito actualizado
      setCarrito(carritoActualizado);

    } else {
      setCarrito([...carrito, producto]);
    }    
  };

  // actualizar la cantidad ya cuando se ha realizado el pedido y se quiere modificar a última hora
  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if(articulo.id === producto.id ) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarrito(carritoActualizado);
  }

  // eliminar producto
  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( articulo => articulo.id !== id )
    setCarrito(carritoActualizado);
  };

  return (
      <Component
          {...pageProps} 
          carrito={carrito}
          agregarCarrito={agregarCarrito}
          actualizarCantidad={actualizarCantidad}
          eliminarProducto={eliminarProducto}
      />


  );

}

export default MyApp;

import React, { useState, useEffect, Fragment } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createPedido, createPedidoComida } from "../../graphql/mutations";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import '../../App.css';
import Header from '../../components/Header/Header_cliente';

export const Menu = () => {
  const [pedido, createPedido] = useState([]);
  const [listPedidos, setListPedidos] = useState([]);
  useEffect(() =>{
    async function getAllPedidos(){
        const allPedidos = await API.graphql({query: queries.listPedidos});
        setListPedidos(allPedidos.data.listPedidos.items);  
    }
    getAllPedidos();

}, []);
  const [estadoPedido, createEstadoPedido] = useState("PEDIDO");

  const [listComidas, setListComidas] = useState([]);
    useEffect(() =>{
        async function getAllComidas(){
            const allComidas = await API.graphql({query: queries.listComidas});
            setListComidas(allComidas.data.listComidas.items);  
        }
        getAllComidas();
    
    }, []);

  const agregarComidaPedido = (comida) => {
    const nuevoPedido = [...pedido, comida];
    createPedido(nuevoPedido);
  };

  return (
    <Fragment>
    <Header />
    <div>
      <h1>Menú</h1>
      <ul>
        {listComidas && listComidas.map(item => {return(
          <li key={item.id}>
            <img src={item.Foto} alt={item.Descripcion} width="200" />
            <h2>{item.Nombre}</h2>
            <p>{item.Descripcion}</p>
            <p>Precio: ${item.Precio}</p>
            <button>Agregar</button>
          </li>
          )})}
      </ul>
      <h2>Pedido</h2>
      <ul>
        {listPedidos && listPedidos.map(item => {return(
          <li key={item.id}>
            <h3>{item.Nombre}</h3>
            <p>Precio: ${item.Precio}</p>
          </li>
        )})}
      </ul>
      <button>Confirmar Pedido</button>
    </div>
    </Fragment>
  );
};

export default Menu;

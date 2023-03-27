import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createPedido, createPedidoComida } from "../../graphql/mutations";

const Menu = ({ comidas, mesa }) => {
  const [pedido, setPedido] = useState([]);
  const [estadoPedido, setEstadoPedido] = useState("PEDIDO");

  const agregarComidaPedido = (comida) => {
    const nuevoPedido = [...pedido, comida];
    setPedido(nuevoPedido);
  };

  const confirmarPedido = async () => {
    const input = {
      Estado: estadoPedido,
      mesaID: mesa.id,
      Comidas: pedido.map((comida) => ({ id: comida.id })),
    };

    const result = await API.graphql(graphqlOperation(createPedido, { input }));

    const pedidoId = result.data.createPedido.id;

    for (const comida of pedido) {
      const inputPedidoComida = {
        PedidoID: pedidoId,
        ComidaID: comida.id,
      };

      await API.graphql(
        graphqlOperation(createPedidoComida, { input: inputPedidoComida })
      );
    }

    setPedido([]);
  };

  return (
    <div>
      <h1>Menú</h1>
      <ul>
        {comidas.map((comida) => (
          <li key={comida.id}>
            <img src={comida.Foto} alt={comida.Descripcion} width="200" />
            <h2>{comida.Nombre}</h2>
            <p>{comida.Descripcion}</p>
            <p>Precio: ${comida.Precio}</p>
            <button onClick={() => agregarComidaPedido(comida)}>Agregar</button>
          </li>
        ))}
      </ul>
      <h2>Pedido</h2>
      <ul>
        {pedido.map((comida) => (
          <li key={comida.id}>
            <h3>{comida.Nombre}</h3>
            <p>Precio: ${comida.Precio}</p>
          </li>
        ))}
      </ul>
      <button onClick={confirmarPedido}>Confirmar Pedido</button>
    </div>
  );
};

export default Menu;

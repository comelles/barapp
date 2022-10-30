// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StatusPedido = {
  "PEDIDO": "PEDIDO",
  "ENTREGADO": "ENTREGADO",
  "PAGADO": "PAGADO",
  "CANCELADO": "CANCELADO"
};

const { Mesa, Pedido, Comida, PedidoComida } = initSchema(schema);

export {
  Mesa,
  Pedido,
  Comida,
  PedidoComida,
  StatusPedido
};
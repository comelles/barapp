import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum StatusPedido {
  PEDIDO = "PEDIDO",
  ENTREGADO = "ENTREGADO",
  PAGADO = "PAGADO",
  CANCELADO = "CANCELADO"
}

type MesaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PedidoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComidaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PedidoComidaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMesa = {
  readonly id: string;
  readonly nroMesa?: string | null;
  readonly Pedidos?: (Pedido | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMesa = {
  readonly id: string;
  readonly nroMesa?: string | null;
  readonly Pedidos: AsyncCollection<Pedido>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mesa = LazyLoading extends LazyLoadingDisabled ? EagerMesa : LazyMesa

export declare const Mesa: (new (init: ModelInit<Mesa, MesaMetaData>) => Mesa) & {
  copyOf(source: Mesa, mutator: (draft: MutableModel<Mesa, MesaMetaData>) => MutableModel<Mesa, MesaMetaData> | void): Mesa;
}

type EagerPedido = {
  readonly id: string;
  readonly Estado?: StatusPedido | keyof typeof StatusPedido | null;
  readonly Comidas?: (PedidoComida | null)[] | null;
  readonly mesaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPedido = {
  readonly id: string;
  readonly Estado?: StatusPedido | keyof typeof StatusPedido | null;
  readonly Comidas: AsyncCollection<PedidoComida>;
  readonly mesaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pedido = LazyLoading extends LazyLoadingDisabled ? EagerPedido : LazyPedido

export declare const Pedido: (new (init: ModelInit<Pedido, PedidoMetaData>) => Pedido) & {
  copyOf(source: Pedido, mutator: (draft: MutableModel<Pedido, PedidoMetaData>) => MutableModel<Pedido, PedidoMetaData> | void): Pedido;
}

type EagerComida = {
  readonly id: string;
  readonly Descripcion?: string | null;
  readonly Precio?: number | null;
  readonly Foto?: string | null;
  readonly Nombre?: string | null;
  readonly pedidos?: (PedidoComida | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComida = {
  readonly id: string;
  readonly Descripcion?: string | null;
  readonly Precio?: number | null;
  readonly Foto?: string | null;
  readonly Nombre?: string | null;
  readonly pedidos: AsyncCollection<PedidoComida>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comida = LazyLoading extends LazyLoadingDisabled ? EagerComida : LazyComida

export declare const Comida: (new (init: ModelInit<Comida, ComidaMetaData>) => Comida) & {
  copyOf(source: Comida, mutator: (draft: MutableModel<Comida, ComidaMetaData>) => MutableModel<Comida, ComidaMetaData> | void): Comida;
}

type EagerPedidoComida = {
  readonly id: string;
  readonly pedido: Pedido;
  readonly comida: Comida;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPedidoComida = {
  readonly id: string;
  readonly pedido: AsyncItem<Pedido>;
  readonly comida: AsyncItem<Comida>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PedidoComida = LazyLoading extends LazyLoadingDisabled ? EagerPedidoComida : LazyPedidoComida

export declare const PedidoComida: (new (init: ModelInit<PedidoComida, PedidoComidaMetaData>) => PedidoComida) & {
  copyOf(source: PedidoComida, mutator: (draft: MutableModel<PedidoComida, PedidoComidaMetaData>) => MutableModel<PedidoComida, PedidoComidaMetaData> | void): PedidoComida;
}
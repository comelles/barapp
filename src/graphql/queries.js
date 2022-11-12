/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMesa = /* GraphQL */ `
  query GetMesa($id: ID!) {
    getMesa(id: $id) {
      id
      nroMesa
      Pedidos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMesas = /* GraphQL */ `
  query ListMesas(
    $filter: ModelMesaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMesas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nroMesa
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMesas = /* GraphQL */ `
  query SyncMesas(
    $filter: ModelMesaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMesas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nroMesa
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPedido = /* GraphQL */ `
  query GetPedido($id: ID!) {
    getPedido(id: $id) {
      id
      Estado
      Comidas {
        nextToken
        startedAt
      }
      mesaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPedidos = /* GraphQL */ `
  query ListPedidos(
    $filter: ModelPedidoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPedidos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Estado
        mesaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPedidos = /* GraphQL */ `
  query SyncPedidos(
    $filter: ModelPedidoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPedidos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Estado
        mesaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComida = /* GraphQL */ `
  query GetComida($id: ID!) {
    getComida(id: $id) {
      id
      Descripcion
      Precio
      Foto
      Nombre
      pedidos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listComidas = /* GraphQL */ `
  query ListComidas(
    $filter: ModelComidaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComidas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Descripcion
        Precio
        Foto
        Nombre
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComidas = /* GraphQL */ `
  query SyncComidas(
    $filter: ModelComidaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComidas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Descripcion
        Precio
        Foto
        Nombre
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPedidoComida = /* GraphQL */ `
  query GetPedidoComida($id: ID!) {
    getPedidoComida(id: $id) {
      id
      pedidoID
      comidaID
      pedido {
        id
        Estado
        mesaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comida {
        id
        Descripcion
        Precio
        Foto
        Nombre
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPedidoComidas = /* GraphQL */ `
  query ListPedidoComidas(
    $filter: ModelPedidoComidaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPedidoComidas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pedidoID
        comidaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPedidoComidas = /* GraphQL */ `
  query SyncPedidoComidas(
    $filter: ModelPedidoComidaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPedidoComidas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pedidoID
        comidaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

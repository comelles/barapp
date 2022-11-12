/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMesa = /* GraphQL */ `
  subscription OnCreateMesa($filter: ModelSubscriptionMesaFilterInput) {
    onCreateMesa(filter: $filter) {
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
export const onUpdateMesa = /* GraphQL */ `
  subscription OnUpdateMesa($filter: ModelSubscriptionMesaFilterInput) {
    onUpdateMesa(filter: $filter) {
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
export const onDeleteMesa = /* GraphQL */ `
  subscription OnDeleteMesa($filter: ModelSubscriptionMesaFilterInput) {
    onDeleteMesa(filter: $filter) {
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
export const onCreatePedido = /* GraphQL */ `
  subscription OnCreatePedido($filter: ModelSubscriptionPedidoFilterInput) {
    onCreatePedido(filter: $filter) {
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
export const onUpdatePedido = /* GraphQL */ `
  subscription OnUpdatePedido($filter: ModelSubscriptionPedidoFilterInput) {
    onUpdatePedido(filter: $filter) {
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
export const onDeletePedido = /* GraphQL */ `
  subscription OnDeletePedido($filter: ModelSubscriptionPedidoFilterInput) {
    onDeletePedido(filter: $filter) {
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
export const onCreateComida = /* GraphQL */ `
  subscription OnCreateComida($filter: ModelSubscriptionComidaFilterInput) {
    onCreateComida(filter: $filter) {
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
export const onUpdateComida = /* GraphQL */ `
  subscription OnUpdateComida($filter: ModelSubscriptionComidaFilterInput) {
    onUpdateComida(filter: $filter) {
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
export const onDeleteComida = /* GraphQL */ `
  subscription OnDeleteComida($filter: ModelSubscriptionComidaFilterInput) {
    onDeleteComida(filter: $filter) {
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
export const onCreatePedidoComida = /* GraphQL */ `
  subscription OnCreatePedidoComida(
    $filter: ModelSubscriptionPedidoComidaFilterInput
  ) {
    onCreatePedidoComida(filter: $filter) {
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
export const onUpdatePedidoComida = /* GraphQL */ `
  subscription OnUpdatePedidoComida(
    $filter: ModelSubscriptionPedidoComidaFilterInput
  ) {
    onUpdatePedidoComida(filter: $filter) {
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
export const onDeletePedidoComida = /* GraphQL */ `
  subscription OnDeletePedidoComida(
    $filter: ModelSubscriptionPedidoComidaFilterInput
  ) {
    onDeletePedidoComida(filter: $filter) {
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

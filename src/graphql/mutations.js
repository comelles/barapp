/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMesa = /* GraphQL */ `
  mutation CreateMesa(
    $input: CreateMesaInput!
    $condition: ModelMesaConditionInput
  ) {
    createMesa(input: $input, condition: $condition) {
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
export const updateMesa = /* GraphQL */ `
  mutation UpdateMesa(
    $input: UpdateMesaInput!
    $condition: ModelMesaConditionInput
  ) {
    updateMesa(input: $input, condition: $condition) {
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
export const deleteMesa = /* GraphQL */ `
  mutation DeleteMesa(
    $input: DeleteMesaInput!
    $condition: ModelMesaConditionInput
  ) {
    deleteMesa(input: $input, condition: $condition) {
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
export const createPedido = /* GraphQL */ `
  mutation CreatePedido(
    $input: CreatePedidoInput!
    $condition: ModelPedidoConditionInput
  ) {
    createPedido(input: $input, condition: $condition) {
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
export const updatePedido = /* GraphQL */ `
  mutation UpdatePedido(
    $input: UpdatePedidoInput!
    $condition: ModelPedidoConditionInput
  ) {
    updatePedido(input: $input, condition: $condition) {
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
export const deletePedido = /* GraphQL */ `
  mutation DeletePedido(
    $input: DeletePedidoInput!
    $condition: ModelPedidoConditionInput
  ) {
    deletePedido(input: $input, condition: $condition) {
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
export const createComida = /* GraphQL */ `
  mutation CreateComida(
    $input: CreateComidaInput!
    $condition: ModelComidaConditionInput
  ) {
    createComida(input: $input, condition: $condition) {
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
export const updateComida = /* GraphQL */ `
  mutation UpdateComida(
    $input: UpdateComidaInput!
    $condition: ModelComidaConditionInput
  ) {
    updateComida(input: $input, condition: $condition) {
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
export const deleteComida = /* GraphQL */ `
  mutation DeleteComida(
    $input: DeleteComidaInput!
    $condition: ModelComidaConditionInput
  ) {
    deleteComida(input: $input, condition: $condition) {
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
export const createPedidoComida = /* GraphQL */ `
  mutation CreatePedidoComida(
    $input: CreatePedidoComidaInput!
    $condition: ModelPedidoComidaConditionInput
  ) {
    createPedidoComida(input: $input, condition: $condition) {
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
export const updatePedidoComida = /* GraphQL */ `
  mutation UpdatePedidoComida(
    $input: UpdatePedidoComidaInput!
    $condition: ModelPedidoComidaConditionInput
  ) {
    updatePedidoComida(input: $input, condition: $condition) {
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
export const deletePedidoComida = /* GraphQL */ `
  mutation DeletePedidoComida(
    $input: DeletePedidoComidaInput!
    $condition: ModelPedidoComidaConditionInput
  ) {
    deletePedidoComida(input: $input, condition: $condition) {
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

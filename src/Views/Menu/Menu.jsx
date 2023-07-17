import React, { useState, useEffect, Fragment } from "react";
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import '../../App.css';
import Header_cliente from '../../components/Header/Header_cliente';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import '../../App.css';
import Button from 'react-bootstrap/Button';

export const Menu = () => {

  const [pedido, createPedido] = useState([]);

const [listPedidoComidas, setListPedidoComidas] = useState([]);
  useEffect(() =>{
    async function getAllPedidoComidas(){
        const allPedidoComidas = await API.graphql({query: queries.listPedidoComidas});
        setListPedidoComidas(allPedidoComidas.data.listPedidoComidas.items);  
    }
    getAllPedidoComidas();

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

  const agregarComidaPedido = ( getAllComidas, getAllPedidos ) => {
    const nuevoPedido = [...pedido];
    createPedido(nuevoPedido);
  };

  return (
    <Fragment>
    <Header_cliente />
    <div class="container bg-white rounded py-2">
      <h1 class="container bg-dark rounded py-2">Menú</h1>
      <div class="container bg-dark rounded my-2 py-2">
        {listComidas && listComidas.map(item => {return(
          <div id="items" class="d-inline-flex justify-content-center col-md-3 my-2 py-2">
            <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                <IconButton aria-label="add" sx={{ bgcolor: green[500] }} onClick={agregarComidaPedido}>
                  <Icon>add_circle</Icon>
                </IconButton>
                }
                title={item.Nombre}
            />
            <CardMedia
                component="img"
                height="194"
                image={item.Foto}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Descripcion: {item.Descripcion} <br></br>
                    Precio: ${item.Precio} <br></br>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
            </Card>
            </div> 
          </div> 
          )})}
        </div> 
      <h1 class="container bg-dark rounded py-2">Pedido</h1>
      <ul>
        {listPedidoComidas && listPedidoComidas.map(item => {return(
          <li key={item.id}>
            <h3>{item.Nombre}</h3>
            <p>Precio: ${item.Precio}</p>
          </li>
        )})}
      </ul>
      <Button variant="success" onClick={createPedido}>Confirmar Pedido</Button>
    </div>
    </Fragment>
  );
};

export default Menu;

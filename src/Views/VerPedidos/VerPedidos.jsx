import { useState, useEffect, Fragment } from 'react';
import '../../App.css';
import Header from '../../components/Header/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { styled as styled2 } from '@mui/material/styles';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const StyledTableCell = styled2(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled2(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export const VerPedidos = () => {

    const [listComidas, setListComidas] = useState([]);
    useEffect(() =>{
        async function getAllComidas(){
            const allComidas = await API.graphql({query: queries.listComidas});
            setListComidas(allComidas.data.listComidas.items);  
        }
        getAllComidas();
    
    
    }, []);
    //console.log(listComidas[0].Nombre)

    const [listPedidos, setListPedidos] = useState([]);
    useEffect(() =>{
        async function getAllPedidos(){
            const allPedidos = await API.graphql({query: queries.listPedidos});
            setListPedidos(allPedidos.data.listPedidos.items);  
        }
        getAllPedidos();
    
    
    }, []);
    console.log(listPedidos)

      const [style1, setStyle1] = useState("show");
  
      const changeStyleAbiertos = () => {
        console.log("Mostrar pedidos abiertos");
        setStyle1("show");
        setStyle2("hide");
        setStyle3("hide");
      };

      const [style2, setStyle2] = useState("hide");
  
      const changeStyleCerrados = () => {
        console.log("Mostrar pedidos cerrados");
        setStyle1("hide");
        setStyle2("show");
        setStyle3("hide");
      };

      const [style3, setStyle3] = useState("hide");
  
      const changeStyleCancelados = () => {
        console.log("Mostrar pedidos cancelados");
        setStyle1("hide");
        setStyle2("hide");
        setStyle3("show");
      };
    console.log(queries.listPedidos)

    return(
        <Fragment>
          <Header />
            <div class="container rounded bg-white mt-5 mb-5">
              <h1 class="texto2">Pedidos</h1>
              <div class="row p-2 py-6">
                <div className="col-md">
                  <button className="btn btn-success btn-lg btn-block" type="button" onClick={changeStyleAbiertos}>Abiertos</button>
                </div>
                <div className="col-md">
                  <button className="btn btn-danger btn-lg btn-block" type="button" onClick={changeStyleCerrados}>Cerrados</button>
                </div>
                <div className="col-md">
                  <button className="btn btn-warning btn-lg btn-block" type="button" onClick={changeStyleCancelados}>Cancelados</button>
                </div>
              </div>
            </div>
            <div className="container">
             <div className={style1}>
                <h1 class="texto">Pedidos abiertos</h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 5 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Mesa</StyledTableCell>
                                    <StyledTableCell>Pedido</StyledTableCell>
                                    <StyledTableCell>Precio total</StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">1</StyledTableCell>
                                        <StyledTableCell>Pedido 1</StyledTableCell>
                                        <StyledTableCell>$4500</StyledTableCell>
                                        <StyledTableCell><Button variant="success">Cerrar Pedido</Button></StyledTableCell>
                                    </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
              </div>
            </div>
            <div className="container">
              <div className={style2}>
                  <h1 class="texto">Pedidos cerrados</h1>
                      <TableContainer component={Paper}>
                          <Table sx={{ minWidth: 5 }} aria-label="customized table">
                              <TableHead>
                                  <TableRow>
                                    <StyledTableCell>Mesa</StyledTableCell>
                                    <StyledTableCell>Pedido</StyledTableCell>
                                    <StyledTableCell>Precio total</StyledTableCell>
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                                      <StyledTableRow>
                                          <StyledTableCell component="th" scope="row">2</StyledTableCell>
                                        <StyledTableCell>Pedido 2</StyledTableCell>
                                        <StyledTableCell>$2000</StyledTableCell>
                                      </StyledTableRow>
                              </TableBody>
                          </Table>
                      </TableContainer>
              </div>
            </div>
            <div className="container">
              <div className={style3}>
                <h1 class="texto">Pedidos cancelados</h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 5 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Mesa</StyledTableCell>
                                    <StyledTableCell>Pedido</StyledTableCell>
                                    <StyledTableCell>Precio total</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">3</StyledTableCell>
                                        <StyledTableCell>Pedido 3</StyledTableCell>
                                        <StyledTableCell>$9900</StyledTableCell>
                                    </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
              </div>
            </div>
    </Fragment>
           );
    };

export default VerPedidos;
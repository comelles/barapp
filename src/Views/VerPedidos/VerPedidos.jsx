import { useState, useEffect, Fragment } from 'react';
import '../../App.css';
import Header from '../../components/Header/Header';
import Swal from 'sweetalert2'
import styled from 'styled-components';
import Modal from './Modal'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { styled as styled2 } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import 'bootstrap/dist/css/bootstrap.min.css';

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


const ExpandMore = styled2((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
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

    //como obtener el listado de comidas 


    const [expanded, setExpanded] = React.useState(false);
    const [estadoModal, cambiarEstadoModal] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      /* const handleInputChange = (e) =>{
        setUpdateTorneo({...updateTorneo, [e.target.name]: e.target.value})
    
      } */

      const [style1, setStyle1] = useState("show");
  
      const changeStyleAbiertos = () => {
        console.log("you just clicked");
        setStyle1("show");
        setStyle2("hide");
        setStyle3("hide");
      };

      const [style2, setStyle2] = useState("show");
  
      const changeStyleCerrados = () => {
        console.log("you just clicked");
        setStyle1("hide");
        setStyle2("show");
        setStyle3("hide");
      };

      const [style3, setStyle3] = useState("show");
  
      const changeStyleCancelados = () => {
        console.log("you just clicked");
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
                                    <StyledTableCell>Plato</StyledTableCell>
                                    <StyledTableCell>Precio</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {array.map((item) => ( */}
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">a</StyledTableCell>
                                        <StyledTableCell>b</StyledTableCell>
                                        {/*<StyledTableCell>
                                            <select
                                                className="custom-select my-1 mr-2"
                                                id="inlineFormCustomSelect"
                                                name="team"
                                                value="d"
                                                onChange={handleChange}
                                            >
                                            <option default>abc</option>
                                            </select>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <button  className="btn btn-success mt-2 mb-2 mx-2 h-25">Enviar solicitud</button>
                                        </StyledTableCell>*/}
                                    </StyledTableRow>
                                        {/*))*/}
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
                                      <StyledTableCell>Plato</StyledTableCell>
                                      <StyledTableCell>Precio</StyledTableCell>
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                                  {/* {array.map((item) => ( */}
                                      <StyledTableRow>
                                          <StyledTableCell component="th" scope="row">a</StyledTableCell>
                                          <StyledTableCell>b</StyledTableCell>
                                          {/*<StyledTableCell>
                                              <select
                                                  className="custom-select my-1 mr-2"
                                                  id="inlineFormCustomSelect"
                                                  name="team"
                                                  value="d"
                                                  onChange={handleChange}
                                              >
                                              <option default>abc</option>
                                              </select>
                                          </StyledTableCell>
                                          <StyledTableCell>
                                              <button  className="btn btn-success mt-2 mb-2 mx-2 h-25">Enviar solicitud</button>
                                          </StyledTableCell>*/}
                                      </StyledTableRow>
                                          {/*))*/}
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
                                    <StyledTableCell>Plato</StyledTableCell>
                                    <StyledTableCell>Precio</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {array.map((item) => ( */}
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">a</StyledTableCell>
                                        <StyledTableCell>b</StyledTableCell>
                                        {/*<StyledTableCell>
                                            <select
                                                className="custom-select my-1 mr-2"
                                                id="inlineFormCustomSelect"
                                                name="team"
                                                value="d"
                                                onChange={handleChange}
                                            >
                                            <option default>abc</option>
                                            </select>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <button  className="btn btn-success mt-2 mb-2 mx-2 h-25">Enviar solicitud</button>
                                        </StyledTableCell>*/}
                                    </StyledTableRow>
                                        {/*))*/}
                            </TableBody>
                        </Table>
                    </TableContainer>
              </div>
            </div>
    </Fragment>
           );
    };

export default VerPedidos;
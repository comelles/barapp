import { useState, useEffect, Fragment } from 'react';
import '../../App.css';
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

    //como obtener el listado de comidas 


    const [expanded, setExpanded] = React.useState(false);
    const [estadoModal, cambiarEstadoModal] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      /* const handleInputChange = (e) =>{
        setUpdateTorneo({...updateTorneo, [e.target.name]: e.target.value})
    
      } */

    return(
        <Fragment>
             <div className="container p-2">
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
    </Fragment>
           );
    };

export default VerPedidos;
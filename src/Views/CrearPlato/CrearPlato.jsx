import { useState, useEffect, Fragment, useRef } from 'react';
//import {API, Auth} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const CrearPlato = () => {

  {/*const form = useRef(null);
  const [torneos, setTorneos] = useState({
    name: '',
    sport: '',
    startDate: '',
    endDate: '',
    description: '',
    userCreator:'',
    teams:''
  });*/}
  const [userCreator, setUserCreator] = useState('');

 {/* const [listTorneos, setListTorneos] = useState([]);
  useEffect(() =>{
      async function getAllTorneos(){
        const allTorneos = await API.graphql({query: queries.listTorneos});
        setListTorneos(allTorneos.data.listTorneos.items);  
      }
    getAllTorneos();
    Auth.currentAuthenticatedUser().then(user => {
      setUserCreator(user.username);
    })
  });  */}

 {/* const handleFormSubmit = async (e)  =>{

    e.preventDefault();

      Swal({
        title:"Torneo creado con éxito",
        icon:"success",
        button:"Aceptar",
        timer:"5000"
      })

     const CreateTorneoInput = {
      name: torneos.name,
      sport: torneos.sport,
      startDate: torneos.startDate,
      endDate: torneos.endDate,
      description: torneos.description,
      userCreator: userCreator,
      teams:''

    } 
    await API.graphql({query: mutations.createTorneo, variables: {input: CreateTorneoInput}});
    form.current.reset();
  } */}

 {/* const handleInputChange = (e) =>{
  
    setTorneos({...torneos, [e.target.name]: e.target.value})
    
  } */}

return(
  <Fragment>
    <div class="container rounded bg-white mt-5 mb-5">
      <h1>Crear nuevo plato</h1>
        <form /*ref={form}*/ className="column" /*onSubmit={handleFormSubmit}*/> 
          <div class="p-2 py-6">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="col-md">
                <label class="labels">Nombre del plato</label>
                <input  className="form-control"
                placeholder="Ingrese el nombre del plato"  
                type="text" 
                name="name" 
                /*onChange={handleInputChange}*//>
              </div>
            </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="col-md">
                  <label class="labels">Precio del plato</label>
                  <input className="form-control"
                  placeholder="Ingrese el precio del plato" 
                  type="text" 
                  name="precio" 
                  /*onChange={handleInputChange}*//> 
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="col-md">
                  <label class="labels">Descripción del plato</label>
                  <textarea className="form-control"
                  placeholder="Ingrese la descripcion del plato"
                  type="text" 
                  name="description" 
                  /*onChange={handleInputChange}*//> 
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="col-md">
                  <label for="imagenPlato" class="labels">Elija una imagen para el plato</label>
                  <input type="file" class="form-control-file" id="imagenPlato"/>
                </div>
              </div>
              <div class="d-flex justify-content-center align-items-center mb-3">
                <button className="btn btn-dark" type="submit">Crear Plato</button>
              </div>
          </div>
        </form> 
    </div>
  </Fragment>
);} 

export default CrearPlato;
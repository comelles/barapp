import { Fragment } from 'react';
import Header from '../../components/Header/Header';
import ComidaCreateForm from '../../ui-components/ComidaCreateForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const CrearPlato = () => {

return(
  <Fragment>
    <Header />
      <div class="container rounded bg-white mt-5 mb-5">
        <h1>Crear nuevo plato</h1>
          {<ComidaCreateForm/>}
      </div>
  </Fragment>
);} 

export default CrearPlato;

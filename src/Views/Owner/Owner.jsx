import '../../App.css';
import Header from '../../components/Header/Header';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Owner = () => {

    return(
        <Fragment>
            <Header />
                <div class="container rounded bg-white mt-5 mb-5">
                <h1>Bienvenido!</h1> 
                    <div class="p-2 py-6">
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <a className="btn btn-danger" type="button" class="btn btn-danger btn-lg btn-block" href="/mis-platos">Ver platos creados</a>
                        </div>
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <a className="btn btn-danger" type="button" class="btn btn-danger btn-lg btn-block" href="/crear-plato">Agregar nuevo plato</a>
                        </div>
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <a className="btn btn-danger" type="button" class="btn btn-danger btn-lg btn-block" href="/pedidos">Ver pedidos</a>
                        </div>
                    </div>
                </div>
        </Fragment>
        );
    };

export default Owner;
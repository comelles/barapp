import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import history from "./helpers/history";
import { Amplify, API, photoPlaceholderIcon } from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Owner from './Views/Owner/Owner';
import CrearPlato from './Views/CrearPlato/CrearPlato';
import MisPlatos from './Views/MisPlatos/MisPlatos';
import VerPedidos from './Views/VerPedidos/VerPedidos'
import Menu from './Views/Menu/Menu'
import Pedir from './Views/Pedir/Pedir'
import * as queries from './graphql/queries';

Amplify.configure(awsExports);
Amplify.configure(awsconfig);

function App() {

  //const allTodos = API.graphql({ query: queries.listComidas }) ;

  //console.log(allTodos)
    
  
    return (
      <div className="App">
        <BrowserRouter history={history}>
        <div>
              <Routes>
                <Route path="/" element={<Owner/>} />
                <Route path="/crear-plato" element={<CrearPlato/>} />
                <Route path="/mis-platos" element={<MisPlatos/>} />
                <Route path="/pedidos" element={<VerPedidos/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/Pedir" element={<Pedir/>} />
                <Route
                  path="*"
                  element={
                    <div>
                    <h1>Pagina no encontrada</h1>
                    <a href="/">Volver a inicio</a>
                    </div>
                  }
                />
              </Routes>
              </div>
        </BrowserRouter>
      </div>
    );
}

export default App;

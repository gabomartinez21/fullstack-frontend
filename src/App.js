import React from 'react';
import {Grid, Container} from '@mui/material';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import Formulario from './components/Formulario';
import Usuario from './components/Usuario';
import Promedio from './components/Promedio';
import ListadoUsuarios from './components/ListadoUsuarios';

function App() {
 

  return (
    <Router>
      <div className="principal">
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item sm={8}>
              <Routes>
                <Route path="/" element={<Formulario />} exact/>
                <Route path="/usuario" element={<Usuario />}/>
                <Route path="/listado" element={<ListadoUsuarios />}/>
                <Route path="/promedio" element={<Promedio />}/>
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default App;

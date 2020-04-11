import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3em;
`;
function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [spinner, setSpinner] = useState(false);

  const {cotizacion,datos} = resumen;
  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setSpinner={setSpinner}
        />
        {spinner ? <Spinner></Spinner> : null}

        {!spinner 
          ? <Resumen
            datos={datos}
            />
          : null
        }
        {!spinner 
          ?<Resultado
            cotizacion={cotizacion}
          />
          : null
        }
      </ContenedorFormulario>
    </Contenedor>


  );
}

export default App;

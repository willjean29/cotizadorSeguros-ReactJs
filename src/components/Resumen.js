import React from 'react';
import styled from '@emotion/styled';
import {letraMayuscula} from '../Helper'
const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;
const Resumen = ({datos}) => {
  const {marca,year,plan} = datos;
  if(marca === '' || year === '' || plan === ''){
    return null;
  }
  return (  
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca : {letraMayuscula(marca)}</li>
        <li>Plan : {letraMayuscula(plan)}</li>
        <li>Year : {letraMayuscula(year)}</li>
      </ul>
    </ContenedorResumen>
  );
}
 
export default Resumen;
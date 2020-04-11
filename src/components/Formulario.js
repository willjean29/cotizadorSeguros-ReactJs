import React, {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear,calcularMarca,obtenerPlan} from '../Helper';

// definir los styled components
const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  /* -webkit-appearance: none; */
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin-top: 2rem;
  transition: background-color .3s ease;

  &:hover{
    background-color: #26C6Da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: #fff;
  padding: 0.6rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
`;

const Formulario = ({setResumen,setSpinner}) => {
  // definir los states del componente 
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  });
  const [error, setError] = useState(false)
    
  // extarer los valores del state
  const {marca,year,plan} = datos;

  // obtener los datos del formulario
  const obtenerInformacion = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  // cuando el usuario envia el formulario
  const cotizarSeguro = (e) => {
    e.preventDefault();
    if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
      setError(true);
      return;
    }
    setError(false);
    // base
    let resultado = 2000;
    // obtener la diferencia de años
    const diferenciaYear = obtenerDiferenciaYear(year);
    // por cada año hay que restar el 3%
    resultado -= ((diferenciaYear * 3) * resultado) / 100;
    // americano 15%
    // asiatico 5%
    // europeo 30%
    resultado = calcularMarca(marca) * resultado;
    // basico 20$
    // completo 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan*resultado).toFixed(2);

    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      setResumen({
        cotizacion: resultado,
        datos
      });
    }, 2000);
  }
  return (  
    <form
      onSubmit={cotizarSeguro}
    >
      {error 
        ?
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        : null
      }
      <Campo>
        <Label htmlFor="">Marca</Label>
        <Select 
          name="marca"
          value={marca}
          onChange={obtenerInformacion}
        >
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Año</Label>
        <Select
          name="year"
          value={year}
          onChange={obtenerInformacion}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Plan</Label>
        <InputRadio 
          type="radio"
          name="plan"
          value="basico"
          checked = {plan==="basico"}
          onChange={obtenerInformacion}
          id="basico"
        /> <label htmlFor="basico">Básico</label> 
        <InputRadio 
          type="radio"
          name="plan"
          value="completo"
          checked = {plan==="completo"}
          onChange={obtenerInformacion}
          id="completo"
        /><label htmlFor="completo">Completo</label> 
      </Campo>
      <Boton type="Boton">Cotizar</Boton>
    </form>
  );
}
 
export default Formulario;
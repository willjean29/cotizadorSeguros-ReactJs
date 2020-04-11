export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
} 

export const calcularMarca = (marca) => {
  let incremento;
  switch (marca) {
    case 'americano':
      incremento = 1.15;
      break;

    case 'europeo':
      incremento = 1.30;
      break;

    case 'asiatico':
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

export const obtenerPlan = (plan) => {
  return (plan === 'basico') ? 1.2 : 1.5;
}

export const letraMayuscula = (texto) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
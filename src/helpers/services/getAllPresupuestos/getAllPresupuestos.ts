async function getAllPresupuestos() {
  const response = await fetch('http://localhost:5000/api/v1/presupuestos');
  const datos = await response.json();
  return datos;
}

export default getAllPresupuestos;
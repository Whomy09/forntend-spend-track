async function getAllPresupuestos(id:number) {
  const response = await fetch(`http://localhost:5000/api/v1/presupuestos/clientes/${id}`);
  const datos = await response.json();
  return datos;
}

export default getAllPresupuestos;
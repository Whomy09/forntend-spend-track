async function getAllgasto(id:number) {
    const response = await fetch(`http://localhost:5000/api/v1/gastos/clientes/${id}`);
    const datos = await response.json();
    return datos;
  }
  
  export default getAllgasto;
async function getAllgasto() {
    const response = await fetch('http://localhost:5000/api/v1/gastos');
    const datos = await response.json();
    return datos;
  }
  
  export default getAllgasto;
export function updatePresupuesto(id: number, presupuesto: any) {
  console.log(presupuesto);
  
  fetch(`http://localhost:5000/api/v1/presupuestos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(presupuesto)
  })
}

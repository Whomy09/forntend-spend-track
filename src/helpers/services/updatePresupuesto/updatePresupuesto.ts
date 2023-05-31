export function updatePresupuesto(id: number, presupuesto: any) {
  fetch(`http://localhost:5000/api/v1/presupuestos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(presupuesto)
  })
}

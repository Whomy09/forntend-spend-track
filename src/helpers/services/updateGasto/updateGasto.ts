export function updateGasto(id: number, gasto: any) {
  fetch(`http://localhost:5000/api/v1/gastos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(gasto)
  })
}
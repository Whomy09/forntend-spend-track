const deleteGasto = (id: number) => {
  fetch(`http://localhost:5000/api/v1/gastos/${id}`, { method: 'DELETE' })
}

export default deleteGasto
const deletePresupuesto = async (id: number) => {
  fetch(`http://localhost:5000/api/v1/presupuestos/${id}`, { method: "DELETE" });
}

export default deletePresupuesto;
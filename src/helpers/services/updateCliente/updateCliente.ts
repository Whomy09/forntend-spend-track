import type { ICliente } from "@/interfaces/ICliente";

export function updateCliente(id: number, cliente: ICliente) {
  fetch(`http://localhost:5000/api/v1/clientes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  })
}

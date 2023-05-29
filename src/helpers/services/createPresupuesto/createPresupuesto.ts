import type {IPresupuesto} from '../../../interfaces/IPresupuesto';
const createPresupuesto = async (id:number,presupuesto:IPresupuesto)=>{
    const dato = JSON.stringify(presupuesto);
    const response = await fetch(`http://localhost:5000/api/v1/presupuestos/${id}`,{
        method:"post",
        headers: {
            'Content-Type': 'application/json' 
          },
        body:dato
    });
}

export default createPresupuesto;
import type {IGasto} from '../../../interfaces/IGasto';
const createGasto = async (id:number,gasto:IGasto)=>{
    const dato = JSON.stringify(gasto);
    const response = await fetch(`http://localhost:5000/api/v1/gastos/${id}`,{
        method:"post",
        headers: {
            'Content-Type': 'application/json' 
          },
        body:dato
    });
}

export default createGasto;
import type {IUsuario} from '../../../interfaces/IUsuario';

const enviar = async(usuario:IUsuario)=>{
    const valor=JSON.stringify(usuario);
    const response = await fetch("http://localhost:5000/api/v1/clientes",{
        headers: {
            'Content-Type': 'application/json' 
          },
        method:"POST",
        body:valor
    }); 
}

export default enviar;
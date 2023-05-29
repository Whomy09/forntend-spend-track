
const llamar= async(correo:string,password:string)=>{
  const Response = await fetch(`http://localhost:5000/api/v1/clientes/login/${correo}/${password}`,{
    method:"post"
  });
  const usuario = await Response.json();
  return usuario;
}

export default llamar;

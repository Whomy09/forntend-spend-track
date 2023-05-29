
export const validar=(nombre:string,apellido:string,ciudad:string,correo:string,contraseña:string)=>{
    if (nombre === '' || apellido === ''|| ciudad === '' ||  correo === ''|| contraseña ==="") {
        return false;
    }else{
        return true;
    }
}


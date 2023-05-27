
export const validar=(nombre:string,apellido:string,ciudad:string,correo:string)=>{
    if (nombre === '' || apellido === ''|| ciudad === '' ||  correo === '') {
        return false;
    }else{
        return true;
    }
}



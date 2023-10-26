import { useState } from "react";
import Formulario from "./Formulario";

const Rejuvnecedor = () => {
    const [nombre,setNombre] = useState("");
    const [edad,setEdad] = useState(0);

    const edadHandler = e => setEdad(parseInt(e.target.value));
    const nombreHandler = e => setNombre(e.target.value);

    const validarNombre = nombre => {   
        console.log(nombre)     
        const nombreWithoutSpace = nombre.trim();
        console.log(nombreWithoutSpace)
        return nombreWithoutSpace.length>=1?true:false;
    } 

    const validarEdad = edad => edad>0?true:false;

    const onSubmitForm = e =>{
        e.preventDefault();   
            
        if(validarEdad(edad) && validarNombre(nombre)){
            alert(
                "Nombre: "+nombre+"\n"+
                "Edad: "+(edad<=10? 0 : edad-10)
            )
        }else{
            alert("Usuario o edad invalido")
        }
        
    }
    
    return (
    <Formulario onSubmitForm={onSubmitForm} edad={edad} edadHandler={edadHandler} nombre={nombre} nombreHandler={nombreHandler}/>
    )
}

export default Rejuvnecedor
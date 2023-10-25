import { useState } from 'react';
import Elemento from './Elemento';
import style from '../../Styles/Clase5_MesaDeTrabajo/lista.module.css';
const Lista = () => {    
    const [tarea,setTarea]=useState([]);          
    return (
        
        <div className={style.contenedor}>  
            <div> 
                <button className={style.botones} onClick={()=>setTarea(prev=>[...prev,<Elemento key={tarea.length} id={tarea.length} tarea={"Leer un Libro"}/>])}>Leer un libro</button>
                <button className={style.botones} onClick={()=>setTarea(prev=>[...prev,<Elemento key={tarea.length} id={tarea.length} tarea={"Ver la tele"}/>])}>Ver la tele</button>
                <button className={style.botones} onClick={()=>setTarea(prev=>[...prev,<Elemento key={tarea.length} id={tarea.length} tarea={"Hacer deporte"}/>])}>Hacer deporte</button>             
            </div>
            <ul className={style.tareas}>{tarea}</ul>
        </div>
    )
}

export default Lista
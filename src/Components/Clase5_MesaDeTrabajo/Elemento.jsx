import style from '../../Styles/Clase5_MesaDeTrabajo/lista.module.css'
// eslint-disable-next-line react/prop-types
const Elemento = ({id, tarea}) => <li className={style.tareas}>Tarea N° {id+1} agregada: {tarea}<hr/></li>
    

export default Elemento
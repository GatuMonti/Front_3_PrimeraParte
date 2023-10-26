import styles from '../../Styles/Claase6_Sincronica/formulario.module.css'
// eslint-disable-next-line react/prop-types
const Formulario = ({onSubmitForm, nombre, nombreHandler, edad, edadHandler}) => {
    return (
        <form className={styles.formulario} onSubmit={onSubmitForm}>
            <h1>Rejuvenecedor</h1>
            <div>
                <label className={styles.label}>Nombre: </label>
                <input id="inputNombre" type="text" placeholder="Nombre" value={nombre} onChange={nombreHandler} />
            </div>
            <div>
                <label className={styles.label}>Edad: </label>
                <input id="inputEdad" placeholder="Edad" type="number" value={edad} onChange={edadHandler} />
            </div>
            <button className={styles.button} type="submit">Rejuvenecer</button>
        </form>
    )
}

export default Formulario
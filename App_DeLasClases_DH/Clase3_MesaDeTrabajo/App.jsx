import "./App.css";
import ComponentA from "./Components/Clase3_MesasDeTrabajo/ComponentA";
import Saludo from "./Components/Clase3_MesasDeTrabajo/Saludo";



function App() {    
    return (
        <ComponentA nombre="Juan">
            <Saludo />
        </ComponentA>
    );
}
export default App;



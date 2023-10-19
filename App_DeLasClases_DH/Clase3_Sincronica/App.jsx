import ClassComponent from "./Components/ClassComponent";
import FunComponent from "./Components/FunComponent";
import "./App.css";
import Estudiante from "./Components/Estudiante";

function App() {
    return (
        <>
            <ClassComponent />
            <FunComponent />
            <Estudiante nombre="Gatu" localidad="Capital"/>
            <Estudiante nombre="Joha" localidad="Juan Dias"/>
            <Estudiante nombre="Bauti" localidad="Frias"/>
        </>  
    );
}
export default App;
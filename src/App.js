//import { Ejemplo01, Ejemplo02 } from './components/Ejemplos';
import { BrowserRouter as Router } from "react-router-dom";
import { HomeProductos } from "./components/productos";
function App() {
  return (
    <Router>
      <div>
        <HomeProductos />
      </div>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./paginas/Home"
import Pagina1 from "./paginas/pagina1"
import Pagina2 from "./paginas/pagina2"



function App() {
  
  return (
    <Router>  
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pagina1" element={<Pagina1 />} />
      <Route path="/Pagina2" element={<Pagina2 />} />
 
      </Routes>
    </Router>
  );
}

export default App;

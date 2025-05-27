import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from "./componentes/routers/routers";
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";

function App() {

  
  return (
    <StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </StrictMode>
  );
}

export default App;

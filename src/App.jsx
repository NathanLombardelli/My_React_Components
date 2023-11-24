import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Buttons} from "./pages/Buttons.jsx";
import {Inputs} from "./pages/Inputs.jsx";
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buttons/>}></Route>
        <Route path="/buttons" element={<Buttons/>}></Route>
        <Route path="/inputs" element={<Inputs/>}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App

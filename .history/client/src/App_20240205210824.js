import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:rest*" element={<h1><Error/></h1>} />
      </Routes>
    </BrowserRouter>
      <Home />
    </>
  );
}

export default App;

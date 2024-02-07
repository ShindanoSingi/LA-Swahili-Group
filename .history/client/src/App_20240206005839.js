import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
      return (
            <>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                              path="/:rest*"
                              element={
                                    <h1>
                                          <Error />
                                    </h1>
                              }
                        />
                  </Routes>
            </>
      );
}

export default App;

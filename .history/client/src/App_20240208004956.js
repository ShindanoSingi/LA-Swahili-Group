import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import UserDashBoard from "./pages/userDashBoard/UserDashBoard";
import SuperUserDashBoard from "./pages/superUsersDashBoard/SuperUsersDashBoard";
import { useEffect } from "react";


function App() {

      const navigate = useNavigate()

      const user = 'user';

      useEffect(() => {
            if (user === 'user') {
                  navigate('/user')
            }
      })

      return (
            <>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/user" element={<UserDashBoard/>} />
                        <Route path="/superuser" element={<SuperUserDashBoard/>} />
                        <Route path="/admin" element={<adminDashBoard/>} />
                        <Routes
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

import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import UserDashBoard from "./pages/userDashBoard/UserDashBoard";
import SuperUsersDashBoard from "./pages/superUsersDashBoard/SuperUsersDashBoard";
import { useEffect } from "react";
import Register from "./pages/register/Register";
import EditUser from "./pages/editUser/EditUser";


function App() {

      const navigate = useNavigate()

      const user = 'superusers';

      useEffect(() => {
            if (user === 'superuser') {
                  navigate('/superuser')
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
                        <Route path="/register" element={<Register/>} />
                        <Route path="/edit" element={<EditUser/>} />
                        <Route path="/user" element={<UserDashBoard/>} />
                        <Route path="/superuser" element={<SuperUsersDashBoard/>} />
                        <Route path="/admin" element={<adminDashBoard/>} />
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

import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Changepw from './pages/Changepw';
import Navbar from './pages/eventOrganizer/Navbar';
import Aside from './pages/eventOrganizer/Aside';
import Dashboard from './pages/eventOrganizer/Dashboard';

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "./asstes/js/main.js";
    script.type = "text/babel";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/changePassword" element={<Changepw />}></Route>
      </Routes>
          {/* <div class="layout-wrapper layout-content-navbar">
             <div class="layout-container">
              <Aside></Aside>
              <div class="layout-page">
                <Navbar></Navbar>
                <Dashboard></Dashboard>
              </div>
            </div>
          </div>         */}
    </div>
  );
}

// function LoginWithoutHeaderFooter() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }

export default App;

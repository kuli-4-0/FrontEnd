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
import Dashboard from './pages/user/Dashboard';
import EventDetail from './pages/user/EventDetail';


function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = './asstes/js/main.js';
    script.type = 'text/babel';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="App">
      <Routes>
        {/* all */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/event/:eventId" element={<EventDetail />} />

        {/* user */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/event_organizer/dashboard" element={<Dashboard />} />
        <Route path="/musisi/dashboard" element={<Dashboard />} />
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

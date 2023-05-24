import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
      </Routes>
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

import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PurchaseLiveSuccessful from './pages/user/PurchaseLiveSuccessful';
import ListTicketLive from './pages/user/ListTicketLive';
import OrganizerDashboard from './pages/organizer/OrganizerDashboard';
import MyEvent from './pages/organizer/MyEvent';
import EventDetailPage from './pages/organizer/EventDetailPage';
import CreateEventPage from './pages/organizer/CreateEventPage';
import DetailLiveEventPage from './pages/user/DetailLiveEventPage';
import ListEventPage from './pages/user/ListEventPage';
import { MusisiDashboard } from './pages/musisi/MusisiDashboard';
import DashboardPage from './pages/user/DashboardPage';

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

        {/* user */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/event" element={<ListEventPage />} />
        <Route path="/event/:eventId" element={<DetailLiveEventPage />} />
        <Route
          path="/event/:eventId/purchase-successful"
          element={<PurchaseLiveSuccessful />}
        />
        <Route path="/tickets" element={<ListTicketLive />} />

        {/* event_organizer */}
        <Route
          path="/event_organizer/dashboard"
          element={<OrganizerDashboard />}
        />
        <Route path="/event_organizer/my-events" element={<MyEvent />} />
        <Route
          path="/event_organizer/my-events/:eventId"
          element={<EventDetailPage />}
        />
        <Route
          path="/event_organizer/create-event"
          element={<CreateEventPage />}
        />

        {/* musisi */}
        <Route path="/musisi/dashboard" element={<MusisiDashboard />} />

        <Route path="/admin/dashboard" element={<DashboardPage />} />
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

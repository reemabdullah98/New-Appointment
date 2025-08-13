import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import BookingForm from './components/BookingForm.jsx';
import ConfirmationMessage from './components/ConfirmationMessage.jsx';
import AppointmentList from './components/AppointmentList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

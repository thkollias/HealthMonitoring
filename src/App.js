import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from './routes/Login';
import { PatientsDashBoard } from "./routes/PatientsDashboard";
import { SelectedPatient } from "./routes/SelectedPatient"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path="patients-dashboard" element={<PatientsDashBoard />} />
        <Route path="patients-dashboard/selected-patient" element={<SelectedPatient />} />
      </Routes>
    </div>
  );
}

export default App;
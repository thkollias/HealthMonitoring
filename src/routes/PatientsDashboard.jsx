import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrlInstance } from "../api/axiosBaseUrl";
import { PatientsList } from "../components/PatientsList";
import { useNavigate } from "react-router-dom";

export const PatientsDashBoard = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://....../healthmonitor/patients?user_id=18`)
      .then(response => {
        console.log(response);
        setPatients(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <>
      {/* {children}  //for app bar */}
      <PatientsList patients={patients} clickHandler={() => {
        navigate("selected-patient");
      }} />
    </>
  );
}
import { useState, useEffect, useContext } from "react";
import { baseUrlInstance } from "../api/axiosBaseUrl";
import { PatientsList } from "../components/PatientsList";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../contexts/user_id/UserIdContext";

// const USER_ID = 18;
export const PatientsDashBoard = () => {
  const [patients, setPatients] = useState([]);
  const {userId} = useContext(UserIdContext);
  const PATIENTS_DASHBOARD_URL = `/healthmonitor/patients?user_id=18`;
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await baseUrlInstance.get(
          PATIENTS_DASHBOARD_URL
        );
        console.log(response);
        setPatients(response.data);
      }
    fetchData();
    } catch (error) {
      console.log(error);
    }
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
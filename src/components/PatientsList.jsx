import styles from "../styles/Styles.module.css";

export const PatientsList = ({patients, clickHandler}) => {
  return (
    <ul>
      {
        patients.map((patient => 
          <section key={patient.patient_id.toString()} className={styles.patientInDashboard}>
            <p>{patient.firstname} {patient.lastname}  (Sex: {patient.sex})</p>
            <div>
              {
                patient.heart_rate
                ? <p>Heart rate: {patient.heart_rate}</p> 
                : ""
              }
              {
                patient.z_accel
                ? <p>Z-Accel: {patient.z_accel}</p>
                : ""
              }
              {
                patient.sys_blood_pressure || patient.sys_blood_pressure
                ? <span>Blood pressure: </span>
                : ""
              }
              {
                patient.sys_blood_pressure
                ? <span>{patient.sys_blood_pressure} / </span>
                : ""
              }
              {
                patient.dia_blood_pressure
                ? <span>{patient.dia_blood_pressure}</span>
                : ""
              }
            </div>
            <button onClick={clickHandler}>Patient details</button>
          </section>
        ))
      }
    </ul>
  );
}
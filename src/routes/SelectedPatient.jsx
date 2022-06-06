import { NavigationBar } from "../components/NavigationBar";
import { ApplicationBar } from "../components/ApplicationBar";
import { useContext } from "react";
import { UserIdContext } from "../contexts/user_id/UserIdContext";

export const SelectedPatient = () => {
  const user_id = useContext(UserIdContext);   // pass it here to send axios GET request with it 

  return (
    <>
      <ApplicationBar />
      <NavigationBar />
      <p>selected patient</p>
    </>
  );
}
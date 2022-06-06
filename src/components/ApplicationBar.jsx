import { useNavigate } from "react-router-dom";

export const ApplicationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="application-bar">
      <button onClick={() => {
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  )
}
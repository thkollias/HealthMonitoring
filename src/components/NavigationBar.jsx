import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-bar">
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}
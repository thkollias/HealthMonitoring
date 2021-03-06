import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import { baseUrlInstance } from "../api/axiosBaseUrl";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../contexts/user_id/UserIdContext";

const LOGIN_URL = "/healthmonitor/users/login";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const errorRef = useRef();
  const {setAuth} = useContext(AuthContext);
  const {setUserId} = useContext(UserIdContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage("");
  }, [username, password])

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await baseUrlInstance.post(
        LOGIN_URL,
        JSON.stringify({
          username: username, 
          password: password
        })
      );
      setAuth({username, password});

      const responseData = response.data;

      setUserId(responseData.user_id.toString());
      console.log(responseData.user_id)

      if (responseData["username"] === username && responseData["password"] === password) {
        setIsAuthenticated(true);
        navigate("patients-dashboard")
      }
    } catch (error) {
      if (!error?.errorMessage) {
        setErrorMessage("No server response.");
      } else if (error.response?.status === 400) {
        setErrorMessage("False username or password.");
      } else if (error.response?.status === 401) {
        setErrorMessage("Unauthorized.");
      } else {
        setErrorMessage("Login failed.");
      }
      errorRef.current.focus();
    } finally {     
      // navigate("patients-dashboard");  // force auth to route
    }
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={loginSubmitHandler}>
        <fieldset>
          <legend>Sign In</legend>
          <label htmlFor="username_input">Username:</label>
          <input 
            type="text" 
            id="username_input" 
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            autoComplete="off"
            autoFocus 
            required />
          <br></br>
          <label htmlFor="">Password:</label>
          <input 
            type="password" 
            id="password_input" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required />
          <br></br>
          <button type="submit">Login</button>
        </fieldset>
      </form>
      <p ref={errorRef}>{errorMessage}</p> 
    </>
  );
}
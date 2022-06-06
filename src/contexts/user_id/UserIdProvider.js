import { useState } from "react";
import { UserIdContext } from "./UserIdContext";

export const UserIdProvider = ({children}) => {
  const [userId, setUserId] = useState({});

  return (
    <UserIdContext.Provider value={{userId, setUserId}}>
      {children}
    </UserIdContext.Provider>
  );
}
import { createContext, useEffect, useState } from "react";
import Axios from "axios";

const AppContext = createContext();
const baseUrl = "https://api.jsonbin.io/v3/b/66404ca0ad19ca34f8681529";

export const usersApi="https://basalt-equatorial-paw.glitch.me/users";

function ContextProvider({ children }) {
const [mentors, setMentors] = useState([]);
const [userData, setUserData] = useState([]);
const [loggedInUser, setLoggedInUser] = useState(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);


//function to handle login
useEffect(() => {
  Axios.get(usersApi).then((response) => setUserData(response.data));
  return () => {};
}, []);
useEffect(() => {
  console.log(loggedInUser);

  return () => {
  }
}, [loggedInUser])


// function to fetch mentors on load
  useEffect(() => {
    try {
      (async () => {
        const response = await Axios.get(baseUrl);
        if (response.status === 200) {
          setMentors(response.data.record.mentors);
        } else throw new Error("Fetch failed with status " + response.status);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const context= {
    mentors,
    setMentors,
    userData,
    setUserData,
    loggedInUser, 
    setLoggedInUser,
    isLoggedIn,
    setIsLoggedIn
  }

  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  );
}
export { ContextProvider, AppContext };

// import { useEffect, useState } from "react";
// import { useContext, createContext } from "react";
// import axios from "axios";

// const StateContext = createContext();

// export const ContextProvider = ({ children }) => {
//   const [users, setAllUsers] = useState([]);

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = async () => {
//     try {
//       const response = await axios.get(
//         "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users"
//       );
//       if (response && response.data) {
//         setAllUsers(response.data);
//         console.log(response.data);
//       } else {
//         console.error("Invalid API response:", response);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <StateContext.Provider value={{ users, setAllUsers }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const usestatecontext = () => useContext(StateContext);

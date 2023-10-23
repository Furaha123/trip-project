import { createContext, useState } from "react";

const context = {
  user: null,
  setUsers: () => {},
};
export const UserContent = createContext(context);

export default function UserProvider({ children }) {
  const [user, setUsers] = useState(context.user);

  return (
    <UserContent.Provider value={{ user, setUsers }}>
      {children}
    </UserContent.Provider>
  );
}

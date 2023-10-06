import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextProps {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  userFetch: Function;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);


export const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (!userContext?.user){
    userContext?.userFetch(1);
    // throw new Error('User is required');
  }

  return userContext;
}
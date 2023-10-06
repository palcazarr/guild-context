'use client'
import { SalesContext } from '@/context/salesContext';
import { User, UserContext } from '@/context/userContext';
import Dashboard from '@/pages/dashboard';
import axios from 'axios';
import { useContext, useState } from 'react';


export const  Home = () => {
  const [user , setUser] = useState<User | undefined>();

  const userFetch = (id: number) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          if (res.status === 200){
            const userFetched = res.data;
            setUser({
              id: userFetched.id,
              name: userFetched.name,
              email: userFetched.email
            })
          }
        })
        .catch(error => {
          throw new Error(error.message)
        })
  }

  return (
    <UserContext.Provider value={{user: user, setUser: setUser, userFetch}}>
      <Dashboard  />
    </UserContext.Provider>
  );
}
export default Home;

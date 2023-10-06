import { useContext } from "react";
import { UserContext, useUserContext } from "@/context/userContext";


const NavBar = () => {
  
  const userC = useUserContext()
  return (
    <div className="flex justify-between p-2">
      <div className="">
        NavBar
      </div>
      <div className="text-blue-500 p-3 border-white border-2 bg-white rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer ">
        {userC?.user?.name} {userC?.user?.email}
      </div>
    </div>
  )
}
export default NavBar;
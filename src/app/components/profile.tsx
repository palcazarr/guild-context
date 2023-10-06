import { useUserContext } from "@/context/userContext";
import { useState } from "react";


const Profile = () => {
  
  const userC = useUserContext();
  const [counter, setCounter] = useState(1)

  const handleChange = () => {
    userC?.userFetch(counter);
    setCounter(counter + 1)
  }  


  return (
    <div className="p-3">
      <h4>Profile</h4>
      <div className="p-3">
        <label htmlFor="">Name</label>
        <input value={userC?.user?.name} className="border-2 mx-2" />
      </div>
      <div className="p-3">
        <label htmlFor="">Email</label>
        <input value={userC?.user?.email} className="border-2 mx-2" />
      </div>

      <div className="p-3">
        <button className="border-2 shadow p-2" onClick={handleChange}>
          Change Data
        </button>
      </div>
    </div>
  )
}
export default Profile;
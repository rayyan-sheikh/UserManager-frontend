import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewUser = () => {

    const [user, setUser] = useState({
        name:"", username:"", email:""
    })
    const{id} = useParams()

    useEffect(()=>{
        loadUser()
    }, [])
    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }



  return (
    <div className="flex items-start pt-16  justify-center bg-gray-900 w-full h-[100vh]">
      <div
        
        className="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          User Details:
        </h5>
        <ul className="my-5">
            <li class="font-normal text-white dark:text-white">
                <b>Name: </b> {user.name}
            </li>
            <li class="font-normal text-white dark:text-white">
                <b>Username: </b>{user.username}
            </li>
            <li class="font-normal text-white dark:text-white">
                <b>Email: </b>{user.email}
            </li>
        </ul>
        <Link to={`/edituser/${user.id}`} className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Edit</Link>
        <Link  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 m-1" to={"/"}>Back to Home</Link>
        
      </div>
    </div>
  );
};
export default ViewUser;

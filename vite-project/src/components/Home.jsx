import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {

    const [users, setUsers] = useState([])
    const{id} =useParams

    useEffect(() => {
      loadUsers()
    }, [])

    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    }

    const deleteUser =async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }
    

  return (
    <div className="bg-gray-900 w-full h-[100vh]">
      <div className="relative overflow-x-auto flex justify-center pt-16">
        <table className="w-[80vw] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={index}
              >
                {user.id}
              </th>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4 flex">
              <Link to={`/${user.id}`} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">View</Link>
              <Link to={`/edituser/${user.id}`} className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Edit</Link>
              <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={()=> deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
                ))
            }
            
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;

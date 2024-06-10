import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex bg-gray-800 w-full h-16 p-1 items-center justify-between">
      <Link to={"/"} className="text-gray-200 font-bold p-2 text-2xl">User Information App</Link>
        <Link type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" to={"/adduser"}>Add User</Link>
    </div>
  )
}
export default Navbar
import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { signOutSuccess } from "@/redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCreate } from "react-icons/io";

const DashboardSidebar = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="h-screen w-64 bg-slate-200 text-slate-800 flex flex-col">
      {/* Logo / Header */}
      <div className="p-4 flex items-center justify-center bg-slate-200">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to={"/dashboard?tab=profile"}
              className="flex items-center p-2
            hover:bg-slate-300 rounded"
            >
              <FaUserAlt className="mr-3" />
              <span>Profile</span>
            </Link>
          </li>

          {currentUser && currentUser.isAdmin && (
            <li>
              <Link
                to={"/create-post"}
                className="flex items-center p-2
            hover:bg-slate-300 rounded"
              >
                <IoIosCreate className="mr-3" />
                <span>Create Post</span>
              </Link>
            </li>
          )}
        </ul>

        <div className="p-4 border-t border-gray-700">
          <button
            className="flex items-center w-full p-2 hover:bg-slate-300 rounded"
            onClick={handleSignout}
          >
            <FaSignOutAlt className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

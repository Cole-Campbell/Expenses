import React from "react";
import { useUserContext } from "../../context/UserContext";
import { signOut } from "@firebase/auth";
import { auth } from "../../services/fireBase";

export const UserBanner = () => {
  const { user } = useUserContext();
  return (
    <div className="h-10 bg-cyan-600 flex justify-between items-center px-4">
      <h2>Expenses</h2>
      {user && <button onClick={() => signOut(auth)}>Logout</button>}
    </div>
  );
};

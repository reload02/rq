import React from "react";
import { useAuth } from "../Hooks/useAuth";
import LogoutButton from "./LogOut";

const Profile: React.FC = () => {
  const { user } = useAuth(); // Context에서 user 가져오기

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="mx-auto p-4">
      <h1 className="text-xl font-bold">User Profile</h1>
      <div className="flex pt-5">
        <img
          src={user.photoURL || ""}
          alt="User Avatar"
          className="h-16 w-16 rounded-full"
        />
        <div className="p-2">
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <div className="p-10">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Profile;

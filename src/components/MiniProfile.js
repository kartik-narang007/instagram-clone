import { myImage } from "@/utils/constants";
import { useSession } from "next-auth/react";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        className="w-16 h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 mx-4 cursor-pointer">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
    </div>
  );
};

export default MiniProfile;

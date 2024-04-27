import { myImage } from "@/utils/constants";
import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img src={myImage} className="w-16 h-16 rounded-full border p-[2px]" />
      <div className="flex-1 mx-4 cursor-pointer">
        <h2 className="font-bold">kartik_narang_007</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
    </div>
  );
};

export default MiniProfile;

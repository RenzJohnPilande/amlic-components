import React from "react";

interface IconButtonProps {
  icon?: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <button className="flex justify-center items-center border text-[16px] text-[#0E0E2C] w-[32px] h-[32px] rounded">
      <div className="flex items-center gap-2 w-[16px]">{icon}</div>
    </button>
  );
};

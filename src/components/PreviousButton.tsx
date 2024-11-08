import React from "react";

interface PreviousButtonProps {
  label: string;
  icon?: React.ReactNode;
}

export const PreviousButton: React.FC<PreviousButtonProps> = ({ label, icon }) => {
  return (
    <button className="border border-[#263E63] bg-[#4A4A68] text-sm text-white font-semibold px-5 py-2 rounded h-fit">
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    </button>
  );
};

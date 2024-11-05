import React from "react";

interface PrimaryButtonProps {
  label: string;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, icon }) => {
  return (
    <button className="border border-[#263E63] bg-[#263E63] text-[16px] text-white font-semibold px-5 py-2 rounded">
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    </button>
  );
};

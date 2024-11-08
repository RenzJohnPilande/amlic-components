import React from "react";

interface NextButtonProps {
  label: string;
  icon?: React.ReactNode;
}

export const NextButton: React.FC<NextButtonProps> = ({ label, icon }) => {
  return (
    <button className="border border-[#263E63] bg-[#263E63] text-sm text-white font-semibold px-5 py-2 rounded h-fit">
      <div className="flex items-center gap-2">
        <span>{label}</span>
        {icon && <span>{icon}</span>}
      </div>
    </button>
  );
};

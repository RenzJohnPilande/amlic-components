import React from "react";

interface SecondaryButtonProps {
  label: string;
  icon?: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, icon }) => {
  return (
    <button className="border border-[#0E0E2C] text-sm text-[#0E0E2C] font-semibold px-5 py-2 rounded h-fit">
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    </button>
  );
};

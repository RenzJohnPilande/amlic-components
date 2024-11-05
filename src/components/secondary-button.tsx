import React from "react";

interface SecondaryButtonProps {
  label: string;
  icon?: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, icon }) => {
  return (
    <button className="border border-[#263E63] text-[16px] text-[#0E0E2C] font-semibold px-3 py-2 rounded">
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    </button>
  );
};

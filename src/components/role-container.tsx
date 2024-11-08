import React from "react";

interface RoleContainerProps {
  label?: string;
}

const generateRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const RoleContainer: React.FC<RoleContainerProps> = ({ label }) => {
  const randomColor = generateRandomColor();
  console.log(randomColor);
  return (
    <div className="border border-[#402A0D] text-[#402A0D] rounded-full px-4 py-1 text-sm capitalize">
      {label}
    </div>
  );
};

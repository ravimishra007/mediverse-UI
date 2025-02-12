"use client";

import React from "react";

interface SectionHeaderProps {
  title?: string;
  buttonText: string;
  onButtonClick: () => void;
  icon?: React.ReactNode; // Optional icon
  className?: string; // Optional for additional styling
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  buttonText,
  onButtonClick,
  icon,
  className = "",
}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div>
        <h1 className="h1 mt-2">{title}</h1>
      </div>
      <div className="flex justify-center items-center commonDarkBG rounded-md">
        <button
          onClick={onButtonClick}
          className="text-[white] p-3 flex justify-center items-center gap-1 font-semibold text-sm flex-row"
        >
          {icon}
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;

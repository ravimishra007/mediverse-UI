"use client";

import React from "react";

interface SectionHeaderProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode; // Optional icon
  className?: string; // Optional for additional styling
}

const SingleModuleHeader: React.FC<SectionHeaderProps> = ({
  title,
  buttonText,
  onButtonClick,
  icon,
  className = "",
}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div>
        <h1 className="h2 mt-2">{title}</h1>
      </div>
      <div className="flex justify-center items-center commonBG borderColor rounded-md">
        <button
          onClick={onButtonClick}
          className="text-[black] p-1.5 flex justify-center items-center gap-1 font-semibold text-sm flex-row"
        >
          {icon}
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SingleModuleHeader;

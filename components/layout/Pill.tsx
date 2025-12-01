// components/Pill.tsx

import React from "react";

interface PillProps {
  label: string;
}

const Pill = ({ label }: PillProps) => {
  return (
    <span className="px-4 py-1 bg-white border rounded-full text-sm cursor-pointer hover:bg-blue-50 whitespace-nowrap">
      {label}
    </span>
  );
};

export default Pill;

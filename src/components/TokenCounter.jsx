import React from "react";

const docks = [
  { label: "TOKEN NO", displayValue: 12 },
  { label: "ROOM NO", displayValue: 23 },
];

const DockDisplay = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 w-[1000px] h-[300px] gap-4 max-w-6xl p-4">
        {docks.map(({ label, displayValue }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center shadow-lg bg-[#1E328F] text-white border-2 border-gray-600 p-4 rounded-lg"
          >
            <div className="text-center text-white text-5xl font-bold">
              {label}
            </div>
            <div className="text-gray-300 text-7xl font-bold mt-2">
              {displayValue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DockDisplay;

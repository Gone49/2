import React from "react";

// Main Card Component
export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white sm:p-8 md:max-w-lg mx-auto">
      {children}
    </div>
  );
};

// Card Header Component
export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-4 text-center">
      {children}
    </div>
  );
};

// Card Title Component
export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl font-bold text-gray-800">
      {children}
    </h2>
  );
};

// Card Description Component
export const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-gray-600 text-sm mt-2">
      {children}
    </p>
  );
};

// Card Content Component
export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  );
};

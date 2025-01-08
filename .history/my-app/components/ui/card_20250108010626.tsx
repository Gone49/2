// src/components/ui/card.tsx

import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="border rounded-lg shadow-md p-4">{children}</div>;
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xl font-semibold">{children}</div>;
};

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl font-bold">{children}</h2>;
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-sm">{children}</div>;
};

export const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

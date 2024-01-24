import SearchIcon from "@/components/ui/search-icon";
import React from "react";

export default function FakeSearchBar({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex gap-x-3 items-center px-4 py-2 border-2 bg-white border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors">
      <SearchIcon />
      {children}
    </div>
  );
}

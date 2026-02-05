import React from "react";

const Loader = () => {
  return (
    <div className="animate-pulse rounded-xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  );
};

export default Loader;

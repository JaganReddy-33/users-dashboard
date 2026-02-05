function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800
        text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600
        placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 
        focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;

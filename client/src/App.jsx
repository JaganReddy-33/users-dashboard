import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import UserGrid from "./components/UserGrid";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false)``
        setError("Failed to load users. Please try again.");
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const filteredUsers = users.filter((user) => {
    const q = debouncedSearch.toLowerCase();
    return (
      user.name.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q) ||
      user.address.city.toLowerCase().includes(q)
    );
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 dark:bg-gray-900 dark:text-white py-10 px-4">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <h1 className="text-2xl font-bold text-center mb-6">
          User Directory
        </h1>

        <SearchBar search={search} setSearch={setSearch} />
        <UserGrid loading={loading} users={filteredUsers} error={error} />
      </div>
    </div>
  );
}

export default App;

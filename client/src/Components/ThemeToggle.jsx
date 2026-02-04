function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        fixed top-5 right-2 z-50
        rounded-lg
        bg-gray-800 text-white
        dark:bg-gray-200 dark:text-black

        px-3 py-1.5 text-sm
        sm:px-4 sm:py-2 sm:text-base
      "
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;

import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 text-(--text-primary) transition-colors hover:bg-(var(--border))"
      aria-label="Toggle theme"
    >
      <FaSun className="h-5 w-5 text-yellow-500 dark:hidden" />
      <FaMoon className="hidden h-5 w-5 text-white dark:block" />
    </button>
  );
}

export default ThemeToggle;

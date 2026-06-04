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
      className="rounded-md p-1 text-(--text-primary) transition-colors hover:bg-(var(--border)) cursor-pointer"
      aria-label="Toggle theme"
    >
      <FaSun className="h-3 w-3 text-yellow-500 dark:hidden" />
      <FaMoon className="hidden h-3 w-3 text-white dark:block" />
    </button>
  );
}

export default ThemeToggle;

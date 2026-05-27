import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="py-4 border-b border-(var(--border))">
      <div className="container mx-auto flex items-center justify-between px-6 md:max-w-7xl">
        <h1 className="text-xl font-semibold text-(--primary-color)">E-commerce</h1>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;

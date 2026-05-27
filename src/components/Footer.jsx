function Footer() {
  return (
    <footer className="py-4 border-t border-(var(--border))">
      <div className="container mx-auto px-6 md:max-w-7xl">
        <p className="text-center text-(--text-color)">
          &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

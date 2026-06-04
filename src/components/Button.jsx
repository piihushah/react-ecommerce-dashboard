function Button({ children, onClick, className, variant = "primary", type = "button" }) {
  const primaryButton = "bg-(--primary-color) text-(--text-color)  hover:bg-blue-600";
  const secondaryButton = "bg-(--secondary-color) text-(--text-color) hover:bg-gray-600";
  const dangerButton = "bg-(--danger-color) text-(--text-color) hover:bg-red-600";
  const variants = {
    primary: primaryButton,
    secondary: secondaryButton,
    danger: dangerButton,
  };

  const buttonClass = `${variants[variant]} ${className} px-4 py-2  cursor-pointer transition-colors rounded-none`;
  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;

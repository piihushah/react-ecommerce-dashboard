import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="cursor-pointer mb-4 p-2.5 bg-(--primary-color) text-(--surface-color) hover:text-(--primary-color-hover) transition-colors rounded-full shadow-md flex items-center justify-center"
    >
      <FaArrowLeft />
    </button>
  );
}

export default BackButton;

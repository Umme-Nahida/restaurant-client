import { IoIosCloseCircle } from "react-icons/io";

export default function Modal({ children, setOpenModal, openModal, primary }) {

  // handle close button
  const handleCloseBtn = () => {
    setOpenModal(false);
  };

  return (
    <>
      {/* Main modal */}
      <div
        className={`fixed inset-0 z-50 flex ${primary ? "justify-center" : "justify-end" } items-center transition-opacity duration-300 ${
          openModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`modal-overlay fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            openModal ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseBtn} // Close modal when clicking the overlay
        ></div>

        {/* Modal Box */}
        <div
          className={`relative p-4 ${primary ? "w-[80%]" : "w-[30%]" } max-w-6xl bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 ${primary ? "h-[80%]" : "h-full" } flex flex-col items-center overflow-y-scroll ${
            openModal ? "scale-100" : "scale-75"
          }`}
        >
          <span
            onClick={handleCloseBtn}
            className="w-full flex justify-end cursor-pointer bg-green-500 text-3xl"
          >
            <IoIosCloseCircle />
          </span>
          {/* Modal content */}
          {children}
        </div>
      </div>
    </>
  );
}

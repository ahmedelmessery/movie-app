import React from "react";

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1);
      scrollToTop(); // 👈 scroll after changing page
      return newPage;
    });
  };

  const handleNext = () => {
    setCurrentPage((prev) => {
      const newPage = Math.min(prev + 1, totalPages);
      scrollToTop(); // 👈 scroll after changing page
      return newPage;
    });
  };

  return (
    <div className="pagination mt-10 flex items-center justify-center gap-4 text-white py-6">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-800 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow"
      >
        Previous
      </button>

      <span className="text-lg font-semibold tracking-wide">
        Page <span className="text-yellow-300">{currentPage}</span> of{" "}
        <span className="text-yellow-300">{totalPages}</span>
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-800 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow"
      >
        Next
      </button>
    </div>
  );
};

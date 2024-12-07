import React, { useState } from "react";

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    recipe: "",
    suggestion: "",
    review: "",
  });

  const handleRating = (star) => {
    setRating(star);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { rating, ...formData });
    alert("Thank you for your feedback!");
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white border p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Rate Us!</h2>
        {/* Rating Stars */}
        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              onClick={() => handleRating(star)}
              className={`w-8 h-8 cursor-pointer ${
                rating >= star ? "text-yellow-500" : "text-gray-400"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.428 8.2 1.193-5.934 5.78 1.4 8.171L12 18.896l-7.334 3.863 1.4-8.171L.132 9.208l8.2-1.193L12 .587z" />
            </svg>
          ))}
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Which recipe you liked most?
            </label>
            <input
              type="text"
              name="recipe"
              value={formData.recipe}
              onChange={handleInputChange}
              placeholder="Recipe you liked most"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Do you have any suggestion for us?
            </label>
            <input
              type="text"
              name="suggestion"
              value={formData.suggestion}
              onChange={handleInputChange}
              placeholder="Suggestion"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Kindly express your care in a short way.
            </label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              placeholder="Review in detail"
              className="w-full border border-gray-300 rounded-lg p-2 h-24"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Send Review 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default RatingForm;

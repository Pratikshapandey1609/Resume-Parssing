import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Chatbot from "../Chatbot";

const ReviewPage = () => {
  const navigate = useNavigate(); // Navigation function

  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "This is an amazing platform! Super smooth UI. 🚀",
      image: null,
      video: null,
      upvotes: 12,
      comments: ["I agree!", "This helped me a lot."],
    },
  ]);

  const [newReview, setNewReview] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  // Handle file upload
  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (type === "image") setImage(URL.createObjectURL(file));
    if (type === "video") setVideo(URL.createObjectURL(file));
  };

  // Submit new review
  const handleSubmit = () => {
    if (!newReview.trim()) return;

    const newReviewObj = {
      id: reviews.length + 1,
      text: newReview,
      image,
      video,
      upvotes: 0,
      comments: [],
    };

    setReviews([newReviewObj, ...reviews]);
    setNewReview("");
    setImage(null);
    setVideo(null);
  };

  // Handle upvotes properly
  const handleUpvote = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, upvotes: review.upvotes + 1 } : review
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full  min-h-screen">

      {/* Navigate to User Guide */}
      <button
        onClick={() => navigate("/user-guide")}
        className="mb-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:scale-105 transition-transform"
      >
        📖 Read User Guide
      </button>

      <h1 className="text-4xl font-extrabold text-gray-600 mb-6 text-center">⭐ User Reviews & Guide</h1>

      {/* Review Submission */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">Share Your Experience</h2>
        
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />

        <div className="flex space-x-4 mt-3">
          <input
            type="file"
            accept="image/*"
            className="file:cursor-pointer file:mr-2"
            onChange={(e) => handleFileUpload(e, "image")}
          />
          <input
            type="file"
            accept="video/*"
            className="file:cursor-pointer file:mr-2"
            onChange={(e) => handleFileUpload(e, "video")}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      <div className="w-full max-w-3xl mt-6 space-y-4">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <p className="text-gray-900 text-lg font-medium">{review.text}</p>

            {/* Display Image if uploaded */}
            {review.image && (
              <img src={review.image} alt="Review" className="mt-3 rounded-md w-full h-48 object-cover shadow-md" />
            )}

            {/* Display Video if uploaded */}
            {review.video && (
              <video src={review.video} controls className="mt-3 rounded-md w-full shadow-md" />
            )}

            {/* Upvote Button & Progress */}
            <div className="mt-4 flex justify-between items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                onClick={() => handleUpvote(review.id)}
              >
                👍 <span>{review.upvotes}</span> Upvotes
              </motion.button>

              {/* Progress Bar */}
              <div className="w-2/3 bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${Math.min(review.upvotes * 5, 100)}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Chatbot />
    </div>
  );
};

export default ReviewPage;

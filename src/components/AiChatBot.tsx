import React, { useState } from "react";

function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 cursor-pointer bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800"
      >
        Chat with AI
      </button>

      {/* Modal Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000063] bg-opacity-40 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-lg shadow-xl w-[90%] max-w-4xl h-[80%] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={() => setIsOpen(false)}
              className="float-end me-5 z-50 cursor-pointer text-gray-600 hover:text-black text-5xl font-bold"
            >
              &times;
            </button>
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/6UmUbM3fgnxNEGifyp2vX"
              className="w-full h-full border-none rounded-b-lg py-5"
              title="AI ChatBot"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default AiChatBot;

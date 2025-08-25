import React, { useState } from "react";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");

    try {
      const response = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl })
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setShortUrl(data.shortUrl);
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">URL Shortener</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter a long URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Shorten URL
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {shortUrl && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded-lg">
            <p className="text-green-700 font-semibold mb-2">Short URL:</p>
            <a 
              href={shortUrl.startsWith("http") ? shortUrl : `http://${shortUrl}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

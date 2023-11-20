import React, { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [generatedImageURL, setGeneratedImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

  async function fetchGeneratedImage(data) {
    try {
      setIsLoading(true);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept": "image/png",
          "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.blob();
      setPrompt(''); 
      setGeneratedImageURL(URL.createObjectURL(result));
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const handleGenerateImage = async (e) => {
    e.preventDefault();

    try {
      if (!prompt.trim()) {
        console.error('Please enter a prompt for image generation.');
        return;
      }

      // Prevent button click while showing "GENERATING..."
      if (isLoading) {
        return;
      }

      setIsLoading(true);
      await fetchGeneratedImage({ "inputs": prompt });
    } catch (error) {
      console.error('Error during image generation query:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className='header'>Comic GenAI</div>
      <h3>Enter Idea About Your Comic Image:</h3>
      <div className="input-container">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt"
        />
        <button onClick={(e) => handleGenerateImage(e)} disabled={isLoading}>
          {isLoading ? 'GENERATING...' : 'GENERATE'}
        </button>
      </div>

      {isLoading && <p>Loading...</p>}

      {generatedImageURL && ( 
        <div className="image-container">
          <img src={generatedImageURL} alt="Generated Comic Artwork" />
        </div>
      )}

    </div>
  );
}

export default App;

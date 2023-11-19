import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
import image from './images/prince.png'

function App() {
  const [data, setData] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null); // State to track generated image
  const api_url = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

  // ... (your existing code)
    async function query(data) {
    try {
      const response = await fetch(api_url, {
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
      setData(''); 
      return result;
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
    }
  }

  const doSomething = async (e) => {
    e.preventDefault();

    try {
      if (!data.trim()) {
        console.error('Please enter a prompt for image generation.');
        return;
      }

      const result = await query({ "inputs": data });

      if (result instanceof Error) {
        console.error('Error during image generation:', result.message);
        return;
      }

      console.log(result);

      const blobUrl = URL.createObjectURL(result);
      setGeneratedImage(blobUrl); 

    } catch (error) {
      console.error('Error during query:', error);
    }
  };

  return (
    <div className="App">
      <div className='header'>Image GenAI</div>
      <div className="intro-sec">
        <div>
          <div className='text1'>Having Idea For An Image?</div>
          <div className='text2'>Wanna Generate Image Of Your Choice?</div>
          <div className='text3'>Start Generating</div>
        </div>
        <div className='t-img'>
          <div className="ex-text">a prince with his fairytale princess loving each other</div>
          <div className='image-sec'>
            <img className="ex-img" src={image}></img>
          </div>
        </div>
        
      </div>
      <h3>Enter Idea About Your Image:</h3>
      <div className="input-container">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter prompt"
        />
        <button onClick={(e) => doSomething(e)}>
          GENERATE
        </button>
      </div>

      {generatedImage && ( 
        <div className="image-container">
          {/* Image will be displayed here */}
          <img src={generatedImage} alt="Generated Image" />
        </div>
      )}
    </div>
  );
}

export default App;
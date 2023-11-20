# Comic GenAI

Comic GenAI is a web application that enables users to generate unique comic images based on creative prompts. It utilizes Hugging Face's AI model for image generation.

## Demo

Check out the live demo: [Comic GenAI](https://comic-gen-ai.onrender.com/)

## Author

- [Karan Upadhyaya](https://github.com/karanupadhyaya03)

## Features

- Generate custom comic images with provided prompts.
- User-friendly interface.
- Responsive design for a seamless experience on both desktop and mobile devices.
- Loading state and disabled button for improved user experience.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/karanupadhyaya03/comic-genai.git
   ```
2. Install dependencies:

   ```bash
    Copy code
    cd comic-genai
    npm install
    Set up environment variables:
   ```

3. Create a .env file in the project root and add the necessary environment variables, such as API keys.

   ```bash
    env
    Copy code
    REACT_APP_HUGGINGFACE_API_URL=https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud
    REACT_APP_HUGGINGFACE_API_KEY=your-api-key
   ```
4. Run the application:

   ```bash
    bash
    Copy code
    npm start
    Access the app at http://localhost:3000.
    ```

## Usage
1. Open the application in your web browser.
2. Enter your creative prompt in the input field.
3. Click the "GENERATE" button to initiate the image generation.
4. Wait for the process to complete, and the generated image will be displayed.

## Built With

- [React](https://reactjs.org/)
- [Hugging Face API](https://huggingface.co/)


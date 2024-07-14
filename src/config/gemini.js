// const apiKey = "";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
    GoogleGenerativeAI,
  } from "@google/generative-ai"
  
  const apiKey = "YOUR API KEY";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {

    const additionalText = "Reply WITH AN ATTITUDE IN AN ANNOYED WAY, THAT IS YOUR MANNER OF SPEECH AND THE CHARACTER YOU ARE PLAYING OUT FOR FUN. ";
    const modifiedPrompt = `${prompt} ${additionalText}`;

    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
    
    const result = await chatSession.sendMessage(modifiedPrompt);
    

    
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;
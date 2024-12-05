// import googlegenerativeAi from 'https://cdn.jsdelivr.net/npm/@google/generative-ai@0.21.0/+esm'
console.log("running")


let recognition;
const startBtn = document.getElementById('start');
// const transcript = document.getElementById('transcript');
// console.log(startBtn)
if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition(); // For Chrome
} else if ('SpeechRecognition' in window) {
  recognition = new SpeechRecognition();
} else {
  alert('Speech recognition not supported in this browser.');
}

recognition.lang = 'en-IN';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Start speech recognition when button is clicked
startBtn.onclick = () => {
  recognition.start();
  startBtn.disabled = true;
  // transcript.textContent = 'Listening...';
  console.log("clicked")
};

// Capture the recognized speech result
recognition.onresult = (event) => {
  const speechResult = event.results[0][0].transcript;
  console.log(speechResult)
  // transcript.textContent = `You said: ${speechResult}`;
};

// Stop speech recognition when the user stops speaking
recognition.onspeechend = () => {
  recognition.stop();
  startBtn.disabled = false;
  // transcript.textContent += ' (Stopped listening)';
};

recognition.onerror = (event) => {
  console.error('Speech recognition error: ' + event.error);
  startBtn.disabled = false;
};



// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI("AIzaSyBpDvqGgy9RSDOPBk3OFo3mGZ4vAYo29u8");

// const model = genAI.getGenerativeModel({
// model: "gemini-1.5-flash",
// });

// const generationConfig = {
// temperature: 1,
// topP: 0.95,
// topK: 64,
// maxOutputTokens: 200,
// responseMimeType: "text/plain",
// };
// console.log("befor fn")
// async function run() {
//     console.log("running")
// const chatSession = model.startChat({
// generationConfig,
// // safetySettings: Adjust safety settings
// // See https://ai.google.dev/gemini-api/docs/safety-settings
// history: [
// ],
// });

// const result = await chatSession.sendMessage("hello");
// console.log(result.response.text());
// return result.response.text;
// }
// console.log(run())





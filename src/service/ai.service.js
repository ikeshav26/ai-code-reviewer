const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro" });
const prompt = "Explain how AI works";

async function run() {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log(response.text());
}

run();

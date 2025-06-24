const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log(process.env.name);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro" });

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response;
}


module.exports=generateContent
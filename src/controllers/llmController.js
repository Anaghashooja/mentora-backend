const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.summarizeText = async (req, res) => {
  const { text } = req.body;

  if (!text) return res.status(400).json({ error: "Text is missing" });
  if (text.length < 50) return res.status(400).json({ error: "Text too short" });
  if (text.length > 12000) return res.status(413).json({ error: "Text too large" });

  try {
    // const result = await model.generateContent(prompt);
    // const summary = result.response.text();
    
    const summary = "• This is a test summary.\n• LLM is currently bypassed.\n• Backend logic is confirmed.";

    res.json({ summary, model: "mock-test" });
} catch (error) {
    res.status(502).json({ error: "LLM Provider error" });
  }
};
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "AI Video Generator backend is running"
  });
});

app.post("/generate", async (req, res) => {
  try {
    const { prompt, scenes } = req.body;

    if (!prompt && !scenes) {
      return res.status(400).json({
        error: "Please provide a prompt or scenes."
      });
    }

    res.json({
      success: true,
      status: "received",
      message: "Your video request has been received.",
      prompt: prompt || null,
      scenes: scenes || [],
      nextStep: "Connect AI video generation engine"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Something went wrong."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`AI Video Generator running on port ${PORT}`);
});

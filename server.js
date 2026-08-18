const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// =====================================================
// AI VIDEO PROVIDER ROUTER
// =====================================================

const providers = [
  {
    id: "pixverse",
    name: "PixVerse",
    enabled: true,
    type: "consumer",
    status: "available"
  },
  {
    id: "kling",
    name: "Kling AI",
    enabled: true,
    type: "consumer",
    status: "available"
  },
  {
    id: "hailuo",
    name: "Hailuo AI",
    enabled: true,
    type: "consumer",
    status: "available"
  },
  {
    id: "luma",
    name: "Luma Dream Machine",
    enabled: true,
    type: "consumer",
    status: "available"
  },
  {
    id: "haiper",
    name: "Haiper",
    enabled: true,
    type: "consumer",
    status: "available"
  }
];

// Current position in rotation
let providerIndex = 0;

// -----------------------------------------------------
// HOME / HEALTH CHECK
// -----------------------------------------------------

app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "AI Video Generator Router",
    version: "1.0.0"
  });
});

// -----------------------------------------------------
// LIST PROVIDERS
// -----------------------------------------------------

app.get("/providers", (req, res) => {
  res.json({
    providers
  });
});

// -----------------------------------------------------
// GET NEXT PROVIDER
// -----------------------------------------------------

app.get("/next-provider", (req, res) => {
  const available = providers.filter(
    provider => provider.enabled && provider.status === "available"
  );

  if (available.length === 0) {
    return res.status(503).json({
      success: false,
      error: "No video providers are currently available."
    });
  }

  const provider = available[providerIndex % available.length];

  providerIndex =
    (providerIndex + 1) % available.length;

  res.json({
    success: true,
    provider
  });
});

// -----------------------------------------------------
// CREATE VIDEO JOB
// -----------------------------------------------------

app.post("/generate", async (req, res) => {
  try {
    const {
      prompt,
      image,
      duration = 5,
      aspectRatio = "16:9"
    } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "A video prompt is required."
      });
    }

    const available = providers.filter(
      provider =>
        provider.enabled &&
        provider.status === "available"
    );

    if (available.length === 0) {
      return res.status(503).json({
        success: false,
        error: "No providers available."
      });
    }

    const provider =
      available[providerIndex % available.length];

    providerIndex =
      (providerIndex + 1) % available.length;

    const job = {
      id:
        "job_" +
        Date.now() +
        "_" +
        Math.random()
          .toString(36)
          .substring(2, 8),

      provider: provider.id,

      prompt,

      image: image || null,

      duration,

      aspectRatio,

      status: "queued",

      createdAt: new Date().toISOString()
    };

    /*
      IMPORTANT:

      This router does NOT fake an API call.

      Once we add a provider's legitimate API credentials,
      this section will send the job to that provider.

      If the provider has no usable API/free endpoint,
      the app will instead tell the user which provider
      should be used manually.
    */

    res.json({
      success: true,
      message: "Video job created.",
      job
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: "Video generation request failed."
    });
  }
});

// -----------------------------------------------------
// START SERVER
// -----------------------------------------------------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `AI Video Router running on port ${PORT}`
  );
});

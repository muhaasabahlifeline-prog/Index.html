const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 3000;

const providers = [
  {
    id: "pixverse",
    name: "PixVerse",
    enabled: true,
    apiConfigured: Boolean(process.env.PIXVERSE_API_KEY)
  },
  {
    id: "kling",
    name: "Kling AI",
    enabled: true,
    apiConfigured: false
  },
  {
    id: "hailuo",
    name: "Hailuo AI",
    enabled: true,
    apiConfigured: false
  },
  {
    id: "luma",
    name: "Luma",
    enabled: true,
    apiConfigured: Boolean(process.env.LUMA_API_KEY)
  }
];

let providerIndex = 0;

function getConfiguredProviders() {
  return providers.filter(
    p => p.enabled && p.apiConfigured
  );
}

function nextProvider() {
  const available = getConfiguredProviders();

  if (!available.length) return null;

  const provider =
    available[providerIndex % available.length];

  providerIndex =
    (providerIndex + 1) % available.length;

  return provider;
}

app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "AI Video Generator Router",
    version: "2.0.0"
  });
});

app.get("/providers", (req, res) => {
  res.json({
    providers: providers.map(p => ({
      id: p.id,
      name: p.name,
      enabled: p.enabled,
      apiConfigured: p.apiConfigured
    }))
  });
});

app.get("/next-provider", (req, res) => {
  const provider = nextProvider();

  if (!provider) {
    return res.status(503).json({
      success: false,
      error: "No video API is configured yet.",
      message:
        "Add an API key in Render Environment Variables."
    });
  }

  res.json({
    success: true,
    provider
  });
});


/*
=========================================================
PIXVERSE
=========================================================
*/

async function createPixVerseVideo({
  prompt,
  duration,
  aspectRatio
}) {
  const traceId = crypto.randomUUID();

  const response = await fetch(
    "https://app-api.pixverse.ai/openapi/v2/video/text/generate",
    {
      method: "POST",

      headers: {
        "API-KEY": process.env.PIXVERSE_API_KEY,
        "Ai-trace-id": traceId,
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        aspect_ratio: aspectRatio || "16:9",
        duration: duration || 5,
        model: "v6",
        prompt,
        quality: "720p"
      })
    }
  );

  const data = await response.json();

  if (!response.ok || data.ErrCode !== 0) {
    throw new Error(
      data.ErrMsg ||
      `PixVerse API error ${response.status}`
    );
  }

  return {
    provider: "pixverse",
    videoId: data.Resp.video_id,
    status: "processing"
  };
}


async function getPixVerseStatus(videoId) {
  const traceId = crypto.randomUUID();

  const response = await fetch(
    `https://app-api.pixverse.ai/openapi/v2/video/result/${videoId}`,
    {
      headers: {
        "API-KEY": process.env.PIXVERSE_API_KEY,
        "Ai-trace-id": traceId
      }
    }
  );

  const data = await response.json();

  if (!response.ok || data.ErrCode !== 0) {
    throw new Error(
      data.ErrMsg ||
      `PixVerse status error ${response.status}`
    );
  }

  return data.Resp;
}


/*
=========================================================
GENERATE
=========================================================
*/

app.post("/generate", async (req, res) => {
  try {
    const {
      prompt,
      duration = 5,
      aspectRatio = "16:9"
    } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "A prompt is required."
      });
    }

    const provider = nextProvider();

    if (!provider) {
      return res.status(503).json({
        success: false,
        error: "No generation API is configured.",
        providers: providers.map(p => ({
          name: p.name,
          apiConfigured: p.apiConfigured
        }))
      });
    }

    if (provider.id === "pixverse") {

      const result =
        await createPixVerseVideo({
          prompt,
          duration,
          aspectRatio
        });

      return res.json({
        success: true,
        job: result
      });
    }

    return res.json({
      success: false,
      status: "provider_not_implemented",
      provider: provider.id,
      message:
        `${provider.name} is selected, but its official API adapter has not been enabled yet.`
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


/*
=========================================================
STATUS
=========================================================
*/

app.get("/status/:provider/:id", async (req, res) => {

  try {

    const {
      provider,
      id
    } = req.params;

    if (provider === "pixverse") {

      const result =
        await getPixVerseStatus(id);

      return res.json({
        success: true,
        provider,
        result
      });
    }

    res.status(400).json({
      success: false,
      error: "Provider status endpoint not implemented."
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


app.listen(PORT, () => {
  console.log(
    `AI Video Router running on port ${PORT}`
  );
});

// NOTE: Make sure to create a .env file with your API keys before running the app
// Copy .env.example to .env and fill in your actual values

export default {
  expo: {
    name: "ProLog",
    slug: "prolog",
    version: "1.0.0",
    extra: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
}; 
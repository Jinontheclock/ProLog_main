# API Key Setup Instructions

## Issue: "OpenAI API key not set" Error

The error occurs because Expo needs to be restarted to pick up environment variables from the .env file.

## Solution Steps:

### 1. Verify .env File
Make sure your `.env` file exists in the root directory with:
```
OPENAI_API_KEY=your_openai_api_key_here
```

### 2. Restart Development Server
**IMPORTANT**: You must restart the Expo development server for it to read the .env file:

```bash
# Stop current development server (Ctrl+C)
# Then restart with:
npx expo start --clear
```

### 3. Alternative: Check App Config
If the issue persists, verify your `app.config.js` includes:
```javascript
export default {
  expo: {
    extra: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    },
  },
};
```

### 4. Debug Information
The updated `quizApi.ts` now includes debug logs. After restarting, check the console for:
- Constants.manifest?.extra
- Constants.expoConfig?.extra  
- OPENAI_API_KEY exists: true/false

## Most Common Solution:
**Simply restart your Expo development server with `npx expo start --clear`**

The environment variables are only loaded when Expo starts, not during runtime.
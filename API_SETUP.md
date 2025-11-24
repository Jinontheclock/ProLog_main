# API Setup Instructions

## Environment Configuration

This project uses environment variables to securely store API keys and configuration.

### Setup Steps:

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the .env file with your actual API keys:**
   ```bash
   OPENAI_API_KEY=your_actual_openai_api_key_here
   API_BASE_URL=https://api.your-backend.com
   ```

### Required API Keys:

- **OPENAI_API_KEY**: Required for quiz generation functionality
  - Get your API key from: https://platform.openai.com/api-keys
  - The quiz generation feature uses GPT-4 to create questions based on skill content

### Important Notes:

- Never commit the `.env` file to version control (it's already in .gitignore)
- The app will show fallback questions if the OpenAI API is unavailable
- Make sure to restart your development server after changing environment variables

### Usage in Code:

The API key is accessed through Expo Constants:
```typescript
import Constants from 'expo-constants';
const OPENAI_API_KEY = Constants.manifest?.extra?.OPENAI_API_KEY;
```
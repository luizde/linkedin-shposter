# LinkedIn Post Generator

A web application that transforms everyday mundane experiences into engaging LinkedIn posts using AI.

## Features

- Generate professional LinkedIn posts from daily experiences
- Random topic suggestions
- Copy-to-clipboard functionality
- Donation support via PayPal
- Responsive design

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your API keys:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser

## Deployment

The app is designed to be deployed on Vercel or AWS Amplify. Make sure to set your environment variables in the deployment platform.

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key for generating posts

## Tech Stack

- Next.js 14
- React 18
- OpenAI API
- CSS Modules
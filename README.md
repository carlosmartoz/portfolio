# QueComí 🍏

A Telegram bot that helps users discover and track their meals using AI-powered recommendations.

## Features

- 🍽️ Get personalized meal recommendations
- 📝 Track your meal history
- ✨ Premium subscription with unlimited requests
- 💳 Secure payment integration with MercadoPago
- 🔔 Automated subscription management

## Tech Stack

- Node.js & Express
- Telegram Bot API
- OpenAI API
- MercadoPago API
- Supabase
- Node-cron for scheduling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/quecomibot.git
   cd quecomibot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the root directory
   - Add required environment variables:
     ```
     TELEGRAM_TOKEN=your_telegram_bot_token
     OPENAI_API_KEY=your_openai_api_key
     MERCADOPAGO_ACCESS_TOKEN=your_mercadopago_token
     SUPABASE_URL=your_supabase_url
     SUPABASE_KEY=your_supabase_key
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Start the production server:
   ```bash
   npm run build
   npm start
   ```

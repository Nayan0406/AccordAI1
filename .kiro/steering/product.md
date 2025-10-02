# Product Overview

Accord AI is a sophisticated multilingual AI assistant that prioritizes custom dataset responses over external AI APIs. The system supports 10+ Indian languages plus English and provides intelligent conversation capabilities.

## Core Features

- **Multilingual Support**: Hindi, Urdu, Punjabi, Bengali, Tamil, Telugu, Gujarati, Marathi, Kannada, Malayalam, and English
- **Smart Response System**: Custom dataset-first approach with AI fallback
- **Authentication**: Firebase-based auth with trial system for anonymous users
- **Subscription Management**: Tiered plans with usage tracking and Razorpay integration
- **Dataset Management**: Web interface for managing custom responses and categories
- **File Processing**: PDF, Word, and image uploads with OCR capabilities
- **Voice Integration**: Speech-to-text and text-to-speech capabilities

## Response Priority Logic

1. Custom Dataset (confidence > 60%) - MongoDB responses
2. Gemini API - Google's AI when dataset doesn't match
3. Backup API - Secondary fallback service
4. Dataset Fallback - Lower confidence dataset matches
5. Final Fallback - Language-appropriate error messages

## User Types

- **Anonymous Users**: Trial-based access with time and message limits
- **Authenticated Users**: Subscription-based access with different tiers
- **Admin Users**: Dataset management and system administration capabilities
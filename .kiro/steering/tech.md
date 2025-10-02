# Technology Stack

## Backend (Node.js/Express)
- **Runtime**: Node.js v16+
- **Framework**: Express.js with middleware stack
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Firebase Admin SDK + JWT tokens
- **Payment Processing**: Razorpay integration
- **AI APIs**: Google Gemini API (primary), backup API fallback
- **File Processing**: Multer, Sharp, Tesseract.js (OCR), Mammoth (Word), PDF-parse
- **Security**: Helmet, CORS, rate limiting, input validation

## Frontend (React/TypeScript)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React hooks (useState, useEffect, custom hooks)
- **Authentication**: Firebase SDK
- **HTTP Client**: Axios
- **UI Components**: Lucide React icons, custom components
- **File Upload**: React Dropzone

## Development Tools
- **Package Manager**: npm
- **Linting**: ESLint with TypeScript support
- **Environment**: dotenv for configuration
- **Process Management**: nodemon for development

## Common Commands

### Development Setup
```bash
# Install dependencies
cd backend && npm install
cd frontend && npm install

# Start development servers
start-servers.bat  # Windows batch file
# OR manually:
cd backend && npm start     # Port 3001
cd frontend && npm run dev  # Port 5173
```

### Testing
```bash
# System-wide test
node test-system.js

# Backend tests
cd backend/scripts
node check-mongodb.js
node test-gemini-api.js
node test-complete-flow.js
node test-authentication.js

# Frontend tests
cd frontend && npm run lint
```

### Database Management
```bash
cd backend/scripts
node migrate-to-database.js --sample
node csv-import.js your-data.csv
node add-multilingual-data.js
```

### Build & Deploy
```bash
cd frontend && npm run build
cd frontend && npm run preview
```

## Environment Configuration
- Backend: `.env` file with MongoDB URI, API keys, JWT secrets
- Frontend: Vite environment variables
- Firebase: Service account key configuration
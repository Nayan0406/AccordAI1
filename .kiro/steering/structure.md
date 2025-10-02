# Project Structure

## Root Directory
```
accordai1/
├── backend/                 # Node.js/Express API server
├── frontend/                # React/TypeScript client
├── start-servers.bat        # Windows development startup script
├── test-*.js               # System-wide test scripts
├── admin-add-data.js       # Admin utility for data management
├── dataset-template.csv    # Template for dataset imports
└── *.md                    # Documentation files
```

## Backend Architecture (`/backend`)
```
backend/
├── config/                 # Configuration files
│   ├── database.js         # MongoDB connection setup
│   ├── firebase.js         # Firebase Admin SDK config
│   └── razorpay.js         # Payment gateway config
├── controllers/            # Request handlers (business logic)
│   ├── aiController.js     # AI response logic
│   ├── authController.js   # Authentication handlers
│   ├── chatController.js   # Chat message processing
│   └── datasetController.js # Dataset management
├── middleware/             # Express middleware
│   └── auth.js             # JWT authentication middleware
├── models/                 # Database schemas
│   ├── Dataset.js          # MongoDB dataset schema
│   ├── User.js             # User model
│   └── UserStore.js        # In-memory user storage
├── routes/                 # API route definitions
│   ├── ai.js               # AI chat endpoints
│   ├── auth.js             # Authentication routes
│   ├── chat.js             # Chat message routes
│   ├── dataset.js          # Dataset management routes
│   ├── payment.js          # Payment processing routes
│   └── subscription.js     # Subscription management routes
├── scripts/                # Utility and maintenance scripts
│   ├── migrate-to-database.js    # Database migration
│   ├── csv-import.js             # Bulk data import
│   ├── add-multilingual-data.js  # Language data setup
│   └── test-*.js                 # Individual component tests
├── data/                   # Static data files
│   └── custom-dataset.json # Default dataset
├── server.js               # Main application entry point
└── .env                    # Environment configuration
```

## Frontend Architecture (`/frontend`)
```
frontend/
├── src/
│   ├── components/         # React components
│   │   ├── ChatHeader.tsx      # App header with user controls
│   │   ├── ChatMessage.tsx     # Individual message display
│   │   ├── ChatInput.tsx       # Message input with voice/file
│   │   ├── AuthModal.tsx       # Authentication dialog
│   │   ├── SubscriptionModal.tsx # Payment/upgrade dialog
│   │   ├── DatasetModal.tsx    # Dataset management interface
│   │   └── *.tsx               # Other UI components
│   ├── hooks/              # Custom React hooks
│   │   ├── useAuth.ts          # Authentication state management
│   │   ├── useChat.ts          # Chat functionality
│   │   ├── useSubscription.ts  # Subscription management
│   │   └── usePayment.ts       # Payment processing
│   ├── services/           # API communication
│   │   └── paymentService.ts   # Razorpay integration
│   ├── types/              # TypeScript type definitions
│   │   └── subscription.ts     # Subscription-related types
│   ├── config/             # Configuration files
│   │   └── firebase.ts         # Firebase client config
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── dist/                   # Build output (generated)
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite build configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Architectural Patterns

### Backend Patterns
- **MVC Architecture**: Controllers handle requests, Models define data, Routes define endpoints
- **Middleware Chain**: Authentication, rate limiting, CORS, error handling
- **Service Layer**: AI processing, payment handling, dataset management
- **Configuration Management**: Environment-based settings with fallbacks

### Frontend Patterns
- **Component-Based Architecture**: Reusable UI components with props
- **Custom Hooks**: Shared state logic (auth, chat, subscription)
- **Service Layer**: API communication abstracted from components
- **Type Safety**: Full TypeScript coverage with defined interfaces

### Data Flow
1. **Frontend** → API request via Axios
2. **Backend Routes** → Controller functions
3. **Controllers** → Models/Database operations
4. **Response** → JSON back to frontend
5. **Frontend** → State updates via hooks
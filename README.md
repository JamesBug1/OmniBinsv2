  **OmniBins**
  
  Is a comprehensive IoT-based smart waste management system designed to replace rigid collection schedules with a data-driven logistics model, specifically tailored for municipalities in tropical climates like Argao, Cebu. The system uses high-precision Load Cells to monitor the bin's real-time weight, preventing overloads that can injure sanitation workers and cause environmental spillage. To combat the rapid decay of organic waste, OmniBins utilizes a gas-sensing array to calculate a "Rot Index," which detects hazardous concentrations of Ammonia (NH₃) and Methane (CH₄). When the Rot Index reaches a critical threshold, the system automatically triggers a neutralizing mist to control odors and disinfect the area. All data, including weight alerts and "Stench Mapping," is sent to a centralized IoT dashboard via the robust, low-power LoRa Star Topology network, enabling Local Government Units (LGUs) to optimize collection routes, reduce fuel costs, and ensure a cleaner, safer environment for the community. The entire system is powered autonomously 24/7 using integrated solar panels.

## Frontend Firebase Setup

1. Copy `.env.example` to `.env` or `.env.local`.
2. Open Firebase console and get your web app config values.
3. Set values for `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_DATABASE_URL`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, and `VITE_FIREBASE_APP_ID`.
4. Run the React app with `npm run dev`.

The frontend now uses Firebase Auth for email/password and Google login, and stores the token locally so authenticated users can access protected routes.

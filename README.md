Task: Product Delivery Estimation App
This project is a React Native application that allows users to select a product, enter a pincode, and get an estimated delivery date based on the logistics provider associated with the pincode. The app also includes a countdown timer to show the time remaining for same-day delivery eligibility.

Table of Contents
Setup Instructions
Assumptions
Key Design Decisions
Setup Instructions
1. Prerequisites
Node.js: Ensure you have Node.js (preferably LTS version) installed.
Expo CLI: Install Expo if it’s not already installed.
React Native Environment: Set up a React Native development environment.
2. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/task-app.git
cd task-app
3. Install Dependencies
bash
Copy code
npm install
4. Run the Application
Local Development
To start the development server and open the app in Expo Go (or a compatible browser):

bash
Copy code
npx expo start
This command opens a development server. You can scan the QR code using the Expo Go app (available on iOS and Android) or open it in a web browser if you’re developing with React Native Web.

5. Build for Web
If you want to build the project for deployment on the web:

bash
Copy code
expo build:web
This command generates a web-build folder containing the static assets.

Deploying to Vercel
Install the Vercel CLI if needed:

bash
Copy code
npm install -g vercel
Deploy the project to Vercel:

bash
Copy code
vercel
Follow the prompts, specifying web-build as the deployment directory.

Assumptions
Stock Availability: It’s assumed that 80% of products are in stock at any given time.
Pincode Mapping: A sample Excel file (pincodes.xlsx) links pincodes to logistics providers and regions, with data about metro, non-metro, and tier 2-3 cities.
Excel Data: We’re using Excel files for products, stock, and pincodes. These files are parsed at runtime, so the app expects consistent formatting in these files.
Static Files: The xlsx files are stored locally in the assets/data folder, and no real-time updates are expected for these files.
Key Design Decisions
React Native with Expo: Expo was chosen for this project to streamline development and support for web deployment. This enables quick testing and future scalability.
Excel Data Parsing: The xlsx library is used to read and parse data from the Excel files. Parsing is handled in DataLoader.js, making it easy to replace or update data sources if needed.
Countdown Timer: The countdown timer is implemented using react-native-countdown-component to visually indicate the remaining time for same-day delivery eligibility.
Responsive Design: The UI components and layouts are optimized for mobile and web views. FlatLists and buttons are used for smooth interactions across platforms.
Date Calculations: The dayjs library is used for time and date manipulation, ensuring consistency in countdown timers and delivery date estimates.

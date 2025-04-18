# Interest Match App

## Demo:


https://github.com/user-attachments/assets/3c5d19b8-58ea-4568-b51d-53471123fb53



## Overview:
The Interest Match App helps users find potential matches based on shared interests. Users can sign up with their name and email, select their interests from a predefined list, and search for other users with similar preferences. If no match is found, the system will notify the user accordingly. If a match is found, the user is redirected to the home screen to view their match's profile.

## Key Features:

### User Registration:
- **Sign-Up Process:** Users can register by providing their name, email, and interests.
- **Backend Storage:** After submission, the user's data is securely stored in the backend, enabling future match-making.

### Interest Selection:
- **Predefined List:** During registration, users select their interests from a curated list.
- **Interest-based Matching:** These interests are used to find other users with similar preferences, increasing the chances of a successful match.

### Finding Matches:
- **Match-making Logic:** The system attempts to match users who have common or similar interests.
- **No Matches:** If no matches are found, users are informed that no matches exist at the moment.
- **Successful Match:** If a match is found, users are directed to the home screen where they can view the details of their match.

### Match Making:
- **Interest Overlap:** The matching algorithm compares the selected interests of users. The more interests they share, the higher the chances of being matched.
- **User Experience:** The application ensures that users with overlapping interests are presented as potential matches.

### No Match Found:
- **Notification:** If the system cannot find a match, users are notified that no match is available at the moment.

### Next Match:
- **Reattempt Matching:** Users can update their interests or retry the matching process to find new potential matches.

## Tools & Technologies Used:

- **Frontend:** React Native  
  Used to build the cross-platform mobile app, supporting both Android and iOS.
  
- **Backend:** Node.js with Express  
  Powers the API, handling user registration, interest storage, and match-making logic.
  
- **Database:** MongoDB  
  Stores user data, including names, emails, and interests, for efficient querying and matching.
  
- **Axios:** HTTP Client  
  Handles requests from the frontend to the backend, enabling smooth communication.
  
- **KeyboardAvoidingView:**  
  Ensures form elements stay visible when the keyboard is opened on mobile devices.

---

### Steps to Clone and Run the Application Locally:

1. **Clone the Repository:**  
   Start by cloning the GitHub repository to your local machine:
   
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   cd your-repository-name
   ```

2. **Install Dependencies:**  
   Make sure you have Node.js and npm (Node Package Manager) installed. Then, install the necessary dependencies for both the frontend and backend:
   
   #### For Backend:
   
   ```bash
   cd backend
   npm install
   ```

   #### For Frontend:
   
   ```bash
   cd frontend
   npm install
   ```

3. **Set Up MongoDB:**  
   - **MongoDB Atlas:**  
     If using MongoDB Atlas, create a free cluster and obtain the connection URL from the "Connect" button.
   
   - **Local MongoDB:**  
     If using a local instance, ensure MongoDB is installed and running. The default MongoDB URL is `mongodb://localhost:27017/yourdbname`.

4. **Configure the MongoDB URL:**  
   In the backend project, open the configuration file (usually `.env` or `config.js`) and set the MongoDB URL:

   ```bash
   MONGO_DB_URL=mongodb://localhost:27017/yourdbname
   ```

5. **Start the Backend:**  
   From the backend directory, start the server:

   ```bash
   npm start
   ```

6. **Start the Frontend:**  
   Navigate to the frontend directory and start the application:

   ```bash
   npm start
   ```

7. **Run on Emulator/Device:**  
   To run the app on an Android or iOS emulator or physical device, use the following commands:

   #### For Android:
   ```bash
   npx react-native run-android
   ```

   #### For iOS:
   ```bash
   npx react-native run-ios
   ```


## User Flow:

### Signup:
- Users will enter their name and email and select their interests.
- After submission, the app stores the data in the backend (MongoDB).

### Finding Matches:
- Once signed up, the system will attempt to find users with matching or similar interests.
- If a match is found, the user is redirected to the home screen with the match's details.

### No Match Found:
- If no match is found, the user is shown a notification indicating no match is available at that time.

### Next Match:
- Users can reattempt the matching process to find new matches.


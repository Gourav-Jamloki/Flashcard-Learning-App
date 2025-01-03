# Flashcards Learning App

A **basic Flashcards Learning App** built using **React Native** and **Expo**. This project helped me explore routing and state management in React Native, along with other key features of the framework. The app allows users to navigate through flashcards, view questions, reveal answers, and use navigation buttons for sequential card traversal.

## 🚀 Features

- **Welcome Screen**: A simple introduction screen with a button to navigate to the main app.
- **Routing**: Implemented using `expo-router` for seamless screen transitions.
- **Flashcards Viewer**: Displays one flashcard at a time with the ability to:
  - Toggle between **question** and **answer**.
  - Navigate to the **next** and **previous** cards using dedicated buttons.
- **Responsive UI**: Designed with a clean and user-friendly interface.
- **State Management**: Managed state locally using React hooks like `useState` and `useEffect`.

## 🛠️ Technologies Used

- **React Native**
- **Expo**
- **expo-router** for navigation
- **JavaScript** for logic implementation
- **CSS-in-JS** for styling

## 📂 Project Structure

/app |_ layout.jsx // Navigation layout | Welcome.jsx // Welcome screen |_ Home.jsx // Main flashcards screen /components |_ Flashcard.jsx // Flashcard component /data |_ flashcards.js // Flashcard data source

markdown
Copy code

## 💡 Learning Outcomes

This project was an excellent opportunity to:
- Get hands-on experience with **React Native** and **Expo**.
- Understand and implement **navigation** using `expo-router`.
- Manage component state effectively using React hooks.
- Design and style React Native components for a seamless user experience.

## 🎯 Future Improvements

- Add a feature to shuffle flashcards.
- Implement categories or tags for better organization.
- Enhance UI/UX with animations and transitions.
- Persist user progress with local storage or a backend.

## 🔧 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flashcards-learning-app.git
   cd flashcards-learning-app
Install dependencies:

bash
Copy code
npm install
Start the app:

bash
Copy code
npm start
Scan the QR code in the Expo Go app on your phone to view the app.

Feel free to fork, contribute, or share feedback! 😊
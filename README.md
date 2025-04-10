# ChatNest - React Firebase Chat Application

ChatNest is a real-time chat application built using React and Firebase, allowing users to create channels and chat with their friends seamlessly. This project leverages the power of Firebase for authentication, real-time database, and hosting, providing a reliable and scalable solution for modern chat applications.

## Getting Started

Follow these instructions to set up and run ChatNest on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SatyamIITian/ChatNest.git
   ```

2. Change to the project directory:

   ```bash
   cd chatnest
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

### Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).

2. In your Firebase project, go to Project settings and add a new web app.

3. Copy the Firebase configuration object.

4. Create a file named `.env.local` in the project root and add your Firebase configuration:

   ```env
    REACT_APP_API_KEY=
    REACT_APP_AUTH_DOMAIN=
    REACT_APP_PROJECT_ID=
    REACT_APP_STORAGE_BUCKET=
    REACT_APP_MESSAGING_SENDER_ID=
    REACT_APP_APP_ID=
    REACT_APP_MEASUREMENT_ID=
   ```

   Replace the values with your actual Firebase project configuration.

### Run the Application

Run the following command to start the development server:

```bash
npm start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Features

- **Channel Creation**: Users can create channels to organize conversations.
- **Real-Time Chat**: Messages are updated in real-time, providing a seamless chatting experience.
- **Firebase Authentication**: Secure authentication powered by Firebase Authentication.
- **Responsive Design**: The application is designed to work seamlessly on various devices and screen sizes.

## Contributing

Feel free to contribute to the project by opening issues or creating pull requests. Your feedback and contributions are highly appreciated.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy chatting with ChatNest! 🚀

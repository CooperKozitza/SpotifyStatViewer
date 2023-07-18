# Spotify Stat Viewer
Spotify Stat Viewer is a Next.js web application that allows users to view their Spotify listening statistics, including their top artists and songs​.

The app is deployed on Vercel, but the app is still in development. Because of this, users need to be individually added to the Spotify user management before they are able to log in. If you would like to try the app, please email me with your full name and the email you use with Spotify. You can find my email in my account bio.

## Getting Started
1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create the file `.env.local` in the root directory.
    - Define the following values from the Spotify developer dashboard...
   
        ```javascript
        CLIENT_ID="client_id"
        CLIENT_SECRET="client_secret"
        SCOPE="user-read-email user-read-recently-played user-top-read"
        REDIRECT_URI="localhost:3000/api/auth/callback"
        ```
        
5. Start the development server by running `npm run dev`, `yarn dev`, or `pnpm dev​`.
6. Open your browser and visit http://localhost:3000 to see the application in action.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have suggestions for improvements or new features.

# Spotify Stat Viewer
Spotify Stat Viewer is a Next.js web application that allows users to view their Spotify listening statistics, including their top artists and songs​1​.

## Features
-Display top artists and songs from Spotify listening history.
-Optimized font loading with next/font.

## Getting Started
1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create the directory `./client` and the file `client.js` within.
    - Define the following values from the Spotify developer dashboard...
   
        ```javascript
        export const CLIENT_ID = "client_id"
        export const CLIENT_SECRET = "client_secret"
        export const SCOPE = "user-read-recently-played user-read-email user-top-read"
        export const REDIRECT_URI = "http://localhost:3000/api/auth/callback"
        ```
        
5. Start the development server by running `npm run dev`, `yarn dev`, or `pnpm dev​`.
6. Open your browser and visit http://localhost:3000 to see the application in action.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have suggestions for improvements or new features.

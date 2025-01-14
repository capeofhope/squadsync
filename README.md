<<<<<<< HEAD
# SquadSync
=======
#SquadSync
##Live Project-squadsync-production.up.railway.app
Tools and technologies used:
>>>>>>> e62f1981ed64c4161bf17da59b042af310448b0d

SquadSync is a collaborative project management tool designed to help teams stay organized and efficient. This README provides an overview of the project, including installation instructions, project structure, features, and contributing guidelines.

## Table of Contents

<<<<<<< HEAD
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [NPM Packages Used](#npm-packages-used)
- [Contributing](#contributing)
- [References](#references)

## Features

- Real-time collaboration
- Task management
- User authentication
- Live chatting
- Video and Audio call
- Clerk Authentication 
- File sharing
- Channel creation
- Admin and User functionality

## Project Structure

```
squadsync/
├── app/
|── components/
├── hooks/
├── lib/
|── pages/
├── prisma/
├── public/
│   ├── index.html
│   └── favicon.ico
├── .env
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/squadsync.git
   ```
2. Navigate to the project directory:
   ```sh
   cd squadsync
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

| Variable                              | Description                            |
| ------------------------------------- | -------------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`   | Your Clerk publishable key             |
| `CLERK_SECRET_KEY`                    | Your Clerk secret key                  |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`       | URL for the sign-in page               |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`       | URL for the sign-up page               |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Redirect URL after sign-up             |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Redirect URL after sign-in             |
| `DATABASE_URL`                        | Your Prisma database connection string |
| `UPLOADTHING_SECRET`                  | Your Uploadthing secret key            |
| `UPLOADTHING_APP_ID`                  | Your Uploadthing application ID        |
| `LIVEKIT_API_KEY`                     | Your LiveKit API key                   |
| `LIVEKIT_API_SECRET`                  | Your LiveKit API secret                |
| `NEXT_PUBLIC_LIVEKIT_URL`             | Your LiveKit server URL                |

## NPM Packages Used

- `react`
- `next`
- `react-dom`
- `react-router-dom`
- `zustand`
- `axios`
- `radix-ui`
- `tanstack`
- `@uploadthing/react`
- `@emoji-mart/data`
- `livekit-server-sdk`
- `socket.io`

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [LiveKit Documentation](https://docs.livekit.io/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [React Router Documentation](https://reactrouter.com/web/guides/quick-start)
=======
- use cn for resolving class conflicts on different states of the component.
- folder named as - (folder_name) are organisation folder and doesn't contribute in routes.
- npx prisma generate - to generate new schema model
- npx prisma db push -to push the new schemas
- npx prisma studio -to let you see what is inside your db
- npm i axios- for routing and using different methods
- npm i uuid-
- npm i -D types/uuid
- npm i zustand
- npm i query-string
- npm i socket.io
- npm i socket.io-client
- npm i emoji-mart @emoji-mart/data @emoji-mart/react
- npm i @tanstack/react-query
- npm i date-fns
- npm install livekit-server-sdk @livekit/components-react @livekit/components-styles --save
>>>>>>> e62f1981ed64c4161bf17da59b042af310448b0d

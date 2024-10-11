import React from 'react';   
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App Name</title>
      </head>
      <div id="root">
        {isAuthenticated ? (
          <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Please log in to view this page.</p>
        )}
      </div>
    </>
  );
};

export default Home;

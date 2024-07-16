// Import necessary hooks and functions
import { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [currentUser, setCurrentUser] = useState(null);

  // Update the local state whenever the user changes
  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  // Sign in to Firebase with GitHub authentication
  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  // Sign out of Firebase
  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {currentUser ? (
        <div>
          <p>
            Welcome, {currentUser.displayName} ({currentUser.email})
          </p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={handleSignIn}>Sign In with GitHub</button>
        </div>
      )}
    </div>
  );
}


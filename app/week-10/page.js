"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication

  async function handleSignIn() {
    await gitHubSignIn();
  }

  // Sign out of Firebase
  async function handleLogOut() {
    await firebaseSignOut();
  }

  // Display some of the user's information
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-100">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Your App
      </h1>
      {user ? (
        <div className="flex items-center space-x-4">
          <p className="text-xl font-medium">
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link
            href="week-10/shopping-list"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Shopping List
          </Link>
          <button
            onClick={async () => await firebaseSignOut()} // Sign out of Firebase
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={async () => await gitHubSignIn()} // Sign in to Firebase with GitHub authentication
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
}

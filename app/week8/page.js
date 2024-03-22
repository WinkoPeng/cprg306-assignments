"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Week8Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  

  const handleGitHubSignIn = async () => {
    
      await gitHubSignIn();
    
  };

  const handleFirebaseSignOut = async () => {
    
      await firebaseSignOut();
   
  };
  

  return (
    <div>
    {/* Check if user exist */}
      {user  ?  (
        // User is logged in
        <div className="text-center">
          <h1 className="mt-5 mb-5 text-3xl font-bold">Welcome {user.displayName} {user.email}!</h1>
            <div className="mt-5 mb-5">
                <Link className="bg-orange-500 hover:bg-orange-300 p-2 m-2 w-28 rounded-md text-md font-bold text-white text-center drop-shadow-md" href="/week8/shopping-list">Shopping List</Link>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 p-1 m-2 w-28 rounded-md text-md font-bold text-white text-center drop-shadow-md" onClick={handleFirebaseSignOut}>Logout</button>
            </div>
        </div>
      ) : (
        // User is not logged in
        <div className="text-center">
          <h1 className="mt-5 mb-5 text-3xl font-bold">Login to Continue</h1>
          <button className="bg-blue-500 p-1 m-2 w-28 rounded-md text-md font-bold text-white text-center drop-shadow-md" onClick={handleGitHubSignIn}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
}
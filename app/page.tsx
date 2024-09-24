'use client'

import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'

// Define the interface for user data
interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

  if (!userData) {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Data</h1>
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <ul className='bg-white'>
        <li>ID: {userData.id}</li>
        <li>First Name: {userData.first_name}</li>
        <li>Last Name: {userData.last_name || 'N/A'}</li>
        <li>Username: {userData.username || 'N/A'}</li>
        <li>Language Code: {userData.language_code}</li>
        <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
      </ul>
    </main>
  );
};

'use client';

import { useEffect, useState } from 'react';

export default function ClientRequest() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return <div>Requesting...</div>;
  }

  return (
    <div>
      <h1>Client request to /api/user</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

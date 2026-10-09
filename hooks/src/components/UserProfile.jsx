
import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const success = false;

      if (success) {
        setUser({
          name: "Megasree",
          email: "mega@example.com"
        });
      } else {
        setError(true);
      }

      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container mt-3">
      <div className="card p-3">
        <h3>User Profile</h3>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Something went wrong</p>
        ) : (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;

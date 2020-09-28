import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Account from './components/Account';

const App = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // Fecth data API
  const fetchUser = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(response.data)
      setUsers(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error)
    })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="App">
      <h1>Display Active Users Account Details</h1>
      {
        isLoading ? (
          <p>Fetching users...</p>
        ) : (
          users.map((user) => {
            return <Account key={user.username} user={user} />;
          })
        )
      }
    </div>
  );
}

export default App;

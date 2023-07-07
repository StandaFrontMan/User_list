import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const MainPage = ({ hendleClick }) => {

    const { usersDataArray, status, error } = useSelector(state => state.user);

  return (
    <div>
        <h2>Users form Data Base</h2>

        {status == 'loading' && <div>Loading ...</div>}
        {error && <div>Server error: {error}</div>}
        {status == 'resolved' && (
            usersDataArray.map(user => (
                <Link key={user.id} to={`/user/${user.id}`}>
                    <h3>{user.name}</h3>
                </Link>
            ))
        )}

        <button onClick={() => hendleClick()}>fetch</button>
    </div>
  )
}

export default MainPage
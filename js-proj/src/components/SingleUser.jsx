import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SingleUser = () => {

    const { id } = useParams();
    const { usersDataArray } = useSelector(state => state.user);

  return (
    <div className='user-info-block'>
        <h2 className='user-name'>{usersDataArray[id - 1].name}</h2>
        <h2 className='user-email'>{usersDataArray[id - 1].email}</h2>
    </div>
  )
}

export default SingleUser
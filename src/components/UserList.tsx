import React from 'react';
import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';


const UserList: React.FC = () => {
  const user = useSelector(state => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers()

    console.log(user.users)
  }, []); // eslint-disable-line

  return(<pre>
    {JSON.stringify(user, null, 2)}
  </pre>)
}

export default UserList;
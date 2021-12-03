import React from 'react';
import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';


const UserList: React.FC = () => {
  const user = useSelector(state => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers()
  }, []);
  
  // const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
  return(<pre>
    {JSON.stringify(user, null, 2)}
  </pre>)
}

export default UserList;
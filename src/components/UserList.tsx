import React from 'react';
import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';

import { getUser, getTodo } from './selectors'



const UserList: React.FC = () => {
  const user = useSelector(getUser);
  const todo = useSelector(getTodo);

  const { fetchTodos } = useActions()
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers()
    fetchTodos(1, 3)

    console.log(todo.todos)
  }, []); // eslint-disable-line

  return(<pre>
    {JSON.stringify(todo, null, 2)}
    {JSON.stringify(user, null, 2)}
  </pre>)
}

export default UserList;
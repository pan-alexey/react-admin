import React from 'react'
import {useSelector} from 'react-redux'

export default () => {
  const state = useSelector(state => state)
  console.log(state);

  return(
    <>
    <div>
    home.tsx: <span> {} </span>
    </div>
     
    </>
  )
}


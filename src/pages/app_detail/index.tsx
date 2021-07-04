import React from 'react'
import { useParams } from 'react-router-dom'

function AppDetail() {
  const { id } = useParams<{id: string}>()

  return (
    <>
      <div>id is {id}</div>
    </>
  )
}

export default AppDetail

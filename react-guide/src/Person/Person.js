import React from 'react'

function Person() {
  return (
    <>
    {/* For dynamic content in JSX wrap them in {} */}
    <h1>I am Person wiht {Math.floor(Math.random()*10)} years old.</h1>
    </>
  )
}

export default Person
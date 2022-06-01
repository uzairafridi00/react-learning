import React from 'react'

function Student(props) {
  return (
      <>
      {/* Now we will Use React props (properties) to pass data dynamically */}
      <h4>I am {props.name}, student of {props.school} and I am {props.age} years old.</h4>
      </>
  )
}

export default Student
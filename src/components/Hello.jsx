import React from 'react'

function Hello(props) {
  const { person } = props
  const { name, message, emoji, seatNumbers } = person

  return (
    <div>
      <h1>
        {message}, {name}
      </h1>
      <p>{emoji}</p>
      <p>Seat Numbers: {seatNumbers.join(', ')}</p>
    </div>
  )
}

export default Hello

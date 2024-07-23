import React from 'react'

const fruits = [
  { name: 'Apple', emoji: '🍎', price: 3, soldOut: false },
  { name: 'Banana', emoji: '🍌', price: 1, soldOut: true },
  { name: 'Cherry', emoji: '🍒', price: 7, soldOut: false },
  { name: 'Grapes', emoji: '🍇', price: 8, soldOut: false },
  { name: 'Orange', emoji: '🍊', price: 6, soldOut: false },
  { name: 'Pineapple', emoji: '🍍', price: 5, soldOut: true },
]

const Fruits = () => {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>
          <h3>
            {fruit.name} {fruit.emoji} - ${fruit.price}
            {fruit.soldOut ? <span> - Sold Out</span> : null}
          </h3>
        </li>
      ))}
    </ul>
  )
}

export default Fruits

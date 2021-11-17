import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Display = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  function incrementCount() {
    setCount(count + 1)
  }

  function decrementCount() {
    setCount(count - 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
    </>
  )
}

Display.propTypes = {
  initialCount: PropTypes.number
}

export default Display

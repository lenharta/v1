import { useState } from 'react'

const useScrollDirection = ({ startingDirection }) => {
  const [scrollingDirection, setScrollingDirection] = useState(startingDirection);
}

export default useScrollDirection

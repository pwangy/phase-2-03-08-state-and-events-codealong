import { useState } from 'react'

const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  const color = toggle ? 'red' : 'white'
  
  const handleClick = e => {
    setToggle(toggle => !toggle)
  }

	return <button style={{ background: color }} onClick={handleClick} >{toggle ? 'ON' : 'OFF'}</button>
}

export default Toggle
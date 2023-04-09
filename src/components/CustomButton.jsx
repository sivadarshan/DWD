import { color } from 'framer-motion'
import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({title,type,handleClick,customStyles}) => 
{
  const snap = useSnapshot(state);
  const generateStyle=(type) => {
    if(type === 'filled')
    {
      return {
        backgroundColor:snap.color,
        color:getContrastingColor(snap.color),
      }
    }
    else if(type === "outline")
    {
      return{
        borderWidth:'2px',
        borderColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    }
  }
return (
<button 
  className={`px-2 py-1.5 flex-1 rounded-lg ${customStyles}`}
  style={generateStyle(type)}
  onClick={handleClick}
>
    {title}
</button>  
)
}

export default CustomButton;
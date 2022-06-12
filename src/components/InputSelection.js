import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import icon from '../PngItem_5074466.png'

const InputSelection = () => {
    const [toggle,setToggle] = useState(false)
    const [check,setNewCheck] = useState(undefined)
    const iconLink = "<img src={icon} alt='logo' length={40} width={40}/>"
  return (
    <div>
      <input 
      placeholder='Enter New Task'
      value={check}
      onChange={(e)=>setNewCheck(iconLink)}
      required={true}
      disabled={true}
      >
      </input>
      {/* <button type="button" onClick={()=>{dispatch(addTask(task))}}>
        Add task
      </button> */}
    </div>
  )
}

export default InputSelection

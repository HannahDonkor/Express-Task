import React, {useState} from 'react'
import './Dropdown.css'
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({name, selected, toggleCollapse, toggleGender}) => {
  
  return (
    <div className='dropdown'>
        <div className='dropdown-btn'>
          {name}
          <span>
            <IoIosArrowDown onClick={() => toggleCollapse()} />
          </span>
         
        
        </div>
        <section className={selected  ? 'show' : 'text-content'}>
            <div onClick={() => toggleGender('Male')}>Male</div>
            <div onClick={() => toggleGender('Female')}>Female</div>
          </section>

    </div>
  )
}

export default Dropdown
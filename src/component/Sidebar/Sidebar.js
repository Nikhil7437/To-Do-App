import React, { useState } from 'react'
import "../Sidebar/Sidebar.css"
import add from "../../images/Add-Button-PNG.png"
const Sidebar = (props) => {
  const colors = ["rgb(240, 122, 224)", "rgb(240, 122, 141)", " rgb(122, 222, 240)", "rgb(171, 240, 122)", "rgb(240, 201, 122)", "rgb(122, 142, 240)"]
  const [listopen, setlistopen] = useState(false)

  return (

    <div className='sidebar-wrapper'>
      <img src={add} alt="" onClick={() => setlistopen(!listopen)} />
      <ul className={`sidebar-list ${listopen ? "sidebar-items-display" : " "}`}>
        {colors.map((color, index) => {
          return (<li key={index} style={{ backgroundColor: color }}
            onClick={() => props.addnote(color)} ></li>

          )
        })
        }
      </ul>
    </div >


  )
}

export default Sidebar

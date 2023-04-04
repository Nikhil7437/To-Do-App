import React from 'react'
import "../Note/Note.css"
import bin from "../../images/bin3.png"
const Note = (props) => {
  const updatetext =(text , id)=>
  {
props.updatetext(text , id)
  }
  return (
    <div >
      <div className="note-wrapper" style={{ backgroundColor: props.note.color }} >
        <textarea name="" id="" cols="30" rows="10" defaultValue={props.note.text} onChange={(event)=>updatetext(event.target.value , props.note.id)} >

        </textarea>
        <div className='note-bottom'>

        <p className='date-time'> {props.note.time}</p>
        <img src={bin} alt="" className='delete-icon' onClick={()=>props.deletenote(props.note.id)} />
        </div>
      </div>
    </div>
  )
}

export default Note

import React from 'react'
import Note from '../Note/Note'
import "../Notecontainer/Notecontainer.css"


const Notecontainer = (props) => {

  const reversearry=(arr)=>
  {
    const array=[];
    for (let i = arr.length-1; i>=0; --i) {
      array.push(arr[i]);
      
    }
    return array
  }

const notes = reversearry(props.notes)

  return (
    <div >
      <div className='notes-container-wrapper'>
        <h2>Notes</h2>
        <div className="notes-container-box">
          {notes.length === 0 ? (
            <h2 className='no-notes'>No notes available</h2>
          ) :(
            notes.map((items) => {
              return( <Note key={items.id} note={items} deletenote={props.deletenote} updatetext={props.updatetext} />)
             
            }))
          }




        </div>
      </div>
    </div>
  )
}

export default Notecontainer

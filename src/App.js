import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Notecontainer from './component/Notecontainer/Notecontainer';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [notes, setnotes] = useState(JSON.parse(localStorage.getItem("app-notes"))||[])

  const timestamp = Date.now();
  const date = new Date(timestamp);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  const addnote = (color) => {
    const tempnotes = [...notes]
    // console.log(Date.now() + "" + Math.floor(Math.random() * 13))
    tempnotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 13),
      text: "",
      time: formattedDate,
      color
    })
    setnotes(tempnotes)
  }
  const deletenote = (id) => {
    const tempnotes = [...notes]
    const index = tempnotes.findIndex(item => item.id === id)
    console.log("triggerd to delete")
    if (index < 0) {
      return;
    }
    tempnotes.splice(index, 1)
    setnotes(tempnotes)
  }

  const updatetext =(text ,id)=>
  {

    const tempnotes = [...notes]
    const index = tempnotes.findIndex(item => item.id === id)
    
    if (index < 0) {
      return;
    }
  tempnotes[index].text=text;
    setnotes(tempnotes)

  }

useEffect(()=>
{
localStorage.setItem("app-notes",JSON.stringify(notes))
},[notes])

  return (
    <div className='main'>
      <Sidebar addnote={addnote} />
      <Notecontainer notes={notes} deletenote={deletenote}  updatetext={updatetext} />
    </div>
  );
}

export default App;

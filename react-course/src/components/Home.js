import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/note/NoteContext'

function Home() {

const data = useContext(NoteContext);
useEffect(() => {
    data.update();
}, []);

  return (
    <>
        <div>
            I am {data.state.name} and I am {data.state.age} years old.
        </div>
    </>
  )
}

export default Home
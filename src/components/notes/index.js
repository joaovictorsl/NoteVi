import React, { useState, Fragment, useEffect } from 'react';
import '../../styles/notes.scss';
import { slide as Menu } from 'react-burger-menu';
import ListNotes from './list';
import NotesService from '../../services/notes';

const Notes = (props) => {

  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" })

  useEffect(() => {
    fetchNotes();
  }, [])

  async function fetchNotes() {
    const response = await NotesService.userNotes();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    }
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id
    })
    setCurrentNote(note)
  }

  return (
    <Fragment>
      <div className='wholescreennotes'>
        <Menu isOpen={props.isOpen}
          disableAutoFocus
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          customBurgerIcon={false}
          customCrossIcon={false}
          width={'20%'}>
          <div className='organize-menu'>
            <ul>
              <li><p>Search</p> <input className='notesinput'></input></li>
              <li>
                <p>Notes</p>
                <ListNotes notes={notes} selectNote={selectNote} current_note={current_note} />
              </li>
            </ul>
          </div>
        </Menu>
      </div>
    </Fragment>
  )
}

export default Notes;
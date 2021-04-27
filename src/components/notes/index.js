import React, { useState, Fragment, useEffect } from 'react';
import '../../styles/notes.scss';
import { slide as Menu } from 'react-burger-menu';
import ListNotes from './list';
import NotesService from '../../services/notes';
import Editor from '../notes/editor';
import Search from '../notes/search';

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
    } else {
      setNotes([])
      setCurrentNote({ title: "", body: "", id: "" })
    }
  }

  const createNote = async () => {
    await NotesService.create();
    fetchNotes();
  }

  const deleteNote = async (id) => {
    await NotesService.delete(id);
    fetchNotes();
  }

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NotesService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  }

  const searchNote = async (query) => {
    const res = await NotesService.search(query);
    setNotes(res.data);
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
          width={'21%'}>
          <div className='organize-menu'>
            <ul>
              <li>
                <Search searchNotes={searchNote} fetchNotes={fetchNotes} />
              </li>
              <li>
                <p>Notes</p>
                <div className='ListContainer'>
                  <ListNotes notes={notes} selectNote={selectNote} deleteNote={deleteNote} current_note={current_note} />
                </div>
                <button className="newnotebtn" onClick={() => createNote()}>New note +</button>
              </li>
            </ul>
          </div>
        </Menu>
        <Editor note={current_note} updateNote={updateNote} />
      </div>
    </Fragment >
  )
}

export default Notes;
import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Input, Column } from "rbx";
import '../../../styles/editor.scss';
function Search(props) {
  const [query, setQuery] = useState("")

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (query.length >= 1) {
        props.searchNotes(query)
      } else {
        props.fetchNotes()
      }
    }
  }

  return (
    <Fragment>
      <p>Search</p> <input className='notesinput' type='text' name={query} value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}></input>
      <a href="#" onClick={() => {
        props.fetchNotes()
        setQuery('')
      }}>
        <FontAwesomeIcon
          icon={faTimes}
          color="gray"
          className="iconTimes"
        />
      </a>
    </Fragment>
  )
}

export default Search;
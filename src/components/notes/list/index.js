import React, { Fragment, useState } from 'react';
import Moment from 'moment';

const ListNotes = (props) => {

  return (
    <Fragment>
      {props.notes.map((item, key) =>
        <div className='card-sidebar' onClick={() => props.selectNote(item._id)} key={key}>
          <p>{item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}</p>
          <p>{item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}</p>
          <p>{Moment(item.created_at).format('DD/MM')}</p>
          <button className="deletenotebtn" onClick={() => props.deleteNote(item._id)}>Delete</button>
        </div>
      )}
    </Fragment >
  )
}

export default ListNotes;
import React, { Fragment, useState } from 'react';
import Moment from 'moment';

const ListNotes = (props) => {

  return (
    <Fragment>
      {props.notes.map((item, key) =>
        <div className='card-sidebar' id={item._id} onClick={() => props.selectNote(item._id)} key={key}>
          <p>{item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}</p>
          <p>{item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}</p>
          <p>{Moment(item.created_at).format('DD/MM')}</p>
        </div>
      )}
    </Fragment >
  )
}

export default ListNotes;
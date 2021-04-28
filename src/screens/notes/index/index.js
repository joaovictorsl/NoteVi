import React, { Fragment, useState } from 'react';
import Header from '../../../components/header_logged';
import Notes from '../../../components/notes';


const IndexNotes = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      <Header setIsOpen={setIsOpen} display={true} itemToGoPage='/users/edit' itemName='Options' />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  )
}
export default IndexNotes;
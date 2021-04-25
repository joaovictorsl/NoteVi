import React, { Fragment, useState } from 'react';
import Header from '../../../components/header_logged';
import Notes from '../../../components/notes';
import UserService from '../../../services/users';


const IndexNotes = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      <Header setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  )
}
export default IndexNotes;
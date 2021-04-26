import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../styles/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import UserService from '../../services/users';

const onClick = (e) => {
  if (document.getElementById('inandupmob').classList == 'open') {
    document.getElementById('inandupmob').classList.remove('open')
    e.target.classList.remove('is-active')
  } else {
    document.getElementById('inandupmob').classList.add('open')
    e.target.classList.add('is-active')
  }
}

const Header = (props) => {

  const [redirect, setRedirect] = useState(false)

  const handleLogOut = async () => {
    await UserService.logout();
    setRedirect(true)
  }
  let user = JSON.parse(localStorage.getItem('user'))

  if (redirect) {
    return <Redirect to={{ pathname: '/' }} />
  }


  return (
    <Fragment>
      <nav>
        <section className='sectionheader'>
          <div className='iconandbrand'>
            <Link to='/notes'><span className='notevi'>NoteVi</span></Link>
            <div onClick={() => props.setIsOpen(true)}>
              <FontAwesomeIcon icon={faBars} size='2x' className='list-color' />
            </div>
          </div>
          <div>
            <span className='username'>{user.name}</span>
          </div>
          <div className='inandup'>
            <div>
              <Link to='/users/edit'>
                <span className="signin">Options</span>
              </Link>
            </div>
            <div>
              <span className="signup" onClick={handleLogOut}>Log out</span>
            </div>
          </div>
          {/* Mobile */}
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={onClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </section>
      </nav>
      <div id='inandupmob'>
        <div>
          <span className='usernamemob'>{user.name}</span>
        </div>
        <div>
          <Link to='/users/edit'>
            <span className="signinmob">Options</span>
          </Link>
        </div>
        <div>
          <span className="signup" onClick={handleLogOut}>Log out</span>
        </div>
      </div>
    </Fragment>
  )
}
export default Header;
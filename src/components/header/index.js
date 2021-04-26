import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.scss'

const onClick = (e) => {
  if (document.getElementById('inandupmob').classList == 'open') {
    document.getElementById('inandupmob').classList.remove('open')
    e.target.classList.remove('is-active')
  } else {
    document.getElementById('inandupmob').classList.add('open')
    e.target.classList.add('is-active')
  }
}

const Header = () => {
  return (
    <Fragment>
      <nav>
        <section className='sectionheader'>
          <Link to='/'><span className='notevi'>NoteVi</span></Link>
          <div className='inandup'>
            <div>
              <Link to='/login'>
                <span className="signin">Sign in</span>
              </Link>
            </div>
            <div>
              <Link to='/register'>
                <span className="signup">Sign up</span>
              </Link>
            </div>
          </div>
          <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={onClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </section>
      </nav>
      <div id='inandupmob'>
        <div>
          <Link to='/login'>
            <span className="signinmob">Sign in</span>
          </Link>
        </div>
        <div>
          <Link to='/register'>
            <span className="signupmob">Sign up</span>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}
export default Header;
import React, { useState, Fragment } from 'react';
import '../../styles/notes.scss';
import { slide as Menu } from 'react-burger-menu';

const Notes = (props) => {
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
              <li>
                <p>Notes</p>
                <select>
                  <option>OIaaaaaaa</option>
                </select>
              </li>
              <li><p>Search</p> <input></input></li>
            </ul>
            {/* <p id="home" className="menu-item" href="/">Notes</p> */}
            {/* <p id="about" className="menu-item" href="/about">About</p> */}
            {/* <p id="contact" className="menu-item" href="/contact">Contact</p> */}
          </div>
        </Menu>
      </div>
    </Fragment>
  )
}

export default Notes;
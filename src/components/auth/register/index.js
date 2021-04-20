import { Help } from 'rbx';
import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserService from '../../../services/users'



const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await UserService.register({ name: name, email: email, password: password })
      setRedirect(true)
    } catch (error) {
      setError(true)
    }
  }

  if (redirect) {
    return <Redirect to={{ pathname: "/login" }} />
  }

  return (
    <Fragment>
      <form className='formregister' onSubmit={handleSubmit}>
        <div className="field">
          <label className="label labelregister">Name</label>
          <div className="control">
            <input className="input inputregister" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label labelregister">Email</label>
          <div className="control">
            <input className="input inputregister" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label labelregister">Password</label>
          <div className="control">
            <input className="input inputregister" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <button className="button buttonregister is-large" >Create</button>
        {error && <Help color='danger'>Email or password invalid.</Help>}
      </form>
    </Fragment>
  )
}

export default Form;
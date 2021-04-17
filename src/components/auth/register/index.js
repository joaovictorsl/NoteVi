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
        <div class="field">
          <label class="label labelregister">Name</label>
          <div class="control">
            <input class="input inputregister" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div class="field">
          <label class="label labelregister">Email</label>
          <div class="control">
            <input class="input inputregister" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div class="field">
          <label class="label labelregister">Password</label>
          <div class="control">
            <input class="input inputregister" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <button class="button buttonregister is-large" >Create</button>
        {error && <Help color='danger'>Email or password invalid.</Help>}
      </form>
    </Fragment>
  )
}

export default Form;
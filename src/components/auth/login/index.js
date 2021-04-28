import { Help } from 'rbx'
import React, { useState, Fragment } from 'react'
import { Redirect } from 'react-router'
import UserService from '../../../services/users'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.login({ email: email, password: password })
      setRedirect(true)
    } catch (error) {
      setError(true)
    }

  }

  if (redirect) {
    return <Redirect to={{ pathname: '/notes' }} />
  }

  return (
    <Fragment>
      <form className='formregister' onSubmit={handleSubmit}>
        <div className="field">
          <label className="label labelregister">Email</label>
          <div className="control">
            <input className="input inputregister" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label labelregister">Password</label>
          <div className="control">
            <input className="input inputregister" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <button className="button buttonregister is-large" >Sign in</button>
        {error && <Help color='danger'>Email or password invalid.</Help>}
      </form>
    </Fragment>
  )
}

export default Form;
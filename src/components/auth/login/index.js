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
      const user = await UserService.login({ email: email, password: password })
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
        <button class="button buttonregister is-large" >Sign in</button>
        {error && <Help color='danger'>Email or password invalid.</Help>}
      </form>
    </Fragment>
  )
}

export default Form;
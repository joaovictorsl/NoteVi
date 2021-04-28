import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router';
import Header from '../../../components/header_logged';
import UserService from '../../../services/users';
import '../../../styles/edit.scss';

const Edit = () => {

  const [redirectDelete, setRedirectDelete] = useState(false)
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [displayName, setDisplayName] = useState(false)
  const [displayEmail, setDisplayEmail] = useState(false)
  const [displayPassword, setDisplayPassword] = useState(false)
  const [displayPasswordWork, setDisplayPasswordWork] = useState(false)
  let classname;
  let classpassword;
  let classemail;
  let classpasswordwork;
  if (displayName) {
    classname = ''
  } else {
    classname = 'hidetime'
  }
  if (displayPassword) {
    classpassword = ''
  } else {
    classpassword = 'hidetime'
  }
  if (displayPasswordWork) {
    classpasswordwork = 'workPassword'
  } else {
    classpasswordwork = 'hidetime'
  }
  if (displayEmail) {
    classemail = ''
  } else {
    classemail = 'hidetime'
  }

  const handleDelete = async () => {
    let result = window.confirm("Tem certeza que deseja excluir sua conta?");
    if (result) {
      let user = JSON.parse(localStorage.getItem('user'));
      await UserService.delete(user._id);
      await UserService.logout()
      setRedirectDelete(true)
    }
  }

  const handleName = async () => {
    await UserService.updateName({ name: fields.name }, 'name')
    setFields({ ...fields, name: '' })
    setDisplayName(true)
    setTimeout(() => setDisplayName(false), 3000)
  }

  const handleEmail = async () => {
    await UserService.updateEmail({ email: fields.email }, 'email')
    setFields({ ...fields, email: '' })
    setDisplayEmail(true)
    setTimeout(() => setDisplayEmail(false), 3000)
  }

  const handlePassword = async () => {
    if (fields.password == fields.confirmPassword) {
      await UserService.updatePassword({ password: fields.password }, 'password')
      setFields({ ...fields, password: '', confirmPassword: '' })
      setDisplayPasswordWork(true)
      setTimeout(() => setDisplayPasswordWork(false), 3000)
    } else {
      setFields({ ...fields, password: '', confirmPassword: '' })
      setDisplayPassword(true)
      setTimeout(() => setDisplayPassword(false), 3000)
    }
  }

  if (redirectDelete) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return (
    <Fragment>
      <Header display={false} itemToGoPage='/notes' itemName='Notes' />
      <section className='editbody'>
        {/* Info part */}
        <div className="card cardedit">
          <div className="card-content">
            <div className="content editaligncenter">
              <p className='pedit'>Edit your info</p>
              <div className='contentedit contenteditfirst'>
                <input className="input editinput" type="text" placeholder="Name" onChange={(e) => setFields({ ...fields, name: e.target.value })} name='name' value={fields.name} />
                <button className="button buttonedit" onClick={() => handleName()} >Save</button>
              </div>
              <p className={`workedInfo ${classname}`}>Name changed.</p>
              <div className='contentedit'>
                <input className="input editinput" type="email" placeholder="Email" onChange={(e) => setFields({ ...fields, email: e.target.value })} name='email' value={fields.email} />
                <button className="button buttonedit" onClick={() => handleEmail()} >Save</button>
              </div>
              <p className={`workedInfo ${classemail}`}>Email changed.</p>
            </div>
          </div>
        </div>
        {/* Password part */}
        <div className="card cardedit">
          <div className="card-content">
            <div className="content editaligncenter">
              <p className='pedit'>Edit your password</p>
              <div className='contentedit'>
                <input className="input editinput" type="password" placeholder="Password" onChange={(e) => setFields({ ...fields, confirmPassword: e.target.value })} name='email' value={fields.confirmPassword} />
              </div>
              <div className='contentedit'>
                <input className="input editinput" type="password" placeholder="Confirm your password" onChange={(e) => setFields({ ...fields, password: e.target.value })} name='password' value={fields.password} />
              </div>
              <p className={`passwordWarning ${classpassword}`}>Passwords don't match!</p>
              <p className={`passwordWork ${classpasswordwork}`}>Passwords changed.</p>
              <button className="button buttonedit" onClick={() => handlePassword()} >Save</button>
            </div>
          </div>
        </div>
        {/* Delete part */}
        <div className="card cardedit">
          <div className="card-content">
            <div className="content editaligncenter">
              <p className='pedit'>Delete your account</p>
              <button className="button buttonedit" onClick={() => handleDelete()}>Delete account</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default Edit;
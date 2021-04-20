import React, { Fragment } from 'react';
import Header from '../../../components/header';
import FormSignIn from '../../../components/auth/login'
import('../../../styles/register.scss')

const register = () => {
  return (
    <Fragment>
      <Header />
      <section className='sectionregister'>
        <div className='divregister'>
          <p className='pregister'>Sign in</p>
          <div className='divformregister'>
            <FormSignIn />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default register;
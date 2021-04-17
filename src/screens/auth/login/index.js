import React from 'react';
import Header from '../../../components/header';
import FormSignIn from '../../../components/auth/login'
import('../../../styles/register.scss')

const register = () => {
  return (
    <body className='bodyregister'>
      <Header />
      <section className='sectionregister'>
        <div className='divregister'>
          <p className='pregister'>Sign in</p>
          <div className='divformregister'>
            <FormSignIn />
          </div>
        </div>
      </section>
    </body>
  )
}
export default register;
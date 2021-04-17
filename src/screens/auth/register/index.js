import React from 'react';
import FormRegister from '../../../components/auth/register';
import Header from '../../../components/header';
import('../../../styles/register.scss')

const register = () => {
  return (
    <body className='bodyregister'>
      <Header />
      <section className='sectionregister'>
        <div className='divregister'>
          <p className='pregister'>Create your account</p>
          <div className='divformregister'>
            <FormRegister />
          </div>
        </div>
      </section>
    </body>
  )
}
export default register;
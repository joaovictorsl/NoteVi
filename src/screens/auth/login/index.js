import React from 'react';
import Header from '../../../components/header';
import('../../../styles/register.scss')

const register = () => {
  return (
    <body className='bodyregister'>
      <Header />
      <section className='sectionregister'>
        <div className='divregister'>
          <p className='pregister'>Sign in</p>
          <div className='divformregister'>
            <form className='formregister'>
              <div class="field">
                <label class="label labelregister">Email</label>
                <div class="control">
                  <input class="input inputregister" type="text" />
                </div>
              </div>
              <div class="field">
                <label class="label labelregister">Password</label>
                <div class="control">
                  <input class="input inputregister" type="password" />
                </div>
              </div>
              <button class="button buttonregister is-large">Sign in</button>
            </form>
          </div>
        </div>
      </section>
    </body>
  )
}
export default register;
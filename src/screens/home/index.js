import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Iphone from '../../assets/images/iphone.png';
import Header from '../../components/header';
import "../../styles/home.scss";

const HomeScreen = () => {
  return (
    <Fragment>
      <Header />
      <section className='section'>
        <div className='text'>
          <div className="first">
            <p>Create notes easily</p>and access them <p><span className='except'>anytime</span>, <span className='except'>anywhere</span>.</p>
          </div>
          <div className="second">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Aliquam ac leo volutpat, porta ipsum eu, finibus ipsum.</p><p>Praesent sit amet leo in massa luctus efficitur. Integer</p><p>feugiat et erat quis bibendum. Vestibulum convallis, tortor</p><p>vitae dignissim rutrum, enim ante sagittis dui, nec lacinia</p><p>lorem risus eu mi.</p>
          </div>
          <div className='imgmob'>
            <img src={Iphone} alt='Iphone' />
          </div>
          <Link to='/register' className='register'>Register</Link>
        </div>
        <div className='img'>
          <img src={Iphone} alt='Iphone' />
        </div>
      </section>
    </Fragment>
  )
}
export default HomeScreen;
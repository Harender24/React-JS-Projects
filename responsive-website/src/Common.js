import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id='header' className=''>
        <div className='containe-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                <h1>
                  {props.title} <strong> Harry</strong>
                </h1>
                <h2 className='my-3'>
                  We are a team of talented developers making websites
                </h2>
                <div className='mt-3'>
                  <NavLink to={props.visit} className='btn btn-primary'>
                    {props.btnText}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;

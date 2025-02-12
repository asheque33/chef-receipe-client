import React from 'react';
import { MDBFooter, MDBContainer,MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        // <div className='text-center bg-warning'>
        //     <p className='m-0'>copyright 2023</p>
        // </div>
    
        <MDBFooter className='bg-secondary-subtle text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#3b5998' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3 bg-info opacity bg-opacity-75' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright : All rights reserved to 
          <Link className='text-danger ps-1' to='/' >
            ChefPalace.com
          </Link>
        </div>
      </MDBFooter>
        );
};

export default Footer;
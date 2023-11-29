
import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function RegisterForm() {
  const [userData, setUserData] = useState({
    name: null,
    email: null,
    password: null,
    repeatPassword: null,
    agreeTerms: false,
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  function handleSubmit(e) {
    e.preventDefault();
    setUserData({
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      repeatPassword: e.target.elements.repeatPassword.value,
      agreeTerms: e.target.elements.agreeTerms.checked,
    });
  }

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='name' type='text' name='name'/>
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='email' type='email' name='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='password' type='password' name='password'/>
            <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='repeatPassword' type='password' name='repeatPassword'/>
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox id='agreeTerms' name='agreeTerms' label='I agree all statements in Terms of service' />
            </div>
            <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterForm;

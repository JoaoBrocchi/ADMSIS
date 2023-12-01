
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosController from "../../../helpers/AxiosController.js"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function RegisterForm() {
  const [showError, setShowError] = useState({
    type: false,
    mensagem : ""

  });
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: null,
    email: null,
    password: null,
    
  });
  

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const repeatPassword = e.target.elements.repeatPassword.value
    const agreeTerms = e.target.elements.agreeTerms.checked
    setUserData({
      name : name,
      email: email,
      password : password

    });
    if (!name || !email || !password || !repeatPassword) {
      setShowError({mensagem: "Não deixe nenhum campo vazio", type: true });
      
      
      setTimeout(() => {
        setShowError(prevState => ({ ...prevState, type: false }));
      }, 1000);

      return;
    }
    if (password != repeatPassword) {
      setShowError(prevState => ({mensagem: "as suas senhas não coicidem", type: true }));
      
      
      setTimeout(() => {
        setShowError(prevState => ({ ...prevState, type: false }));
      }, 1000);

      return;
    }
    
    navigate("/")
  };
    
  

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          {showError.type && <div className="alert alert-danger">{showError.mensagem}</div>}
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

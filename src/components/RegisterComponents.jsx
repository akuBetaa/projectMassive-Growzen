import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from "axios";

//import image
import LogoImage from "../assets/logo/logo-tb.png"
import PlayStoreImg from "../assets/playstore.svg"
// import LoginComponents from './LoginComponents';

const RegisterComponents = ({ onShowRegister, onCloseRegister, onShowLogin }) => {

	const handleShowRegister = () => onShowRegister;
	const handleCloseRegister = () => onCloseRegister;

	// Tambahkan fungsi untuk menangani pembukaan komponen login
	const handleShowLogin = () => {
		onCloseRegister(); // Tutup komponen pendaftaran
		onShowLogin(); // Buka komponen login
	}

	const [name, setName ]  = useState('');
	const [email, setEmail ]  = useState('');
	const [password, setPassword ]  = useState('');
	const [confPassword, setConfPassword ]  = useState('');

	const [msg, setMsg] = useState('');

	const Register = async (e) => {
		e.preventDefault();
	  
		try {
		  await axios.post('http://localhost:3005/users', {
			email: email,
			name: name,
			password: password,
			confPassword: confPassword
		  });
		  Swal.fire({
			title: "Register Berhasil",
			text: "Klik button untuk login!",
			icon: "success"
		  });
		  handleShowLogin();
		} catch (error) {
		  if (error.response) {
			setMsg(error.response.data.msg);
		  }
		}
	  };
	  

	return (
		<>
			<Modal.Header closeButton>
			</Modal.Header>

			<Modal.Body className='mb-5'>
				<div className='logoImg mt-2 mb-4'>
					<img
						src={LogoImage}
						alt='logo=image'
					/>
				</div>

				<div className='mb-3'>
					<p className='my-1'>Welocome back 👋</p>
					<h3>Signup to your account</h3>
				</div>

				<div className='eror text-center'>
					<p>{msg}</p>
				</div>

				<>
					<Form className='wrapper' onSubmit = { Register }>
						<Form.Group
							className='mb-3 was-validated'
							controlId='email'
						>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='name@example.com'
								value = { email } 
								onChange = { (e) => setEmail(e.target.value)}
								autoFocus
								required
							/>
						</Form.Group>
						<Form.Group
							className='mb-3 was-validated'
							controlId='firsname'
						>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='name'
								value = {name} 
								onChange = { (e) => setName(e.target.value)}
								autoFocus
								required
							/>
						</Form.Group>
						<Form.Group
							className='mb-3 was-validated'
							controlId='lastname'
						>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='**********'
								value = { password } 
								onChange = { (e) => setPassword(e.target.value)}
								autoFocus
								required
							/>
						</Form.Group>
						<Form.Group
							className='mb-3 was-validated'
							controlId='exampleForm.ControlTextarea1'
						>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='********'
								value = {confPassword} 
								onChange = { (e) => setConfPassword(e.target.value)}
								autoFocus
								required
							/>
						</Form.Group>

						<Button
							variant='primary'
							type='submit'
							className='my-2'
						>
							Sign Up
						</Button>
					</Form>
				</>

				<div className='text-center mt-3'>
					<p>
						I have an account?

						<Button 
							className='inibutton'
							variant='primary' 
							onClick={handleShowLogin} >
							Login
						</Button>
					</p>

					<p>Or</p>
				</div>

				<div className='unduh'>
					<p>
						Dapatkan Aplikasi <br />
						di Play Store
					</p>
					<img
						src={PlayStoreImg}
						alt=''
					/>
				</div>
			</Modal.Body>

		</>
	);
};

export default RegisterComponents
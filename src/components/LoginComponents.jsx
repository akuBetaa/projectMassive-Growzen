import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//import image
import LogoImag from "../assets/logo/logo-tb.png"
import PlayStoreImg from "../assets/playstore.svg"
import RegisterComponents from './RegisterComponents';
import Swal from 'sweetalert2';

function LoginComponents() {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	const handleCloseLogin = () => setShowLogin(false);
	const handleShowLogin = () => setShowLogin(true);

	const handleShowRegister = () => {
		setShowLogin(false);
		setShowRegister(true);
	};

	const handleCloseRegister = () => {
		setShowRegister(false);
	};

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const [msg, setMsg] = useState(' ');
	const navigate = useNavigate();

	const Auth = async (e) => {
		e.preventDefault();

		try {
			const data = await axios.post('http://localhost:3005/login', {
				email: email,
				password: password
			});
			console.log(data);
			localStorage.setItem("token", data.data.accessToken)

			Swal.fire({
				title: "Login Berhasi;!",
				text: "You clicked the button!",
				icon: "success"
			  });
			navigate("/profil");
			handleCloseLogin()
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg)
			}
		}
	}

	return (
		<>
			<Button
				variant='primary'
				onClick={handleShowLogin}
			>
				Login
			</Button>

			<Modal
				show={showLogin}
				onHide={handleCloseLogin}
			>
				<Modal.Header closeButton>

				</Modal.Header>

				<Modal.Body className='mb-5'>
					<div className='logoImg mt-2 mb-4'>
						<img
							src={LogoImag}
							alt='logo=image'
						/>
					</div>

					<div className='mb-3'>
						<p className='my-1'>Welocome back 👋</p>
						<h3>Login to your account</h3>
					</div>

					<div className='eror text-center'>
						<p>{msg}</p>
					</div>


					<>
						<Form className='wrapper' >
							<Form.Group
								className='mb-3 was-validated'
								controlId='exampleForm.ControlInput1'
							>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type='email'
									placeholder='name@example.com'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									autoFocus
									required
								/>
							</Form.Group>
							<Form.Group
								className='mb-3 was-validated'
								controlId='exampleForm.ControlTextarea1'
							>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									placeholder='***********'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									autoFocus
									required
								/>
							</Form.Group>

							<Button
								variant='primary'
								type='submit'
								className='my-2'
								onClick={Auth}
							>
								Login
							</Button>
						</Form>
					</>

					<div className='text-center mt-3'>
						<p>
							Don't have an account?
							<Button
								className='inibutton'
								variant='primary'
								onClick={handleShowRegister}
							>
								Sign Up
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

			</Modal>
			{showRegister && (
				<Modal
					show={showRegister}
					onHide={handleCloseRegister}
				>
					<RegisterComponents
						onShowRegister={handleShowRegister}
						onCloseRegister={handleCloseRegister}
						onShowLogin={handleShowLogin} // Menyampaikan fungsi onShowLogin
					/>
				</Modal>
			)}
			{/* {
				token ? <Button
					variant='primary'
					onClick={handleShowLogin}
				>
					LogOut
				</Button> : ""
			} */}
		</>
	);
}

export default LoginComponents;
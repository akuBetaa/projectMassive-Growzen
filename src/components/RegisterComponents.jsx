import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

//import image
import LogoImage from "/public/logo2.png"
import PlayStoreImg from "../assets/playstore.svg"

const RegisterComponents = ({ onShowRegister, onCloseRegister }) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Sign Up
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//         </Modal.Header>


//         <Modal.Body className='mb-5'>
//           <div className='logoImg mt-2 mb-4'>
//             <img src={LogoImage} alt="logo=image" />
//           </div>

//           <div className='mb-3'>
//             <p className='my-1'>Welocome back 👋</p>
//             <h3>Signup to your account</h3>
//           </div>

//           <>
//             <Form className='wrapper'>
//               <Form.Group className="mb-3 was-validated" controlId="email">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="name@example.com"
//                   autoFocus required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3 was-validated" controlId="firsname">
//                 <Form.Label>Firs Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="your firstname"
//                   autoFocus required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3 was-validated" controlId="lastname">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="your lastname"
//                   autoFocus required
//                 />
//               </Form.Group>
//               <Form.Group
//                 className="mb-3 was-validated"
//                 controlId="exampleForm.ControlTextarea1"
//               >
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type='password' placeholder='password' autoFocus required />
//               </Form.Group>

//               <Button variant="primary" type="submit" className='my-2'>
//                 Sign Up
//               </Button>
//             </Form>
//           </>

//           <div className='text-center mt-3'>
//             <p>
//               Don't  have an account?
//             </p>

//             <p>Or</p>
//           </div>

//           <div className='unduh'>
//             <p>
//               Dapatkan Aplikasi <br />di Play Store
//             </p>
//             <img src={PlayStoreImg} alt="" />
//           </div>

//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

const handleShowRegister = () => onShowRegister;
	const handleCloseRegister = () => onCloseRegister;

	return (
		<>
			<Modal.Header closeButton>
				{/* <Modal.Title>
              <img src={LogoImage} alt="" />
            </Modal.Title> */}
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

				<>
					<Form className='wrapper'>
						<Form.Group
							className='mb-3 was-validated'
							controlId='email'
						>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='name@example.com'
								autoFocus
								required
							/>
						</Form.Group>
						<Form.Group
							className='mb-3 was-validated'
							controlId='firsname'
						>
							<Form.Label>Firs Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='your firstname'
								autoFocus
								required
							/>
						</Form.Group>
						<Form.Group
							className='mb-3 was-validated'
							controlId='lastname'
						>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='your lastname'
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
								placeholder='password'
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
						Don't have an account?
						{/* <Link to="signup" className='signup ms-2'>Sign up</Link>
                <a href="../components/SignupComponents.jsx">sdasdas</a> */}
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
			{/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
		</>
	);
};

export default RegisterComponents
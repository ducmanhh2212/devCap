import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';


function ComponentLogin(props) {
    // khai bao state Email, Password
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");

    // khai bao hook useNavigate
    let navigate = useNavigate();

    let handleLogin = () => {

        // lay du lieu dang ki tu localStorage: kiem tra da dang ki tai chua
        let user_LocalStorage = JSON.parse(localStorage.getItem("user_LocalStorage"));

        // check
        if (!user_LocalStorage) {
            navigate("/register")
        } else {
            if (user_LocalStorage.email === Email && user_LocalStorage.password === Password) {
                alert("Successful !")
                let user_login = {
                    email: Email,
                    password: Password,
                }

                // neu dang nhap thanh cong thi luu thong tin user_login xuong local strogae
                const user = localStorage.setItem("user_login", JSON.stringify(user_login));
                navigate("/")
            } else {
                alert("Please check the information again !")
            }
        }
    }

    let handleRegister = () => {
        navigate("/register")
    }

    return (
        <Container>
            <Row>
                <Col sm={12} style={{ textAlign: 'center', marginTop: '50px', color: 'orange' }}><h1>Trang đăng nhập Tài khoản</h1></Col>
            </Row>

            <Row style={{ marginTop: '50px' }}>

                <Col sm={6}>
                    <img src="https://img.lovepik.com/element/45012/1913.png_860.png"
                        alt="no_image"
                        style={{ height: "500px", width: "500px" }} />
                </Col>

                <Col sm={6} style={{ textAlign: 'left', height: "40px" }}>

                    <Form>
                        <FormGroup>
                            <Label for="Email" style={{ color: 'red' }}>Nhập email: </Label>
                            <Input
                                id="Email"
                                name="Email"
                                placeholder="Nhập email"
                                type="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup>
                            <Label for="Password" style={{ color: 'red' }}>Nhập password: </Label>
                            <Input
                                id="Password"
                                name="Password"
                                placeholder="Nhập Password"
                                type="password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                    </Form>

                    <Button color="primary" onClick={handleLogin} >SignIn</Button>
                    <Button color="warning" onClick={handleRegister} >SignUp</Button>
                </Col>
            </Row>

        </Container>
    );
}

  export default ComponentLogin ;


// const ComponentLogin = (props) => {

//     const showWrongLoginNotification = (title, message) => {
//         const options = {
//           timeOut: 2500,
//           showCloseButton: false,
//           progressBar: false, 
//           position: "top-right"
//         };
    
//         // show notification
//         toastr.error(title, message, options);
//       }
    
//       const [isOpenModal, setOpenModal] = useState(false);
    
//       const [email, setEmail] = useState("");
//       const [isDisabledResendEmailButton, setDisabledResendEmailButton] = useState(false);
    
//       const resendEmailToActiveAccount = async () => {
//         setDisabledResendEmailButton(true);
//         // call api
//         await UserApi.resendEmailToActiveAccount(email);
//         setDisabledResendEmailButton(false);
//       }
    
//       const [isRememberMe, setRememberMe] = useState(props.isRememberMe);

//     return ( 
//         <React.Fragment>
// <div className="text-center mt-4">
//         <h2>Welcome to my Shop</h2>
//         <p className="lead">Sign in to your account to continue</p>
//       </div>

//       <Formik
//         initialValues={
//           {
//             username: '',
//             password: '',
//             errorForm: ''
//           }
//         }
//         validationSchema={
//           Yup.object({
//             username: Yup.string()
//               .required('Required')
//               .max(50, 'Must be between 6 to 50 characters')
//               .min(6, 'Must be between 6 to 50 characters'),

//             password: Yup.string()
//               .max(50, 'Must be between 6 to 50 characters')
//               .min(6, 'Must be between 6 to 50 characters')
//               .required('Required')
//           })
//         }
//         onSubmit={
//           async (values, { setFieldError }) => {
//             try {
//               // call api
//               const result = await LoginApi.login(values.username, values.password);

//               // login successfully!
//               // account not active
//                 // account actived
//                 // save remember me to storage
//                 Storage.setRememberMe(isRememberMe);
//                 // save token to storage
//                 Storage.setToken(result.token);
//                 // save user info to storage
//                 const user = {
//                   "fullname": result.fullname,
//                   "username": result.userName,
//                   "email": result.email,
//                   "role": result.role,
//                   "status": result.status
//                 };
//                 Storage.setUserInfo(user);

//                 // save remember me to redux
//                 props.setRememberMeInfo(isRememberMe)
//                 // save token to redux
//                 props.setTokenInfo(result.token);
//                 // save user info to redux
//                 props.setUserLoginInfo(user);

//                 // redirect home page
//                 props.history.push("/");
              
//             } catch (error) {
//               if (error.status === 401) {
//                 showWrongLoginNotification("Login Failed", "Wrong username or password!");
//               } else {
//                 setFieldError('errorForm', 'There is an error from the server');
//                 console.log(error);
//               }
//             }
//           }
//         }
//       >
//         {({ isSubmitting }) => (
//           <Card>
//             <CardBody>
//               <div className="m-sm-4">
                
               
//                 <Form>

//                   {/* username */}
//                   <FormGroup>
//                     <FastField
//                       label="Username"
//                       bsSize="lg"
//                       type="text"
//                       name="username"
//                       placeholder="Enter your username"
//                       component={ReactstrapInput}
//                     />
//                   </FormGroup>

//                   {/* password */}
//                   <FormGroup>
//                     <FastField
//                       label="Password"
//                       bsSize="lg"
//                       type="password"
//                       name="password"
//                       placeholder="Enter password"
//                       component={ReactstrapInput}
//                     />
//                     {/* forgot password */}
//                     <small>
//                       <Link to="#">Forgot password?</Link>
//                     </small>
//                   </FormGroup>

//                   <ErrorMessage name="errorForm" component={"div"} className="invalid-feedback" style={{ display: "block" }} />

//                   {/* remember me */}
//                   <div>
//                    <input type="checkbox"
//                       id="rememberMe"
//                       label="Remember me next time"
//                       checked={isRememberMe}
//                       onChange={e => setRememberMe(e.target.checked)}/>
//                   </div>

//                   {/* submit */}
//                   <div className="text-center mt-3">
//                     <Button type="submit" color="primary" size="lg" disabled={isSubmitting}>
//                       Sign in
//                   </Button>
//                   </div>
//                 </Form>
//               </div>
//             </CardBody>
//           </Card>
//         )}
//       </Formik>

//       <Modal
//         isOpen={isOpenModal}
//       >
//         {/* header */}
//         <ModalHeader>
//           You need to confirm your account
//         </ModalHeader>

//         {/* body */}
//         <ModalBody className="m-3">
//           <p>
//             Your account is not active.
//           </p>
//           <p>
//             Please check your email (<b>{email}</b>) to active account.
//           </p>
//         </ModalBody>

//         {/* footer */}
//         <ModalFooter>
//           {/* resend */}
//           <Button
//             color="primary"
//             onClick={resendEmailToActiveAccount}
//             style={{ marginLeft: 10 }}
//             disabled={isDisabledResendEmailButton}
//           >
//             Resend
//           </Button>

//           {/* close button */}
//           <Button
//             color="primary"
//             onClick={() => setOpenModal(false)}
//           >
//             Close
//           </Button>
//         </ModalFooter>
//       </Modal>
//         </React.Fragment>
//     )
// };
// const mapGlobalStateToProps = state => {
//     return {
//       isRememberMe: selectRememberMe(state)
//     };
//   };

  // export default connect(mapGlobalStateToProps, { setTokenInfo, setUserLoginInfo, setRememberMeInfo })(ComponentLogin);
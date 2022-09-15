// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

// import updateProfileAction from "../../store/shopping-cart/userSlice";
// import { reset } from "nodemon";
// function UpdateProfile({ user }) {
//   const dispatch = useDispatch();

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const wrapper = () => {
//     handleClose();
//   };
//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       username: user.username,
//     },
//   });

//   // const upProfile = (e, data) => {
//   //   e.preventDefault();
//   //   dispatch(updateProfileAction({ id: user._id, ...data }));
//   //   handleClose();
//   //   reset();
//   // };

//   return (
//     <>
//       <Button variant="outline-primary" onClick={handleShow}>
//         Update Profile
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Form onSubmit={handleSubmit()}>
//           <Modal.Header closeButton>
//             <Modal.Title>Add Username</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <InputGroup className="mb-3">
//               <FormControl
//                 placeholder="Entre username"
//                 aria-label="Movietitle"
//                 aria-describedby="basic-addon1"
//                 {...register("username")}
//                 type="text"
//               />
//             </InputGroup>

//             <InputGroup className="mb-3">
//               <FormControl
//                 as="textarea"
//                 aria-label="Pgone"
//                 placeholder="Phone"
//                 {...register("Phone")}
//                 type="text"
//               />
//             </InputGroup>

//             <InputGroup className="mb-3">
//               <FormControl
//                 placeholder=" URL Photo de profile"
//                 aria-label="image"
//                 aria-describedby="basic-addon1"
//                 {...register("image")}
//                 type="text"
//               />
//             </InputGroup>

//             <InputGroup className="mb-3">
//               <FormControl
//                 placeholder="Age"
//                 aria-label="Movierating"
//                 aria-describedby="basic-addon1"
//                 {...register("Age")}
//                 type="text"
//               />
//             </InputGroup>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="success">Save</Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// }

// export default UpdateProfile;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import "../../styles/editProduct.css";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { updateProfileAction } from "../../store/shopping-cart/userSlice";

function EditProfile({ Profile }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: Profile.username,
      age: Profile.age,
      phone: Profile.phone,
      image: Profile.image,
    },
  });

  const submitFunction = (data) => {
    dispatch(updateProfileAction({ _id: Profile._id, ...data }));
    handleClose();
    console.log(Profile._id);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Edit Profile
      </Button>
      <Modal show={show} onHide={handleClose}>
        <form
          action="#"
          className="login active formPrdouct "
          onSubmit={handleSubmit(submitFunction)}
        >
          <h2 className="title"> Edit Profile</h2>

          {/* Username */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="text"
                placeholder="Entre username "
                {...register("username")}
              />
            </div>
          </div>
          {/* age */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="text"
                placeholder="Entre your age"
                {...register("age")}
              />
            </div>
          </div>

          {/* phone */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="text"
                placeholder="Entre Phone "
                {...register("phone")}
              />
            </div>
          </div>
          {/* image */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="text"
                placeholder="Entre url Photo "
                {...register("image")}
              />
            </div>
          </div>

          {/* button Login */}
          <button type="submit" className="btn-submit">
            Edit Profile
          </button>
          <button onClick={() => handleClose} className="btn-submit">
            Close
          </button>
        </form>
      </Modal>
    </>
  );
}

export default EditProfile;

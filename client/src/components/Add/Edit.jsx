import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  addProduct,
  updateProduct,
  updateProductImage,
} from "../../store/shopping-cart/productSlice";
import Modal from "react-bootstrap/Modal";
import "../../styles/editProduct.css";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Edit({ item }) {
  const { _id, id } = item;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: item.title,
      title: item.title,
      price: item.price,
      desc: item.desc,
      category: item.category,
    },
  });

  const submitFunction = (data) => {
    dispatch(updateProduct({ _id: item._id, ...data }));
    handleClose();
    console.log(item._id);
    console.log(id);
  };
  const [fileUp, setFileUp] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form
          action="#"
          className="login active formPrdouct "
          onSubmit={handleSubmit(submitFunction)}
        >
          <h2 className="title">Edit Product</h2>

          {/* id */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="number"
                placeholder="Entre id "
                {...register("id")}
              />
            </div>
          </div>
          {/* Tilte */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="text"
                placeholder="Entre your title"
                {...register("title")}
              />
            </div>
          </div>

          {/* Price */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="number"
                placeholder="Entre Price "
                {...register("price")}
              />
            </div>
          </div>
          {/* Decs */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="text"
                placeholder="Entre Description "
                {...register("desc")}
              />
            </div>
          </div>
          {/* category */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="text"
                placeholder="Entre category "
                {...register("category")}
              />
            </div>
          </div>

          {/* image */}
          <div className="formProductsDash">
            <div className="input-inputEditdash roup">
              <input
                className="inputEdit"
                type="file"
                accept=".png,.jpeg,.jpg,.webp"
                placeholder="Entre URL image"
                onChange={(e) =>
                  dispatch(
                    updateProductImage({
                      id: item._id,
                      file: e.target.files[0],
                    })
                  )
                }
                // onChange={(e) => setFileUp(e.target.files[0])}
              />
            </div>
          </div>

          {/* button Edit */}
          <button type="submit" className="btn-submit">
            Edit
          </button>

          {/* button Close */}
          <button onClick={() => handleClose} className="btn-submit">
            Close
          </button>
          <Link className="btnView" to="/foods">
            Chek
          </Link>
        </form>
      </Modal>
    </>
  );
}

export default Edit;

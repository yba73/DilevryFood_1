import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../store/shopping-cart/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/register.css";
import CommonSection from "../components/UI/common-section/CommonSection";

const Register = () => {
  const nav = useNavigate();
  const [fileUp, setFileUp] = useState({});
  // Function React hook form */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const { errors: userErrors, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth) nav("/profile");
  }, [isAuth]);

  // Function Submit data */

  const submitRegister = (RegisterData) => {
    dispatch(registerUser({ ...RegisterData, file: fileUp }));
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Sinup (tou have to register first)" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div>
                <div>
                  <div className="containerlogin">
                    <form
                      action="#"
                      className="login active formRegister "
                      onSubmit={handleSubmit(submitRegister)}
                    >
                      <h2 className="">Register</h2>

                      {/* Username */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="Entre your Username"
                            {...register("username")}
                          />
                        </div>
                      </div>
                      {/* Email */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="email"
                            placeholder="Entre your email"
                            {...register("email", {
                              required: true,
                              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            })}
                          />
                          {errors.email && <p>Invalid Email </p>}
                          {userErrors && (
                            <p className="ErrorsMsg">{userErrors}</p>
                          )}
                        </div>
                      </div>

                      {/* password */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="password"
                            pattern=".{8,}"
                            id="password"
                            placeholder="Your password"
                            {...register("password")}
                          />
                        </div>
                        <span className="help-text">At least 8 characters</span>
                      </div>
                      {/* Age */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="Entre your Age"
                            {...register("Age")}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="Entre your Phone"
                            {...register("phone")}
                          />
                        </div>
                      </div>

                      {/* image */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="Entre your url photo"
                            // onChange={(e) => setFileUp(e.target.files[0])}
                            {...register("image")}
                          />
                        </div>
                      </div>

                      {/* image */}
                      {/* <div className="formProductsDash">
                      <div className="input-groupProductsdash roup">
                        <input
                          className="inputdash"
                          type="file"
                          accept=".png,.jpeg,.jpg"
                          placeholder="Entre URL image"
                          onChange={(e) => setFileUp(e.target.files[0])}
                        />
                      </div>
                    </div> */}

                      {/* button Login */}
                      <button type="submit" className="btn-submit">
                        Register
                      </button>

                      <Link className="navLink" to="/login">
                        Already have an account? Login
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;

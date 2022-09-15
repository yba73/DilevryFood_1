import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/shopping-cart/userSlice";
import "../styles/login.css";
const Login = () => {
  const nav = useNavigate();
  const { errors: userErrors, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth) nav("/profile");
  }, [isAuth]);
  const dispatch = useDispatch();

  // Function Submit data */

  const submitRegister = (LoginData) => {
    dispatch(loginUser(LoginData));
  };

  // Function React hook form */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />

      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <div>
              <div>
                <div className="containerlogin">
                  <form
                    action="#"
                    className="login active formlogin"
                    onSubmit={handleSubmit(submitRegister)}
                  >
                    <h2 className="">Login</h2>

                    {/* Email */}
                    <div className="form-groupLogin">
                      <label>Email</label>
                      <div className="input-group">
                        <input
                          className="inputLogin"
                          type="email"
                          placeholder="Entre your Email"
                          {...register("email", {
                            required: true,
                            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          })}
                        />
                        {errors.email && <p>Invalid Email </p>}
                        {userErrors?.includes("register") && (
                          <p className="LoginErrors">{userErrors}</p>
                        )}
                      </div>
                    </div>

                    {/* Password */}
                    <div className="form-groupLogin">
                      <label>Password</label>
                      <div className="input-group">
                        <input
                          className="inputLogin"
                          type="password"
                          pattern=".{8,}"
                          id="password"
                          placeholder="Your password"
                          {...register("password")}
                        />
                        {userErrors?.includes("password") && (
                          <p className="LoginErrors">{userErrors}</p>
                        )}
                      </div>
                      <span className="help-text">At least 8 characters</span>
                    </div>
                    <button type="submit" className="btn-submit">
                      Login
                    </button>

                    {/* button Login */}
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Login;

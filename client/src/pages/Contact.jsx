import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/contact.css";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />

      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <div>
              <div>
                <div className="containerlogin">
                  <form action="#" className="login active formContact ">
                    <h2 className="titleContact">send Message</h2>
                    {/* Email */}
                    <div className="form-group">
                      <label>Email</label>
                      <div className="input-group">
                        <input
                          type="email"
                          placeholder="Email"
                          {...register("email", {
                            required: true,
                            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          })}
                        />
                      </div>
                    </div>
                    {/* Subject */}
                    <div className="form-group">
                      <label>Subjet</label>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Subjet..."
                          {...register("subjet")}
                        />
                      </div>
                    </div>
                    {/* Message */}
                    <div className="form-group">
                      <label>Message</label>
                      <div className="input-group">
                        <div className="message-box">
                          <textarea
                            id="msg"
                            cols="30"
                            rows="10"
                            {...register("message")}
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn-submit-contact">
                      Send
                    </button>
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

export default Contact;

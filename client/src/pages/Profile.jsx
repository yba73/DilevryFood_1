import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/profile.css";

import { getUserInfo } from "../store/shopping-cart/userSlice";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "../components/Profile/EditProfile";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [imgSrc, setImgSrc] = useState();
  const defaultImage = userInfo.image;
  const dispatsh = useDispatch();
  useEffect(() => {
    dispatsh(getUserInfo());
  }, []);
  return (
    <Helmet title="Profile">
      <CommonSection title="Profile" />

      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <div className="dinbodyProfile ">
              <div className="containerprofile">
                <div className="wrapperProfile">
                  <div className="left">
                    {defaultImage ? (
                      <>
                        <img src={userInfo.image} alt="user" width="100" />
                      </>
                    ) : (
                      <>
                        <img
                          src="https://res.cloudinary.com/yba73/image/upload/v1663121237/users/m6em0nt8oarygmyguhxe.png"
                          alt="user"
                          width="100"
                        />
                      </>
                    )}

                    <h4>{userInfo.username}</h4>
                  </div>
                  <div className="right">
                    <div className="info">
                      <h3>your Information</h3>
                      <div className="info_data">
                        <div className="data">
                          <h4>Email</h4>
                          <p>{userInfo.email}</p>
                        </div>
                        <div className="data">
                          <h4>Phone</h4>
                          <p>{userInfo.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="projects">
                      <div className="projects_data">
                        <div className="data">
                          <h4>Age</h4>
                          <p>{userInfo.Age} </p>
                        </div>
                        <div className="data">
                          <h4>Most Viewed</h4>
                          <p>dolor sit amet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <EditProfile Profile={userInfo} />
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Profile;

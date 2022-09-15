import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import "../../styles/dashboard.css";
import Customers from "./Customers";
import Helmet from "../../components/Helmet/Helmet";
import NavDash from "../../pages/adminDashboard/NavDash";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { getAllUserInfo } from "../../store/shopping-cart/userSlice";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserInfo());
  }, []);
  const { AllUserInfo } = useSelector((state) => state.user);

  return (
    <div>
      <NavDash />
      <Row>
        <Col lg="6" md="6" sm="12" className="m-auto text-center">
          <div className=" ">
            <div className="">
              <div className="">
                <div className="">
                  <div className="titleDash">
                    <h2>Customers</h2>
                  </div>

                  <table>
                    <tbody>
                      <tr>
                        <th>Photo</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                      </tr>
                      {AllUserInfo.map((el, index) => (
                        <Customers items={el} key={index} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

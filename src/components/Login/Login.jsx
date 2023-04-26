import React from "react";
import "./style.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import img1 from "../Login/images/img1.png";
import img2 from "../Login/images/img2.jpg"
const Login = () => {
  const styles = {
    height: "527px",
  };
  return (
    <>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={img2}
                alt="login form"
                className="rounded-start w-100"
                style={styles}
              />
            </MDBCol>

            <MDBCol md="4" className="mx-auto">
              <div className="container">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2">
                    <img src={img1} alt="" style={{height:80,width:80}}/>
                    <span className="h3 fw-bold mb-3 mt-4 ml-5">Zetta Circles</span>
                  </div>

                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />
                  {/* =====login / sign up button======= */}
                  <MDBRow className="my-4">
                    <MDBCol>
                      <MDBBtn className="px-5" color="dark" size="lg">
                        Login
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol className="d-flex justify-content-end">
                      <MDBBtn className="px-5" color="dark" size="lg" outline={true}>
                        SignUp 
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>

                  {/* =====end login / sign up button======= */}

                  {/* 2 column grid layout for inline styling */}
                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="form1Example3"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <a href="#!" className="text-dark">Forgot password?</a>
                    </div>
                  </div>
                </MDBCardBody>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Login;

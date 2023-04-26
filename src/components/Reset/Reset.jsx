import React from 'react';
import DasNav from '../Dashboard/DashNav';
import LOGO from '../Images/zetLogo.jpeg';
import ResetScreen from './ResetScreen'
const Reset = () => {
  return (
   <>
   <div className="card mb-3" style={{ boxShadow: "none", }} >
        <div className="row g-0">
          <div className="col-md-3" style={{ width: "280px", height: "550px", }}>
            <center>
              <div className='set' style={{ display: "flex", flexDirection: "row" }}>
                <img src={LOGO} alt="" style={{ width: 80, height: 70 }} />
                <h5
                  style={{ marginTop: 40 }}
                >
                  Zetta Circles
                </h5>
              </div>
            </center>
            <br />
            <DasNav />
          </div>
          <div className="col-md-9">

            <div className="row g-2">

              <div className='container-fuild my-4' style={{ width: "auto", height: "500px" }}>
              <ResetScreen/>

              </div>




            </div>


          </div>
        </div>
      </div>



   
   </>
  )
}

export default Reset

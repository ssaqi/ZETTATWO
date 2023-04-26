import React from 'react';
import './Dash.css';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import DashItme from './DashItme';
import DashTopNav from './DashTopNav';

export default function DashScreen() {
  return (
    <>
    <div className="container my-1 m-5  ">
        <div className="row">
            {/* <h1
                className="display-2 fw-bold text-dark text-loweruppercase"
                style={{ fontSize: 25 }}
            >
                Features Pakages
                <br />
                <span style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}>Enter the information to access all features</span>
            </h1> */}

           
         
            <DashTopNav/>
            <DashItme/>

        </div>
    </div>

</>
  )
}

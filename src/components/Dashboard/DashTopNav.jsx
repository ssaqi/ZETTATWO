import React from 'react';
import './Dash.css';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import emj from '../Images/1.jpg'
export default function DashTopNav() {
  return (
     
    <>
    <nav className="navbar navbar-expand-lg bg-light" id='topNav'> 
  <div className="container-fluid">
  <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          id="any"
          placeholder="Search documents, files or help"
          aria-label="Search"
         
        />
       
      </form>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <SettingsRoundedIcon style={{color: "lightgray", height: 20}}/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <QuestionAnswerRoundedIcon style={{color: "lightgray", height: 20}}/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <NotificationsIcon style={{color: "lightgray", height: 20}}/>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           STEPHINE
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link ">
          <Avatar alt="Remy Sharp" src={emj} style={{color: "lightgray", height: 26, width: 26}} />
            </a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

    
    </>
  )
}

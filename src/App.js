import logo from "./logo.svg";
import "./App.css";
// import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from './components/Profile/Profile';
import User from './components/User/User';
import Marketing from './components/Merket/Marketing';
import Queris from './components/Query/Queris';
import Documents from './components/Documents/Document';
import Customize from './components/Customize/Customized';
import Help from './components/Help/HelpCenter';
import Setting from './components/Setting/Setting';
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <Login /> */}
      <Routes>
      <Route path="/" element={<Dashboard/>}/>  
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/User" element={<User/>} />
      <Route path="/Marketing" element={<Marketing/>} />
      <Route path="/Qurey" element={<Queris/>} />
      <Route path="/Document" element={<Documents/>} />
      <Route path="/Customize" element={<Customize/>} />
      <Route path="/Helped" element={<Help/>} />
      <Route path="/Setting" element={<Setting/>} />
      </Routes>
    </>
  );
}

export default App;

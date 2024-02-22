import React from 'react';
import "./Header.css";
import { first1 } from '../../assets';

const Header = () =>{
    return (
        <div className='homepage'>
          <h1 className="heading-text">ONE WINDOW,ONE STEP, TOTAL HEALTH SOLUTION </h1>
          <p className="sub-text">WE PROVIDE HEALTH CARE MANAGEMENT SYSTEM. FOR HEALTH PROFESSIONAL LIKE DOCTORS, PHARMACY STORE AND LABORATORIES ALSO WE PROVIDE APPLICATION FOR PATIENTS</p>
           <button className="transparent-button">TRY US NOW</button>
           <div className="center-line"></div>
        </div>
      );
    
};
export default Header;

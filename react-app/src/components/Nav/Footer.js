import React from 'react';
import './nav.css';

function Footer() {
    return (
      <div className="footer-div">
        <p className="footer-links">
            Created by:&ensp;
            <a className="footer-link" href={"https://github.com/FremaAwuku"} target={"_blank"} rel={"noreferrer"}>Frema Awuku</a>
            &ensp;|&ensp;
            <a className="footer-link" href={"https://github.com/JackyxCS"} target={"_blank"} rel={"noreferrer"}>Jacky Hao</a>
            &ensp;|&ensp;
            <a className="footer-link" href={"https://amandahinton.com/"} target={"_blank"} rel={"noreferrer"}>Amanda Hinton</a>
        </p>
        <p className="footer-copyright">Copyright ©2021 All Rights Reserved.</p>
      </div>
    );
  };

  export default Footer;

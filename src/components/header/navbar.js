import React, { useEffect, useState } from 'react';
import './navbar.css';


function project_button(){
  setTimeout(() => {
    window.location.href = "projects"
  }, 500);
}
function resume_button(){
  setTimeout(() => {
    window.location.href = "resume"
  }, 500);
}
function contact_button(){
  setTimeout(() => {
    window.location.href = "contact"
  }, 500);
}

const Navbar = ({class1,class2,class3}) => {

  return (
    <nav className={'navbar '}>
      <button className={'projects'+class1} onClick={project_button}>
        Projects
      </button>
      <button className={'resume'+class2} onClick={resume_button}>
        Resume
      </button>
      <button className={'contact'+class3}onClick={contact_button}>
        Contacts
      </button>
    </nav>
  );
};

export default Navbar;

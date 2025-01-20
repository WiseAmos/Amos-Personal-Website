import React, { useEffect, useState } from 'react';
import './navbar.css';


function project_button(){
  if (sessionStorage.getItem("went-through-animation")==="true"){
  setTimeout(() => {
    window.location.href = "projects"
  }, 400);
}
}
function resume_button(){
  if (sessionStorage.getItem("went-through-animation")==="true"){
  setTimeout(() => {
    window.location.href = "resume"
  }, 400);
}
}
function contact_button(){
  if (sessionStorage.getItem("went-through-animation")==="true"){
  setTimeout(() => {
    window.location.href = "contact"
  }, 400);
}
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

import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from '../../components/header/navbar.js'

function donuts(){
  const pre = document.createElement("pre");
  var profile = document.getElementsByClassName('profile-wrapper')[0];
  profile.appendChild(pre);

    let x = 1760, z = 0, y = 0;
    setInterval(() => {
      z += 0.07;
      y += 0.03;

      const a = [...new Array(x)].map((_, r) => (r % 80 === 79 ? "\n" : " "));
      const r = new Array(x).fill(0);
      const t = Math.cos(z), e = Math.sin(z), n = Math.cos(y), o = Math.sin(y);

      for (let s = 0; s < 6.28; s += 0.07) {
        const c = Math.cos(s), h = Math.sin(s);

        for (let s = 0; s < 6.28; s += 0.02) {
          const v = Math.sin(s),
            M = Math.cos(s),
            i = c + 2,
            l = 1 / (v * i * e + h * t + 5),
            p = v * i * t - h * e,
            d = Math.floor(40 + 30 * l * (M * i * n - p * o)),
            m = Math.floor(12 + 15 * l * (M * i * o + p * n)),
            f = Math.floor(8 * ((h * e - v * c * t) * n - v * c * e - h * t - M * c * o)),
            y = d + 80 * m;

          if (m < 22 && m >= 0 && d >= 0 && d < 79 && l > r[y]) {
            r[y] = l;
            a[y] = ".,-~:;=!*#$@"[f > 0 ? f : 0];
          }
        }
      }
      pre.innerHTML = a.join("");
    }, 50);
}

function wonder(setClass1,setClass2,setClass3,setLargerwrapperclass,setTitleclass,setProfileclass){
  sessionStorage.setItem("went-through-animation", "true");
  donuts();
  var wonder_button = document.getElementsByClassName("wonders")[0];
  wonder_button.style.display = "none";
  setTimeout(() => {
    setTitleclass(' title-magic')
  }, 500);
  setTimeout(() => {
    setClass1(' magic-button-1')
  }, 1000);
  setTimeout(() => {
    setClass2(' magic-button-2')
  }, 1500);
  setTimeout(() => {
    setClass3(' magic-button-3')
  }, 2000);
  setTimeout(() => {
    setLargerwrapperclass(' large-wrapper-magic')
  }, 2500);
  setTimeout(() => {
    setProfileclass('   profile-magic')
  }, 100);
}

const App = () => {
  const [class1, setClass1] = useState('');
  const [class2, setClass2] = useState('');
  const [class3, setClass3] = useState('');
  const [largerwrapperclass, setLargerwrapperclass] = useState('');
  const [titleclass, setTitleclass] = useState('');
  const [profileclass, setProfileclass] = useState('');
  useEffect(() => {
    console.log("Loaded");
    const nav = document.querySelector('.navbar');
    nav.style.class = 'nav-magic';
    });
    useEffect(() => {
    if (sessionStorage.getItem("went-through-animation")=="true"){
      var wonder_button = document.getElementsByClassName("wonders")[0];
      wonder_button.style.display = "none";
      wonder(setClass1,setClass2,setClass3,setLargerwrapperclass,setTitleclass,setProfileclass);
    }
  }, []);
  

  return (
    <div id="contianer">
      {/* <div className='bubbles'>
        <span style={{"--i":4}}></span>
        <span style={{"--i":125}}></span>
        <span style={{"--i":12}}></span>
        <span style={{"--i":54}}></span>
        <span style={{"--i":61}}></span>
        <span style={{"--i":28}}></span>
        <span style={{"--i":16}}></span>
        <span style={{"--i":17}}></span>
        <span style={{"--i":12}}></span>
        <span style={{"--i":86}}></span>
        <span style={{"--i":61}}></span>
        <span style={{"--i":72}}></span>
        <span style={{"--i":20}}></span>
        <span style={{"--i":29}}></span>
        <span style={{"--i":250}}></span>
        <span style={{"--i":11}}></span>
        <span style={{"--i":73}}></span>
        <span style={{"--i":120}}></span>
        <span style={{"--i":14}}></span>
        <span style={{"--i":21}}></span>
        <span style={{"--i":28}}></span>
        <span style={{"--i":16}}></span>
        <span style={{"--i":95}}></span>
        <span style={{"--i":12}}></span>
        <span style={{"--i":16}}></span>
        <span style={{"--i":46}}></span>
        <span style={{"--i":22}}></span>
        <span style={{"--i":20}}></span>
        <span style={{"--i":19}}></span>
        <span style={{"--i":12}}></span>
        <span style={{"--i":32}}></span>
        <span style={{"--i":83}}></span>
        <span style={{"--i":12}}></span>
        <span style={{"--i":14}}></span>
        <span style={{"--i":21}}></span>
        <span style={{"--i":28}}></span>
        <span style={{"--i":16}}></span>
        <span style={{"--i":17}}></span>
        <span style={{"--i":12}}></span>
        <span style={{"--i":56}}></span>
        <span style={{"--i":91}}></span>
        <span style={{"--i":82}}></span>
        <span style={{"--i":50}}></span>
        <span style={{"--i":79}}></span>
        <span style={{"--i":125}}></span>
      </div> */}
      <button className='wonders' onClick={()=>{wonder(setClass1,setClass2,setClass3,setLargerwrapperclass,setTitleclass,setProfileclass)}}>Unleash the Potential!</button>
      <div className= {'larger-wrapper'+ largerwrapperclass}>
        <h1 className={'title'+titleclass}>Amos Goh's Portfolio</h1>
        <Navbar class1={class1} class2={class2} class3={class3}/>
      </div>
      <div className={'profile-wrapper'}>
      <img className={'profile'+profileclass}src="pictures/profile.jpeg" alt="profile picture"/>
      </div>
  </div>
  );
};

export default App;




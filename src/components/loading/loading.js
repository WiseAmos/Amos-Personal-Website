import { NoToneMapping } from 'three';
import './loading.css'
import React, { useEffect, useState } from 'react';

function spam(n){
    var alert = document.getElementsByClassName('alert-box')[0];
    var done = document.getElementsByClassName("loading-wrapper")[0];
    for (var i = 0;i<n;i++){
        setTimeout(() => {
            var random_w = Math.random()*(window.innerWidth)-100;
            var random_h = Math.random()*(window.innerHeight)-100;
            let new_element = alert.cloneNode(true);
            new_element.style.top = `${random_h}px`;
            new_element.style.left = `${random_w}px`;
            // new_element.style.animation = `animation`
            alert.after(new_element);
            setTimeout(() => {
                var svg = new_element.getElementsByTagName('img')[1];
                var title = new_element.getElementsByTagName('h1')[1];
                svg.src = "svg/defend.svg"
                title.innerText = "system secured"
                console.log("did")
            }, 1500);
        }, i*50);
    }
}

function Loading(show){
    useEffect(() => {
        if(sessionStorage.getItem("went-through-animation")=="true"){
            var alert = document.getElementsByClassName('alert-box')[0];
            var done = document.getElementsByClassName("loading-wrapper")[0];
            alert.style.display = 'none';
            setTimeout(() => {
                done.style.display = 'none';
            }, 200);
        }
        else{
            
            var alert = document.getElementsByClassName('alert-box')[0];
            var done = document.getElementsByClassName("loading-wrapper")[0];
            alert.style.display = 'block';
                done.style.display = 'block';
            if (window.innerWidth<600){
                spam(20);
            }
            else{
                spam(50);
            }
        }
      }, []);
    return(
        <div className='loading-wrapper'>
            <div className='alert-box'>
                <div className='box-top'>
                    <h1>System failure alert</h1>
                    <img className='close-button' src='svg/close.svg' />
                </div>
                <div className='alert-text-wrapper'>
                <img className='alert-icon' src='svg/alert.svg' />
                <h1 className='alert-text'>intruder alert!</h1>
                </div>
            </div>
        </div>
    )
}


export default Loading
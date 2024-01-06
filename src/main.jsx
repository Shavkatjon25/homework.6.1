import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



function Result(){
  return (<div className='yr'>
    Your Result
  </div>)  
}

function Son76(){
  return(<div className='raqam76'>
    <h1 className='r76'>76</h1>
    <p>of 100</p>
  </div>)
}

function Great(){
  return(<div>
    <h1>Great</h1>
  </div>)
}

function Lorem(){
  return(
    <div className='lorem'>
      <p>Your performance exceed 65% of the people conducting the test here!</p>
    </div>
  )
}

function Summary(){
  return(<div><h1>Summary</h1></div>)
}

function Rasm1(){
  return(<div>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
  <path d="M7.83329 7.33333V1.5L1.16663 10.6667H6.16663V16.5L12.8333 7.33333H7.83329Z" stroke="#FF5555" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </div>)
}

function Rasm2(){
  return(
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5.83331 11.6667C5.46955 11.6672 5.11029 11.7471 4.7806 11.9008C4.45091 12.0546 4.15874 12.2784 3.92447 12.5567C3.69021 12.835 3.5195 13.161 3.42425 13.5121C3.32901 13.8632 3.31152 14.2308 3.37302 14.5893C3.43452 14.9478 3.57351 15.2886 3.78031 15.5879C3.9871 15.8872 4.25672 16.1377 4.57033 16.322C4.88394 16.5063 5.234 16.62 5.59607 16.655C5.95814 16.6901 6.32349 16.6457 6.66665 16.525" stroke="#FFB21E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.5533 13.0042C3.0546 12.7641 2.62354 12.4036 2.29901 11.9552C1.97448 11.5069 1.76671 10.9848 1.69443 10.436C1.62216 9.88729 1.68767 9.32918 1.88504 8.81209C2.08241 8.295 2.40544 7.83519 2.82497 7.47417M2.84997 7.40667C2.57667 6.99771 2.45689 6.50524 2.51182 6.01644C2.56675 5.52765 2.79286 5.07405 3.15012 4.73596C3.50737 4.39786 3.97273 4.19707 4.46381 4.16914C4.95489 4.14121 5.44001 4.28793 5.8333 4.58333M6.03164 4.6375C5.8987 4.35504 5.83094 4.04631 5.83337 3.73414C5.83579 3.42196 5.90835 3.11433 6.04566 2.83397C6.18298 2.55361 6.38155 2.30769 6.62669 2.11439C6.87183 1.9211 7.15728 1.78537 7.46194 1.71723C7.7666 1.6491 8.08267 1.6503 8.3868 1.72075C8.69093 1.79121 8.97533 1.92911 9.219 2.12426C9.46266 2.31942 9.65935 2.56684 9.79453 2.84824C9.92971 3.12964 9.99992 3.43782 9.99997 3.75V16.6667C9.99997 17.1087 9.82437 17.5326 9.51181 17.8452C9.19925 18.1577 8.77533 18.3333 8.3333 18.3333C7.89127 18.3333 7.46735 18.1577 7.15479 17.8452C6.84223 17.5326 6.66664 17.1087 6.66664 16.6667M9.99997 5.83333C9.99997 6.49638 10.2634 7.13226 10.7322 7.6011C11.201 8.06994 11.8369 8.33333 12.5 8.33333M14.1666 11.6667C14.5304 11.6672 14.8897 11.7471 15.2193 11.9008C15.549 12.0546 15.8412 12.2784 16.0755 12.5567C16.3097 12.8349 16.4804 13.161 16.5757 13.5121C16.6709 13.8632 16.6884 14.2308 16.6269 14.5893C16.5654 14.9478 16.4264 15.2886 16.2196 15.5879C16.0128 15.8872 15.7432 16.1377 15.4296 16.322C15.116 16.5063 14.7659 16.62 14.4039 16.655C14.0418 16.6901 13.6765 16.6457 13.3333 16.525" stroke="#FFB21E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.4467 13.0042C16.9454 12.7641 17.3764 12.4036 17.701 11.9552C18.0255 11.5069 18.2333 10.9848 18.3055 10.436C18.3778 9.88729 18.3123 9.32918 18.1149 8.81209C17.9176 8.295 17.5945 7.83519 17.175 7.47417M17.15 7.40667C17.4233 6.99771 17.5431 6.50524 17.4881 6.01644C17.4332 5.52765 17.2071 5.07405 16.8499 4.73596C16.4926 4.39786 16.0272 4.19707 15.5362 4.16914C15.0451 4.14121 14.56 4.28793 14.1667 4.58333M10 3.75C10.0001 3.43782 10.0703 3.12964 10.2054 2.84824C10.3406 2.56684 10.5373 2.31942 10.781 2.12426C11.0246 1.92911 11.309 1.79121 11.6132 1.72075C11.9173 1.6503 12.2334 1.6491 12.538 1.71723C12.8427 1.78537 13.1281 1.9211 13.3733 2.11439C13.6184 2.30769 13.817 2.55361 13.9543 2.83397C14.0916 3.11433 14.1642 3.42196 14.1666 3.73414C14.169 4.04631 14.1013 4.35504 13.9683 4.6375M13.3333 16.6667C13.3333 17.1087 13.1577 17.5326 12.8452 17.8452C12.5326 18.1577 12.1087 18.3333 11.6667 18.3333C11.2246 18.3333 10.8007 18.1577 10.4882 17.8452C10.1756 17.5326 10 17.1087 10 16.6667" stroke="#FFB21E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
  )
}

function Rasm3(){
  return(
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7.49996 10H12.5M9.99996 18.3333C14.6025 18.3333 18.3333 14.6025 18.3333 10C18.3333 5.3975 14.6025 1.66667 9.99996 1.66667C5.39746 1.66667 1.66663 5.3975 1.66663 10C1.66663 11.5175 2.07246 12.9417 2.78163 14.1667L2.08329 17.9167L5.83329 17.2183C7.09958 17.9509 8.53705 18.3355 9.99996 18.3333Z" stroke="#00BB8F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
  )
}


function Rasm4(){
  return(
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 11.6667C10.4421 11.6667 10.866 11.4911 11.1786 11.1785C11.4911 10.866 11.6667 10.442 11.6667 10C11.6667 9.55798 11.4911 9.13405 11.1786 8.82149C10.866 8.50893 10.4421 8.33334 10 8.33334C9.55801 8.33334 9.13409 8.50893 8.82153 8.82149C8.50897 9.13405 8.33337 9.55798 8.33337 10C8.33337 10.442 8.50897 10.866 8.82153 11.1785C9.13409 11.4911 9.55801 11.6667 10 11.6667Z" stroke="#1125D6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.5 10C15.9258 12.4925 13.0983 15 10 15C6.90167 15 4.07417 12.4925 2.5 10C4.41583 7.63167 6.66 5 10 5C13.34 5 15.5842 7.63167 17.5 10Z" stroke="#1125D6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
  )
}


function    Reaction(){
  return(
    <div className='hat'>
      <h3>Reaction</h3>
      <h3>80/100</h3>
    </div>
  )
}

function    Memory(){
  return(
    <div className='hat'>
      <h3>Memory</h3>
      <h3>92/100</h3>
    </div>
  )
}

function    Verbal(){
  return(
    <div className='hat'>
      <h3>Verbal</h3>
      <h3>61/100</h3>
    </div>
  )
}


function    Visual(){
  return(
    <div className='hat'>
      <h3>Visual</h3>
      <h3>73/100</h3>
    </div>
  )
}


function Btn(){
  return(<button className='btn'>Continue</button>)
}


function Home1(){
  return(
      <div className='ota_bola1'>
        {Result()}
        {Son76()}
        {Great()}
        {Lorem()}
      </div>
  )
}

function Roy(){
  return(
    <div className='roy'>
      <div className='royhat mal4'>
        {Rasm1()}
        {Reaction()}
      </div>
      <div className='royhat mal3'>
        {Rasm2()}
        {Memory()}
      </div>
      <div className='royhat mal2'>
        {Rasm3()}
        {Verbal()}
      </div>
      <div className='royhat mal1'>
        {Rasm4()}
        {Visual()}
      </div>
    </div>
  )
}

function Home2(){
  return(
    <div>
      {Summary()}
      {Roy()}
      {Btn()}
    </div>
  )
}

function Home(){
  return(
    <div className='ota'>
      {Home1()}
      {Home2()}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(Home())

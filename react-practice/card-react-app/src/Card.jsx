import React from 'react'
import profilePic from './assets/girl.png'
function Card() {
  return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <h3 className="card-title">Bhargavi K</h3>
        <p className='card-text'>This is my github account</p>
    </div>
   
  )
}

export default Card
import React from 'react'
import csulb from '../assets/csulb.jpg'

const Home = () => (
  // <div style="position:fixed; height: 100%; width: 100%; top:0;left 0;">
  //   <img src='whatever.png' style="height: 100%" />
  // </div>
  //<img src={csulb} alt="CSULB" width="1900px" resizeMode={'contain'} alignSelf='flex-start'/>
  <div>
    <img src={csulb} alt="CSULB" width="100%"/>
  </div>

  // <div>
  //   <h2>Home</h2>
  //   <p className="lead">Welcome to Hangout Homepage</p>
  // </div>

);

export default Home;

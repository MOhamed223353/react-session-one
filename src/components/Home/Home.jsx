import React, { Component } from 'react'
import styles from "../Home/Home.modules.css"
import picture from "../Home/images/Capture111.JPG"
export default class Home extends Component {
  render() {
    return (
<>
<div className="container-fluid homepage min-vh-100">
  <div className="row text-white text-center homechild">
    <div className="col-md-12 mt-5 pt-5">
      <div>
        <img className="w-60 text-center" src={picture} alt="im" />
      </div>
      <div className=" my-4  "><h1>START REACT</h1></div>
      <div className="staricon">
        <i className="fa-solid fa-star fs-2" />
      </div>
      <div className=" mt-4">
        <h3>Graphic Artist - Web Designer - Illustrator</h3>
      </div>
    </div>
  </div>
</div>


</>    )
  }
}

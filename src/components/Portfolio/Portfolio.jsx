import React, { Component } from "react";
import styles from '../Portfolio/Portfolio.modules.css'
import pic1 from '../Portfolio/images/cabin.png'
import pic2 from '../Portfolio/images/cake.png'
import pic3 from '../Portfolio/images/circus.png'
import pic4 from '../Portfolio/images/game.png'
import pic5 from '../Portfolio/images/safe.png'
import pic6 from '../Portfolio/images/submarine.png'


export default class Portfolio extends Component {
  render() {
    return (
      <>
     <div className="container portfolio">
  <div className="text-center w-26 m-auto ">
    <div className="portfoliologo text-center"><h2>PORTFOLIO</h2></div>
    <div className="staricon1">
      <i className="fa-solid fa-star fs-2" />
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div className="item">
        <img className="w-100" src={pic1} alt="im" />
        <div className="layer">
          <i className="fas fa-plus fa-3x" />
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="item">
        <img className="w-100" src={pic2} alt="im" />
        <div className="layer">
          <i className="fas fa-plus fa-3x" />
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="item">
        <img className="w-100" src={pic3} alt="im" />
        <div className="layer">
          <i className="fas fa-plus fa-3x" />
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="item">
        <img className="w-100" src={pic4} alt="im" />
        <div className="layer">
          <i className="fas fa-plus fa-3x" />
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="item">
        <img className="w-100" src={pic5} alt="im" />
        <div className="layer">
          <i className="fas fa-plus fa-3x" />
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="item">
        <img className="w-100" src={pic6} alt="im" />
        <div className="layer">
          <i className="fas fa-plus fa-3x" />
        </div>
      </div>
    </div>
  </div>
</div>


      </>
    )
  }
}


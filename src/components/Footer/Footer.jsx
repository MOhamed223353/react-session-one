import React, { Component } from 'react'
import styles from '../Footer/Footer.modules.css'

export default class Footer extends Component {
  render() {
    return (
<>

<div className="container-fluid finalsection gx-0 px-0 mx-0  ">
  <div className="container-fluid  gx-0 px-0 mx-0  flex-column ">
    <div className="row rowlocation   text-center mt-5 text-white">
      <div className="col-md-4">
        <div className="child">
          <h2 className="pb-2">LOCATION</h2>
          <h4>2215 John Daniel Drive</h4>
          <h4>Clark, MO 65243</h4>
        </div>
      </div>
      <div className="col-md-4">
        <div className="child">
          <h2>AROUND THE WEB</h2>
          <div className="socialicons w-100">
            <i className="fab fa-fw fa-facebook-f" />
            <i className="fab fa-fw fa-twitter" />
            <i className="fab fa-fw fa-linkedin-in" />
            <i className="fab fa-fw fa-dribbble" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="child">
          <h2>ABOUT FREELANCER</h2>
          <p>
            Freelance is a free to use, MIT licensed Bootstrap theme created
            by Route
          </p>
        </div>
      </div>
    </div>
    <div className="copyrights w-100   text-center">
      <h6>Copyright © Your Website 2021</h6>
    </div>
  </div>
</div>




</>    )
  }
}

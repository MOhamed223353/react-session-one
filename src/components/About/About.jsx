import React, { Component } from 'react'
import styles from "../About/About.modules.css"


export default class About extends Component {
 
  render() {
    return (
    
      <> 

<div className="container-fluid about">
  <div className="container my-5 py-5">
    <div className="text-center ">
      <div className="aboutlogo">
        <h2>ABOUT</h2>
      </div>
      <div className="staricon2 ">
        <i className="fa-solid fa-star fs-2" />
      </div>
    </div>
    <div className="row w-50 m-auto text-white mt-3">
      <div className="col-md-6">
        <div>
          <p>
            Freelancer is a free bootstrap theme created by Route. The
            download includes the complete source files including HTML, CSS,
            and JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div>
          <p>
            You can create your own custom avatar for the masthead, change
            the icon in the dividers, and add your email address to the
            contact form to make it fully functional!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

 </>
      
    )
  }
}

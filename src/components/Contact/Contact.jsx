import React, { Component } from 'react'
  import styles from '../Contact/Contact.modules.css'

export default class Contact extends Component {
  render() {
    return (
<>

 <div class="container my-5 py-5">
  <div className="text-center ">
    <div className=" pt-5">
      <h2>CONTACT ME</h2>
    </div>
    <div className="staricon1 ">
      <i className="fa-solid fa-star fs-2" />
    </div>
  </div>  
  <form className="w-75 m-auto mt-5 ">
    <div className="input ">
      <input type="text" className="form-control " placeholder="Name" /></div>
    <div className="input">
      <input type="email" className="form-control " placeholder="Email" /></div>
    <div className="input">
      <input type="number" className="form-control " placeholder="Phone number" /></div>
    <div className="textarea">
      <textarea name id cols={10} rows={7} placeholder="Message" defaultValue={""} />
    </div>
    <div className="mt-5">
      <button className="btn btn-primary ">Send</button>
    </div>
  </form>
</div>



</>    )
  }
}

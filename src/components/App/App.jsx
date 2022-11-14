import { Component } from "react";
import About from "../About/About";
import MasterLayout from "../MasterLayout/MasterLayout";
import {createBrowserRouter,RouterProvider } from "react-router-dom"
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

export default class App extends Component {

  
routes=createBrowserRouter([{path:"/",element:<MasterLayout/>
,children:[{index:true,element:<Home/>},{path:'portfolio',element:<Portfolio/>},{path:'about',element:<About/>},{path:'contacts',element:<Contact/>},]}])


  render() {
    return (
<>
{/* <Home/>
<About/>
<Contacts/>
<div className="container">
<Parent/>
</div> */}
<RouterProvider router={this.routes}/>
</>


      )
  }
}




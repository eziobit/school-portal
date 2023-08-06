import './navbar.css'
// import logo from './web-imgs/logo.jpeg'
import React from 'react'
let a = 1136;
export default function navbar (props) {
  return (
  <nav className="navbar redd navbar-expand-lg">
  <img className='nav-logo' src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-6/308626804_434880952075852_3133939932596480517_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gydNcUPjEhIAX8lA_37&_nc_ht=scontent.flyp3-1.fna&oh=00_AfBJ9LxXL_quLAicP1a4tnUiOFeV5XYOT3g2jHGevAE0fQ&oe=64D4299F" alt="logo" width="100px" />
  <a className="navbar-brand" href="/">{props.brandName}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">Disabled</a>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0 float-right">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    
  )
}

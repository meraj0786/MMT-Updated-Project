import React from 'react'
import '../style/Navbar.css';
function Navbar() {
  return (
    <>
      <div className="navbar sticky-top ">
          {/* // make my trip logo div tag */}
          <a href="/">
            <div className="logo"></div>
          </a>

          {/* // icon of airplane and flight tag */}
          <div className="plane">
            <i className="fa-solid fa-plane-arrival fa-xl" style={{ color: 'blue' }}> flight</i>
          </div>

          {/* // icon for search fontawosome */}
          <a className='ancor' href="/">
            <div className="searchIcon">
              <i className="fa-brands fa-searchengin fa-xl icon1"></i>
              <p style={{ fontWeight: 'bold', marginTop: '6px', marginLeft: '2px' }}>Search</p>
            </div>
          </a>
      </div>
    </>
  )
}

export default Navbar
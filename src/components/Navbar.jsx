import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
  return (
 <div>
<div className="nav">
    <div className="nav-logo">
    <img src="https://www.lexus.com/etc.clientlibs/lexus/clientlibs/lexus-react/resources/static/media/lexus_logo_english.f525f8b8.png" alt="logo" width={150} />
    </div>

<ul>
    <li>Vehicles</li>
    <li>Shop</li>
    <li>My Lexus</li>
    <li>Sign In</li>
    <li className='search'><FaSearch size={25}/></li>
</ul>
<div className="menu">
<AiOutlineMenu size={30}/>
</div>
</div>
 </div>
    
  )
}

export default Navbar
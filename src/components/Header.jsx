import React from 'react'

function Header() {
  return (
    <div className='header'>
  <div className="header-image">
    <img src="https://www.lexus.com/content/dam/lexus/images/homepage/hero/sales/2022/DSE-2022-Homepage-Desktop-1920x795.jpg" alt="header" width={1400} height={500}/>
  </div>

  <div className="header-body">
    <p className='body-head'>SEE OFFERS IN YOUR AREA</p>
<div className="serach"><input type="search" name="" id="" className='ser' placeholder='Enter Zip' /></div>

  </div>
<div className="carousel">
<h1 className='her'>Vehicles and Current  Offers</h1>
<div className="images">
  <div className="image-1">
    <img src="https://toyotaassets.scene7.com/is/image/toyota/Lexus-IS-homepage-vehicles-and-current-offers-750x460-LEX-ISF-MY23-0026.01?wid=750&hei=460" alt="" width={400} />
    <p className='her'>CURRENT OFFERS</p>
    <p className='desc' id='des'>FIND LEASE, FINANCE AND CASH OFFERS IN YOUR AREA </p>
    <div className="btn">SEE OFFERS</div>
  </div>
  <div className="image-1">
    <img src="https://toyotaassets.scene7.com/is/image/toyota/Lexus-LXG-homepage-tile-750x460-LEX-LXG-MY23-0025?wid=750&hei=460" alt="" width={400} />
    <p className='her'>THE 2023 LX</p>
    <p className='desc'>THE NEW STANDARD OF LUXURY</p>
    <div className="btn">EXPLORE</div>
  </div>
  <div className="image-1">
    <img src="https://toyotaassets.scene7.com/is/image/toyota/Lexus-LS-homepage-vehicles-and-current-offers-LEX-LSG-MY21-0039-750x460?wid=750&hei=460" alt="" width={400} />
    <p className='her'>THE 2023 LS</p>
    <p className='desc'>TRANSPORTATION TRANSFORMED</p>
    <div className="btn">EXPLORE</div>
  </div>
</div>

</div>
    </div>
  )
}

export default Header


import './App.css'
function App() {
  return (
      <div>
<div className="nav">
<div><img  className="logo" src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" alt="" /></div>
        <div className="span">⚡ Express delivery to</div>
        <div className="express-delivery">
        <select className="pincode">
          <option>Select Pincode</option>
          <option>123456</option>
          <option>789101</option>
        </select>
      </div>

      <div className="download-box">
    <span className="icon">📱</span>
    <span className="text">Download App</span>
  </div>

  <div className="login-box">
    <span className="icon">👤</span>
    <span className="text">Hello, <strong>Log in</strong></span>
  </div>

  <div className="offers-box">
    <div className="icon-circle">
      <span className="icon">%</span>
    </div>
    <span className="text">Offers</span>
  </div>
  <div className="cart-box">
    <div className="icon-circle">
      <span className="icon">🛒</span>
    </div>
    <span className="text">Add Cart</span>
  </div>
  <div>
  <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item">Medicine</li>
      <li className="nav-item">Lab Tests</li>
      <li className="nav-item dropdown">Healthcare</li>
      <li className="nav-item">Health Blogs</li> 
      <li className="nav-item">PLUS</li>
      <li className="nav-item">Offers</li>
      <li className="nav-item">Value Store</li>
    </ul>
  </nav>
  
  </div>
       </div>
    <div>
       <p className="h1">What are you looking for?</p>
       </div>
       <div className="prescription-btn"> 
    <div className="upload">Order with prescription. </div>
    <div className="upload-text"> Upload Now  </div>
    </div>


    <div className="search">
      <div><img className=" img1" src="data:image/jpeg;base64,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" alt="" /></div>
      <div><p className="search1">Search For Medicine/Shampoo/Health Care</p>
      </div>
       
      <div className="hover-box">Search</div>    </div>
      <div className="container">
        <div className="box">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" alt="Image 1" />
            <div className="content">
                <h3>  Medicine</h3>
           
            </div>
            <h3 className="save">SAVE 22% OFF </h3>
        </div>
        <div className="box">
            <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" alt="Image 2" />
            <div className="content">
                <h3>Lab Tests</h3>
            </div>
            <h3 className="save">SAVE 22% OFF </h3>

        </div>
        <div className="box">
            <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" alt="Image 3" />
            <div className="content">
                <h3>HealthCare</h3>
                <h6>Description line </h6>            </div>
       </div> 
    
        <div className="box">
            <img   src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0" alt="Image 1" />
            <div className="content">
                <h3>Health Blogs</h3>
                <p>Description line 1</p>
            </div>
        </div> <div className="box">
            <img src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0" alt="Image 1" />
            <div className="content">
                <h3>PLUS</h3>
                <p>Description line 1</p>
            </div>
        </div> <div className="box">
            <img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0" alt="Image 1" />
            <div className="content">
                <h3>Offers</h3>
                <p>Description line 1</p>
            </div>
        </div> <div className="box">
            <img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0" alt="Image 1" />
            <div className="content">
                <h3>Value Store</h3>
                <p>Description line 1</p>
            </div>
            </div> 


            
            <div class="slider-container">
  <button class="left-arrow">&#8249;</button>
  <div class="slider">
    <div class="slide"><img  className="slide"   src="https://cdn01.pharmeasy.in/dam/banner/banner/eb99c9fa03c-WELCOME24_HP_YES.jpg" alt="Image 1" /></div>
    <div class="slide"><img className="slide"  src="https://cdn01.pharmeasy.in/dam/banner/banner/8f30e266483-WELCOME22_HP_YES.jpg" alt="Image 2" /></div>
    <div class="slide"><img className="slide"  src="https://cdn01.pharmeasy.in/dam/banner/banner/1f50fae5027-BOGO9.jpg" alt="Image 3" /></div>
    <div class="slide"><img className="slide"  src="https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg" alt="Image 4" /></div>
    <div class="slide"><img src="https://cdn01.pharmeasy.in/dam/banner/banner/c69dc2e6140-Lactacyd_Banner.jpg" alt="Image 5" /></div>
    <div class="slide"><img src="https://cdn01.pharmeasy.in/dam/banner/banner/1d382b43825-Livogen_primary_banner.jpg" alt="Image 6" /></div>
    <div class="slide"><img src="https://cdn01.pharmeasy.in/dam/banner/banner/d9a2b50e73a-3.jpg" alt="Image 7" /></div>
  </div>
  <button class="right-arrow">&#8250;</button>
</div>
   </div>
    
  
    </div> 

   )
 };
 export default App;
 




import React from 'react'

function Header() {
  return (
    <header>
      <nav>

      <h2>Start Bootstrap</h2>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <li>Blog</li>
        <li>Portfolio</li>
      </ul>
      </nav>
      <div className="welcomesection">
        <div className="welcome_conent"><h1>A Bootstrap 5 template for modern businesses</h1>
        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div className="welcome_content_btns">
          <button className='BlBtn'>Get Started</button>
          <button className='TrBtn'>Learn More</button>
          </div>
          </div>
        <div className="welcome_image">
          <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
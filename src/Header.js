import React from 'react'
import './css/Header.css'
import Logo from './assets/images/logo.svg'
import Hamburger from './assets/images/icon-menu.svg'
import Close from './assets/images/icon-menu-close.svg'

function Header() {
  const [menuState, updateMenuState] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      if (menuState) {
        toggleMenu()
      }

      console.log(1, menuState)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function toggleMenu() {
    console.log(menuState)

    if (!menuState) {
      document.getElementById('menuHolder').style.animation =
        'menuSlideIn 1s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55)'
      document.getElementById('menuItem1').style.animation =
        'itemSlideIn 1s forwards'
      document.getElementById('menuItem2').style.animation =
        'itemSlideIn 1.1s forwards'
      document.getElementById('menuItem3').style.animation =
        'itemSlideIn 1.2s forwards'
      document.getElementById('menuItem4').style.animation =
        'itemSlideIn 1.3s forwards'
      document.getElementById('menuItem5').style.animation =
        'itemSlideIn 1.4s forwards'

      document.body.style.overflow = 'hidden'
      document.getElementById('grayOut').style.display = 'block'
    } else {
      document.getElementById('menuHolder').style.animation =
        'menuSlideOut 1s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55)'
      document.getElementById('menuItem1').style.animation =
        'itemSlideOut 1.4s forwards'
      document.getElementById('menuItem2').style.animation =
        'itemSlideOut 1.3s forwards'
      document.getElementById('menuItem3').style.animation =
        'itemSlideOut 1.2s forwards'
      document.getElementById('menuItem4').style.animation =
        'itemSlideOut 1.1s forwards'
      document.getElementById('menuItem5').style.animation =
        'itemSlideOut 1s forwards'

      document.body.style.overflow = 'auto'
      document.getElementById('grayOut').style.display = 'none'
    }

    console.log(2)
    updateMenuState((currentState) => !currentState)
  }

  return (
    <header>
      <div className="headerTop">
        <div className="grayOut" id="grayOut"></div>
        <img src={Logo} alt="pageLogo" />
        <img
          className="mobileMenu"
          onClick={toggleMenu}
          src={Hamburger}
          alt="Menu Access"
        />
        <nav className="menuHolder" id="menuHolder">
          <img
            className="mobileMenuClose"
            onClick={toggleMenu}
            src={Close}
            alt="Close Menu"
          />
          <div className="menuItem" id="menuItem1">
            Home
          </div>
          <div className="menuItem" id="menuItem2">
            New
          </div>
          <div className="menuItem" id="menuItem3">
            Popular
          </div>
          <div className="menuItem" id="menuItem4">
            Trending
          </div>
          <div className="menuItem" id="menuItem5">
            Categories
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

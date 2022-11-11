import './css/Main.css'
import ImageWeb3Mobile from './assets/images/image-web-3-mobile.jpg'
import ImageWeb3Desktop from './assets/images/image-web-3-desktop.jpg'

function Main() {
  console.log(window.innerWidth)

  return (
    <main>
      <img
        className="header_image header_image_mobile"
        src={ImageWeb3Mobile}
        alt="Complex 3d Puzzle"
      />
      <img
        className="header_image header_image_desktop"
        src={ImageWeb3Desktop}
        alt="Complex 3d Puzzle"
      />
      <div className="mainGrid">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="mainGridRight">
          <p>
            We dive into the next evolution of the web that claims to put hte
            power of the platforms back into the hands of the people. But is it
            really fulfillng its promise?
          </p>
          <div className="button">Read More</div>
        </div>
      </div>
    </main>
  )
}

export default Main

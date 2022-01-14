import React from 'react'

const BedroomAccordion = ({ wallpappers, wallDiv, styleWall, numberWall }) => {

  function openAccordion(e) {
    let panel = document.getElementsByClassName('panel bedroom')[numberWall];
    let img = document.querySelectorAll('accordion bedroom img')[numberWall];
    if (panel.style.display === "flex") {
      panel.style.display = "none"
      img.src = '/wp-content/themes/int-room/images/wallpapper.png'
    } else {
      panel.style.display = "flex"
      panel.style.flexWrap = 'wrap'
      panel.style.justifyContent = 'center'
      panel.style.width = 165 + 'px'
      panel.style.height = 165 + 'px'
      panel.style.overflowY = 'scroll'
      img.src = '/wp-content/themes/int-room/images/close.png'
    }
  }

  function openInfo() {
    let info = document.getElementsByClassName('wall-info-bedroom')[numberWall];
    info.style.display === "block" ? info.style.display = "none" : info.style.display = "block"
  }

  const setbgWall = (e, wall) => {
    if (e.target.src !== 'undefined') document.getElementById(wall).style.backgroundImage = `url(${e.target.getAttribute('src')})`
    let infoCurrentWall = document.getElementsByClassName('wall-info-bedroom')[numberWall]
    let nameWallpappers = e.target.getAttribute('src').slice(-10, -4)
    console.log(nameWallpappers);
    infoCurrentWall.innerHTML =
      `Название: ${nameWallpappers} (1,06)<br/>
       <a href="https://www.sintra.ua/product/${nameWallpappers}-106" target="_blank">Ссылка на товар</a>
    `
  }

  return (
    <>
      <div className="wall-choose" style={styleWall} >
        <div className="accordion bedroom">
          <img src="/wp-content/themes/int-room/images/wallpapper.png" alt="" onClick={(e) => openAccordion(e)} />
        </div>
        <div className="wall-info-button" onClick={() => openInfo()}>Info</div>
        <div className="wall-info wall-info-bedroom">
          Название: {wallDiv.props.style.backgroundImage.slice(-12, -6)} (1,06)
          <a href="https://www.sintra.ua/product/448519-106" target="_blank">Ссылка на товар</a>
        </div>
        <div className="panel bedroom">
          {wallpappers.map((_, index) => {
            return (
              <a href='#' key={index}>
                <img
                  src={wallpappers[index]}
                  alt=''
                  className='panel-img'
                  onClick={(e) => setbgWall(e, wallDiv.props.id)}
                />
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default BedroomAccordion
import React, { useRef } from 'react'

const LivingRoomAccordion = ({ wallpappers, setWall, styleWall, numberWall }) => {

  function openAccordion(e) {
    let panel = document.getElementsByClassName('panel living-room')[numberWall];
    let img = document.querySelectorAll('accordion living-room img')[numberWall];
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
    let info = document.getElementsByClassName('wall-info-living-room')[numberWall];
    info.style.display === "block" ? info.style.display = "none" : info.style.display = "block"
  }

  return (
    <>
      <div className="wall-choose" style={styleWall} >
        <div className="accordion living-room">
          <img src="/wp-content/themes/int-room/images/wallpapper.png" alt="" onClick={(e) => openAccordion(e)} />
        </div>
        <div className="wall-info-button" onClick={() => openInfo()}>Info</div>
        <div className="wall-info wall-info-living-room">
          Название: 448519 (1,06)
          <a href="https://www.sintra.ua/product/448519-106" target="_blank">Ссылка на товар</a>
        </div>
        <div className="panel living-room">
          {wallpappers.map((_, index) => {
            return (
              <a href='#' key={index}>
                <img
                  src={wallpappers[index]}
                  alt=''
                  className='panel-img'
                  onClick={(e) => setWall(e)}
                />
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default LivingRoomAccordion
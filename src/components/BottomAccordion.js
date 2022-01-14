import React from 'react'
// import '../style/bottom-accordion.css'
import BottomAccordionList from './BottomAccordionList';
import domtoimage from 'dom-to-image'


const BottomAccordion = () => {

  function openAccordion() {
    let panel = document.getElementsByClassName('wallpappers-block')[0];
    let img = document.querySelector('.clickme-wrap img');
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }

  function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function donwloadImage() {
    domtoimage.toPng(document.getElementById('walls'), { quality: 0.95 })
      .then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'room.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }


  return (
    <section className="bottom-accordion-section">
      <div className='wallpappers-buttons'>
        <ul className='room-links'>
          <li className='fullscreen-icon' onClick={() => toggleFullScreen()}>
            <a href='#' alt="" />
          </li>
          <li className='download-icon' onClick={() => donwloadImage()}>
            <a href='#' alt="" />
          </li>
        </ul>
        <ul className='room-links'>
          <li className='flex-li'>
            <img src="/wp-content/themes/int-room/images/search-icon.png"
              alt=""
              className='search-filter-icon'
            />
            <input
              type="search"
              name="search-wallpapper"
              id='search'
              placeholder='Поиск'
              className='search-wallpapper'
            />
          </li>
          <li className='flex-li filter'>
            <img
              src="/wp-content/themes/int-room/images/filter-icon.png"
              alt=""
              className='search-filter-icon' />
            <span className="filter-number">0</span>
            <div className='filter-text'>
              <a className='filter-button'>Фильтр</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="walpapper-content">
        <div className='clickme' onClick={() => openAccordion()}>
          <div className="clickme-wrap">
            <p className="clickme-text">Развернуть</p>
            <div className="clickme-div">
              <img className='img' src="/wp-content/themes/int-room/images/clickme-arrows.png" />
            </div>
          </div>
        </div>
        <div className="wallpappers-block">
          <p className='title'>Каталог обоев</p>
          <BottomAccordionList />
        </div>
      </div>
    </section>
  )
}

export default BottomAccordion

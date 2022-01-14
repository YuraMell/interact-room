import React from 'react'
import LivingRoomAccordion from '../wall-accordions/LivingRoomAccordion'
import {
  wallChooseStyleLeft,
  wallChooseStyleCenter,
  wallChooseStyleRight
} from '../../living-room'

const LivingRoom = () => {

  let temp = JSON.parse(bgs)
  let pappers = Object.values(temp)
  pappers = pappers.reverse()

  let temp1 = JSON.parse(skus)
  let skus1 = Object.values(temp1)

  let setbgWall = (e, wall, numberWall) => {
    if (e.target.src !== 'undefined') document.getElementById(wall).style.backgroundImage = `url(${e.target.getAttribute('src')})`
    let infoCurrentWall = document.getElementsByClassName('wall-info-living-room')[numberWall]
    let nameWallpappers = e.target.getAttribute('src').slice(-10, -4)
    pappers.forEach((item, index) => {
      if (item == e.target.src) {
        nameWallpappers = skus1[index]
      }
    })
    console.log(nameWallpappers);
    infoCurrentWall.innerHTML =
      `Название: ${nameWallpappers} (1,06)<br/>
       <a href="https://www.sintra.ua/product/${nameWallpappers}-106" target="_blank">Ссылка на товар</a>
    `
  }

  return (
    <>
      <div className='walls'>
        <img src="/wp-content/themes/int-room/images/living-room.png" className='furniture' />
        <div id="left-living-room">
          <div id="left-wall-living-room" className='left-wall'></div>
        </div>
        <div id="center-living-room" >
          <div id="center-wall-living-room" className='center-wall'></div>
        </div>
        <div id="right-living-room" >
          <div id="right-wall-living-room" className='right-wall'></div>
        </div>
      </div>
      <LivingRoomAccordion wallpappers={pappers} setWall={(e) => setbgWall(e, 'left-wall-living-room', 0)} styleWall={wallChooseStyleLeft} numberWall='0' />
      <LivingRoomAccordion wallpappers={pappers} setWall={(e) => setbgWall(e, 'center-wall-living-room', 1)} styleWall={wallChooseStyleCenter} numberWall='1' />
      <LivingRoomAccordion wallpappers={pappers} setWall={(e) => setbgWall(e, 'right-wall-living-room', 2)} styleWall={wallChooseStyleRight} numberWall='2' />
    </>
  )
}

export default LivingRoom
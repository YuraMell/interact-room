import React from 'react'
import BedroomAccordion from '../wall-accordions/BedroomAccordion'
import {
  wallChooseStyleLeft,
  wallChooseStyleCenter,
  wallChooseStyleRight
} from '../../bedroom'

const Bedroom = () => {

  let temp = JSON.parse(bgs)
  let pappers = Object.values(temp)
  pappers = pappers.reverse()

  let leftWallBedroom = <div id="left-wall-bedroom" className='left-wall' style={{ backgroundImage: `url('${pappers[0]}')` }}></div>
  let centerWallBedroom = <div id="center-wall-bedroom" className='center-wall' style={{ backgroundImage: `url('${pappers[0]}')` }}></div>
  let rightWallBedroom = <div id="right-wall-bedroom" className='right-wall' style={{ backgroundImage: `url('${pappers[0]}')` }}></div>

  return (
    <>
      <div className="walls" >
        <img src="/wp-content/themes/int-room/images/bedroom.png" className='furniture' />
        <div id="left-bedroom">
          {leftWallBedroom}
        </div>
        <div id="center-bedroom">
          {centerWallBedroom}
        </div>
        <div id="right-bedroom">
          {rightWallBedroom}
        </div>
      </div>
      <BedroomAccordion wallpappers={pappers} wallDiv={leftWallBedroom} styleWall={wallChooseStyleLeft} numberWall='0' />
      <BedroomAccordion wallpappers={pappers} wallDiv={centerWallBedroom} styleWall={wallChooseStyleCenter} numberWall='1' />
      <BedroomAccordion wallpappers={pappers} wallDiv={rightWallBedroom} styleWall={wallChooseStyleRight} numberWall='2' />
    </>
  )
}

export default Bedroom
import React from "react";
import LivingRoom from './rooms/LivingRoom'
import Bedroom from "./rooms/Bedroom";
import BottomAccordion from "./BottomAccordion";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

const SliderWalls = () => {

  let slides = [<LivingRoom />, <Bedroom />]
  let width = document.documentElement.clientWidth
  let height = document.documentElement.clientHeight

  const chooseRoom = room => {
    let nameRoom = document.querySelector('.name-room')
    let img = document.querySelector('.map img')
    switch (room) {
      case 'living-room':
        img.src = '/wp-content/themes/int-room/images/room1.png'
        nameRoom.innerHTML = 'Гостинная'
        break;
      case 'bedroom':
        img.src = '/wp-content/themes/int-room/images/room5.png'
        nameRoom.innerHTML = 'Спальня'
        break;
      case 'kitchen':
        img.src = '/wp-content/themes/int-room/images/room4.png'
        nameRoom.innerHTML = 'Кухня'
        break;
      case 'hallway':
        img.src = '/wp-content/themes/int-room/images/room3.png'
        nameRoom.innerHTML = 'Прихожая'
        break;
      case 'child':
        img.src = '/wp-content/themes/int-room/images/room2.png'
        nameRoom.innerHTML = 'Детская'
        break;
    }
  }

  const setActiveArrow = (nav, arrow) => {
    let img = document.querySelector(nav)
    img.classList.add(`${arrow}-active`)
  }

  const setDisactiveArrow = (nav, arrow) => {
    let img = document.querySelector(nav)
    img.classList.remove(`${arrow}-active`)
  }

  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={slides.length}
      infinite={true}
    >
      <Slider>
        {slides.map((slide, idx) => <Slide index={idx} key={idx}>{slide}</Slide>)}
      </Slider>
      <div className='room-map'>
        <span className='name-room'>Гостинная</span>
        <div className='map'>
          <img src="/wp-content/themes/int-room/images/room1.png" alt="" />
          <span id='living-room' onClick={() => chooseRoom('living-room')}>
            <Dot className='dot' slide={0} />
          </span>
          <span id='bedroom' onClick={() => chooseRoom('bedroom')}>
            <Dot className='dot' slide={1} />
          </span>
          <span id='kitchen' onClick={() => chooseRoom('kitchen')}>
            <Dot className='dot' slide={2} />
          </span>
          <span id='hallway' onClick={() => chooseRoom('hallway')}>
            <Dot className='dot' slide={3} />
          </span>
          <span id='child' onClick={() => chooseRoom('child')}>
            <Dot className='dot' slide={4} />
          </span>
        </div>
        <div className='room-nav'>
          <img src="/wp-content/themes/int-room/images/room-arrows.png" alt="" />
          <div
            className="left-room-nav"
            onMouseEnter={() => setActiveArrow('.room-nav img', 'left')}
            onMouseLeave={() => setDisactiveArrow('.room-nav img', 'left')}
          >
            <ButtonBack className='room-button' />
          </div>
          <div className='right-room-nav'
            onMouseEnter={() => setActiveArrow('.room-nav img', 'right')}
            onMouseLeave={() => setDisactiveArrow('.room-nav img', 'right')}
          >
            <ButtonNext className='room-button' />
          </div>
        </div>
      </div>
      <div className='back'
        onMouseEnter={() => setActiveArrow('.room-nav img', 'back')}
        onMouseLeave={() => setDisactiveArrow('.room-nav img', 'back')}
      >
        <ButtonBack className='button-back' />
      </div>
      <div className='next'
        onMouseEnter={() => setActiveArrow('.carousel img', 'next')}
        onMouseLeave={() => setDisactiveArrow('.carousel img', 'next')}
      >
        <ButtonNext className='button-next' />
      </div>
      <BottomAccordion />
    </CarouselProvider>
  )
}

export default SliderWalls


// import React from "react";
// import LivingRoom from './rooms/LivingRoom'
// import Bedroom from "./rooms/Bedroom";
// import BottomAccordion from "./BottomAccordion";

// const SliderWalls = () => {

//   let slides = [<LivingRoom />, <Bedroom />, <LivingRoom />, <LivingRoom />, <LivingRoom />]
//   let width = document.documentElement.clientWidth
//   let height = document.documentElement.clientHeight
//   let count = 0;

//   const chooseRoom = room => {
//     let nameRoom = document.querySelector('.name-room')
//     let img = document.querySelector('.map img')
//     switch (room) {
//       case 'living-room':
//         img.src = '/wp-content/themes/int-room/images/room1.png'
//         nameRoom.innerHTML = 'Гостинная'
//         break;
//       case 'bedroom':
//         img.src = '/wp-content/themes/int-room/images/room5.png'
//         nameRoom.innerHTML = 'Спальня'
//         break;
//       case 'kitchen':
//         img.src = '/wp-content/themes/int-room/images/room4.png'
//         nameRoom.innerHTML = 'Кухня'
//         break;
//       case 'hallway':
//         img.src = '/wp-content/themes/int-room/images/room3.png'
//         nameRoom.innerHTML = 'Прихожая'
//         break;
//       case 'child':
//         img.src = '/wp-content/themes/int-room/images/room2.png'
//         nameRoom.innerHTML = 'Детская'
//         break;
//     }
//   }

//   const setActiveArrow = (nav, arrow) => {
//     let img = document.querySelector(nav)
//     img.classList.add(`${arrow}-active`)
//   }

//   const setDisactiveArrow = (nav, arrow) => {
//     let img = document.querySelector(nav)
//     img.classList.remove(`${arrow}-active`)
//   }

//   const sliderNext = () => {
//     let sliderListRoom = document.getElementById('slider-list-room')
//     sliderListRoom.style.right += width + 'px'
//     count++;
//     if (count >= slides.length) {
//       count = 0;
//     }
//     rollSlider();
//   }

//   const sliderPrev = () => {
//     let sliderListRoom = document.getElementById('slider-list-room')
//     sliderListRoom.style.right -= width + 'px'
//     count--;
//     if (count < 0) {
//       count = slides.length - 1;
//     }
//     rollSlider();
//   }

//   function rollSlider() {
//     let sliderListRoom = document.getElementById('slider-list-room')
//     sliderListRoom.style.transform = 'translate(-' + count * width + 'px)';
//   }

//   let currentRoom = room => {
//     let sliderListRoom = document.getElementById('slider-list-room')
//     sliderListRoom.style.transform = 'translate(-' + room * width + 'px)';
//   }

//   return (
//     <>
//       <div id="slider-room" style={{ overflow: 'hidden' }}>
//         <div id="slider-list-room" style={{ display: 'flex', position: 'relative', right: 0 }}>
//           {slides.map((slide, idx) => <div index={idx} key={idx}>{slide}</div>)}
//         </div>
//       </div>
//       <button onClick={() => sliderPrev()}>Prev</button>
//       <button onClick={() => sliderNext()}>Next</button>
//       <div className='room-map'>
//         <span className='name-room'>Гостинная</span>
//         <div className='map'>
//           <img src="/wp-content/themes/int-room/images/room1.png" alt="" />
//           <span id='living-room' onMouseEnter={() => chooseRoom('living-room')} onClick={() => currentRoom(0)}>
//             <span className='dot' slide={0} />
//           </span>
//           <span id='bedroom' onMouseEnter={() => chooseRoom('bedroom')} onClick={() => currentRoom(1)}>
//             <span className='dot' slide={1} />
//           </span>
//           <span id='kitchen' onMouseEnter={() => chooseRoom('kitchen')} onClick={() => currentRoom(2)}>
//             <span className='dot' slide={2} />
//           </span>
//           <span id='hallway' onMouseEnter={() => chooseRoom('hallway')} onClick={() => currentRoom(3)}>
//             <span className='dot' slide={3} />
//           </span>
//           <span id='child' onMouseEnter={() => chooseRoom('child')} onClick={() => currentRoom(4)}>
//             <span className='dot' slide={4} />
//           </span>
//         </div>
//         <div className='room-nav'>
//           <img src="/wp-content/themes/int-room/images/room-arrows.png" alt="" />
//           <div
//             className="left-room-nav"
//             onClick={() => sliderPrev()}
//             onMouseEnter={() => setActiveArrow('.room-nav img', 'left')}
//             onMouseLeave={() => setDisactiveArrow('.room-nav img', 'left')}
//           >
//             <div className='room-button' />
//           </div>
//           <div className='right-room-nav'
//             onClick={() => sliderNext()}
//             onMouseEnter={() => setActiveArrow('.room-nav img', 'right')}
//             onMouseLeave={() => setDisactiveArrow('.room-nav img', 'right')}
//           >
//             <div className='room-button' />
//           </div>
//         </div>
//       </div>
//       <div className='back'
//         onClick={() => sliderPrev()}
//         onMouseEnter={() => setActiveArrow('.room-nav img', 'back')}
//         onMouseLeave={() => setDisactiveArrow('.room-nav img', 'back')}
//       >
//         <div className='button-back' />
//       </div>
//       <div className='next'
//         onClick={() => sliderNext()}
//         onMouseEnter={() => setActiveArrow('.carousel img', 'next')}
//         onMouseLeave={() => setDisactiveArrow('.carousel img', 'next')}
//       >
//         <div className='button-next' />
//       </div>
//       <BottomAccordion />
//     </>

//   )
// }

// export default SliderWalls

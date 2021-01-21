const main = document.querySelector('.main')
const video = main.querySelector('video')
const text = main.querySelector('h1')
const text2 = main.querySelector('h2')

const section = document.querySelector('section')
const endText = section.querySelector('h1')

// ScrollMagic
const controller = new ScrollMagic.Controller()

let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: main,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(main)
  .addTo(controller)

/********************** */

const textAnim = TweenMax.fromTo(text, 2, { opacity: 1 }, { opacity: 0 })
const textAnim2 = TweenMax.fromTo(text2, 3, { opacity: 0 }, { opacity: 1 })

let scene2 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: main,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller)

let scene3 = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: main,
  triggerHook: 0,
})
  .setTween(textAnim2)
  .addTo(controller)

// Video ANimations

let accelAmount = 0.1
let scrollpos = 0
let delay = 0

scene.on('update', (event) => {
  scrollpos = event.scrollPos / 1000
})

setInterval(() => {
  delay += (scrollpos - delay) * accelAmount

  video.currentTime = delay
}, 33.3)

document.addEventListener('DOMContentLoaded', function() {
  run()
})

function run() {
  var scroll = new SmoothScroll('a[href*="#"]', {
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    easing: 'easeInOutCubic', // Easing pattern to use
  });

    // Mobile menu
  var bodyNode = document.querySelector('body')

  var navNode = document.querySelector('.nav-mobile')
  var navOpenNode = document.querySelector('.nav-mobile__open')
  var navCloseNose = document.querySelector('.nav-mobile__close')
  var navContentNode = document.querySelector('.nav-mobile__content')

  navOpenNode.addEventListener('click', function () {
    navNode.classList.toggle('hide')
    bodyNode.classList.toggle('lock-scroll')
  })

  navCloseNose.addEventListener('click', function () {
    navNode.classList.toggle('hide')
    bodyNode.classList.toggle('lock-scroll')
  })

  navContentNode.addEventListener('click', function (e) {
    if (e.target.nodeName !== 'A') return
    navNode.classList.toggle('hide')
    bodyNode.classList.toggle('lock-scroll')
  })

}
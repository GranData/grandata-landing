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
  var hambNode = document.querySelector('.nav-mobile__open')
  var menuCloseNode = document.querySelector('.nav-mobile__content__close')
  var menuMobileNode = document.querySelector('.nav-mobile')
  var bodyNode = document.querySelector('body')
  var linksListMobileNode = document.querySelector('.nav-mobile__content')

  hambNode.addEventListener('click', function (e) {
    menuMobileNode.classList.toggle('hide')
    bodyNode.classList.toggle('lock-scroll')
  })

  menuCloseNode.addEventListener('click', function (e) {
    menuMobileNode.classList.toggle('hide')
    bodyNode.classList.toggle('lock-scroll')
  })

  linksListMobileNode.addEventListener('click', function (e) {
    if (e.target.nodeName !== 'A') return
    menuMobileNode.classList.toggle('hide')
    bodyNode.classList.toggle('lock-scroll')
  })

}
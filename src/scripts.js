document.addEventListener('DOMContentLoaded', function() {
  run()
})

function run() {

  // Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)

    // Speed & Easing
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    easing: 'easeInOutCubic', // Easing pattern to use
    customEasing: function (time) {
    }, // Function. Custom easing pattern

    // Callback API
    before: function () {
    }, // Callback to run before scroll
    after: function () {
    } // Callback to run after scroll
  });

    // Mobile menu
  var hambNode = document.querySelector('.nav-primary__hamburger')
  var menuCloseNode = document.querySelector('.menu-mobile__close')
  var menuMobileNode = document.querySelector('.menu-mobile')
  var bodyNode = document.querySelector('body')
  var linksListMobileNode = document.querySelector('.menu-mobile__list')

  hambNode.addEventListener('click', function (e) {
    menuMobileNode.classList.toggle('hide-menu')
    bodyNode.classList.toggle('lock-scroll')
  })

  menuCloseNode.addEventListener('click', function (e) {
    menuMobileNode.classList.toggle('hide-menu')
    bodyNode.classList.toggle('lock-scroll')
  })

  linksListMobileNode.addEventListener('click', function (e) {
    if (e.target.nodeName !== 'A') return
    menuMobileNode.classList.toggle('hide-menu')
    bodyNode.classList.toggle('lock-scroll')
  })

}
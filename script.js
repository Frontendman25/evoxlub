$(document).ready(function () {
    // Add smooth scrolling to all links
    $('.scroll-down').on('one', function (event) {
      console.log('suka 1')

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault()
      }

      $('.whole-container').css({
        '-webkit-overflow-scrolling': 'inital',
        'scroll-snap-type': 'initial',
        'overflow-y': 'initial',
        'scroll-behavior': 'initial'
      })

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    })
    
    const line_left = [...document.querySelectorAll('.line_left div')]
    const line_right = [...document.querySelectorAll('.line_right div')]
    const line_center = [...document.querySelectorAll('.line_center div')]

    const lineAnimation = () => {
        line_left.forEach(el => el.classList.add('lineGoing'))
        line_left.forEach(el => el.addEventListener('animationend', (e) => {
            line_left.forEach(el => el.classList.remove('lineGoing'))
            line_right.forEach(el => el.classList.add('lineGoing'))
        }))

        line_right.forEach(el => el.addEventListener('animationend', (e) => {
            line_right.forEach(el => el.classList.remove('lineGoing'))
            line_center.forEach(el => el.classList.add('lineGoing'))
        }))

        line_center.forEach(el => el.addEventListener('animationend', (e) => {
            line_center.forEach(el => el.classList.remove('lineGoing'))
            line_left.forEach(el => el.classList.add('lineGoing'))
        }))
    }

    setTimeout(lineAnimation, 2000);
  })
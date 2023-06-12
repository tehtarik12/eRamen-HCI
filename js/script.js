let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
};

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
};

$(document).ready(function () {
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 2,
        nav: false
      }
      // 1000:{
      //   items:3,
      //   nav: false
      // }
    }
  });
});

function validation() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var preferences = document.getElementById('preferences').value;
  var message = document.getElementById('message').value;

  var text = document.getElementById('error_message');
  var txt;

  if (name.length < 1) {
    txt = 'Name must contains more than one character';
    text.innerText = txt;
    return false;
  }
  if (email.length < 1) {
    txt = 'Email Must be filled';
    text.innerText = txt;
    return false;
  }
  if (phone.length < 1) {
    txt = 'Phone number is required';
    text.innerText = txt;
    return false;
  }
  if (preferences.length < 1) {
    txt = 'Preference Must be choosen';
    text.innerText = txt;
    return false;
  }
  if (message.length < 1) {
    txt = 'Message is required';
    text.innerText = txt;
    return false;
  }

  alert('form submitted');
  return true;
}

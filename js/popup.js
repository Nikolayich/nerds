'use strict'

var link = document.querySelector('.js-mail-link');
var popup = document.querySelector('.modal-mail');
var close = document.querySelector('.modal-close');
var closeZone = document.querySelector('html');
var overlay = document.querySelector('.overlay');
var form = popup.querySelector('form');
var yourName = popup.querySelector('[name=name]');
var mail = popup.querySelector('[name=mail]');
var text = popup.querySelector('[name=text]');
var sliderButton1 = document.querySelector('.slider-item:first-child .slider-button');
var sliderButton2 = document.querySelector('.slider-item:nth-child(2) .slider-button');
var sliderButton3 = document.querySelector('.slider-item:last-child .slider-button');
var slider1 = document.querySelector('.feature-item:first-child');
var slider2 = document.querySelector('.feature-item:nth-child(2)');
var slider3 = document.querySelector('.feature-item:last-child');

var isStorageSupport = true;
var nameStorage = '';
var mailStorage = '';

try {
  nameStorage = localStorage.getItem('name');
  mailStorage = localStorage.getItem('mail');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  overlay.classList.add('overlay-show');

  if (nameStorage) {
    yourName.value = nameStorage;
    mail.focus();
  } else if (nameStorage && mailStorage) {
    text.focus();
  } else {
    yourName.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  overlay.classList.remove('overlay-show');
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 27) {
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
      overlay.classList.remove('overlay-show');
    }
  }

});

form.addEventListener('submit', function (evt) {
  if (!yourName.value || !mail.value || !text.value) {
    evt.preventDefault();
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', yourName.value);
      localStorage.setItem('mail', mail.value);
    }
  }
});

sliderButton1.addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderButton1.classList.add('slider-button-current');
  sliderButton2.classList.remove('slider-button-current');
  sliderButton3.classList.remove('slider-button-current');
  slider1.classList.add('feature-item-show');
  slider2.classList.remove('feature-item-show');
  slider3.classList.remove('feature-item-show');
});

sliderButton2.addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderButton2.classList.add('slider-button-current');
  sliderButton1.classList.remove('slider-button-current');
  sliderButton3.classList.remove('slider-button-current');
  slider2.classList.add('feature-item-show');
  slider1.classList.remove('feature-item-show');
  slider3.classList.remove('feature-item-show');
});

sliderButton3.addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderButton3.classList.add('slider-button-current');
  sliderButton1.classList.remove('slider-button-current');
  sliderButton2.classList.remove('slider-button-current');
  slider3.classList.add('feature-item-show');
  slider1.classList.remove('feature-item-show');
  slider2.classList.remove('feature-item-show');
});
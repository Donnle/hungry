const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu-list')
const button = document.querySelector('.header-button')

burger.addEventListener('click', () => {
   menu.classList.toggle('active')
   button.classList.toggle('active')
})

let currentPosition = 0
let slidesToShow = 4
if (window.innerWidth <= 1024) { slidesToShow = 3 }
if (window.innerWidth <= 768) { slidesToShow = 2 }
if (window.innerWidth <= 425) { slidesToShow = 1 }
const slidesToScroll = 1
const list = document.querySelector('.companies-slider')
const slides = document.querySelectorAll('.companies__item')
const slidesCount = slides.length
const prev = document.querySelector('.companies-slider__prev')
const next = document.querySelector('.companies-slider__next')
const slideWidth = list.clientWidth / slidesToShow
const movePosition = slideWidth * slidesToScroll
slides.forEach(item => { item.style.minWidth = `${slideWidth}px` })
const setPosition = () => { list.style.transform = `translateX(${currentPosition}px)` }
prev.addEventListener('click', () => {
   const itemsLeft = Math.abs(currentPosition) / slideWidth
   currentPosition += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * slideWidth
   setPosition()
})
next.addEventListener('click', () => {
   const itemsLeft = slidesCount - (Math.abs(currentPosition) + slidesToShow * slideWidth) / slideWidth
   currentPosition -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * slideWidth
   setPosition()
})



let currentPosition1 = 0
let slidesToShow1 = 3
if (window.innerWidth <= 1024) { slidesToShow1 = 2 }
if (window.innerWidth <= 768) { slidesToShow1 = 1 }
const slidesToScroll1 = 1
const list1 = document.querySelector('.testimonials-list')
const slides1 = document.querySelectorAll('.testimonials__item')
const slidesCount1 = slides1.length
const prev1 = document.querySelector('.testimonials__prev')
const next1 = document.querySelector('.testimonials__next')
const slideWidth1 = list.clientWidth / slidesToShow1
const movePosition1 = slideWidth1 * slidesToScroll1
slides1.forEach(item => { item.style.minWidth = `${slideWidth1}px` })
const setPosition1 = () => { list1.style.transform = `translateX(${currentPosition1}px)` }
prev1.addEventListener('click', () => {
   const itemsLeft1 = Math.abs(currentPosition1) / slideWidth1
   currentPosition1 += itemsLeft1 >= slidesToScroll1 ? movePosition1 : itemsLeft1 * slideWidth1
   setPosition1()
})
next1.addEventListener('click', () => {
   const itemsLeft1 = slidesCount1 - (Math.abs(currentPosition1) + slidesToShow1 * slideWidth1) / slideWidth1
   currentPosition1 -= itemsLeft1 >= slidesToScroll1 ? movePosition1 : itemsLeft1 * slideWidth1
   setPosition1()
})
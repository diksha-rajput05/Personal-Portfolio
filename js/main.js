const navMenu = document.getElementById('nav_menu'),
  navToggle = document.getElementById('nav_toggle'),
navClose = document.getElementById('nav_close')
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//  Remove menu mobile
const navLink = document.querySelectorAll('.nav_link')
function linkAction() {
  const navMenu = document.getElementById('nav_menu')
  // when we click on each nav_link,, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// skills


const skillsContent = document.querySelectorAll('.skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close';
  }

  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});


// qualification

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')
    tab.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})

// Services

const modalViews = document.querySelectorAll('.services_modal'),
  modalBtns = document.querySelectorAll('.services-button'),
  modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) => {
  modalBtns.addEventListener('click', () => {
    modal(i)
  })
})
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalViews) => {
      modalViews.classList.remove('active-modal')
    })
  })
  // something is wrong with the active-modal syntax
})


// chnage background Header

function scrollHeader() {
  const nav = document.getElementById('header')
  if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scroll up

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// dark light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme =localStorage.getItem('selected-theme')
const selectedIcon =localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=> {
  
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon)
}) 
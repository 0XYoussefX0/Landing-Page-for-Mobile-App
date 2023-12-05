document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementsByClassName("nav")[0]
  const hero = document.getElementsByClassName("hero-content")[0]
  const phones = document.getElementsByClassName("app-screenshots")[0]
  const heroContainer = document.getElementById("heroBackground")
  const decorativeImageDiv = document.getElementById("decorative-image-div")

  const phonesHeight = phones.clientHeight
  const navbarHeight = navbar.clientHeight
  const heroHeight = hero.clientHeight
  heroContainer.style.height = `${
    (navbarHeight + heroHeight + phonesHeight) * 0.75
  }px`

  decorativeImageDiv.style.height = `${
    (navbarHeight + heroHeight + phonesHeight) * 0.25
  }px`
})
window.addEventListener("resize", function () {
  const navbar = document.getElementsByClassName("nav")[0]
  const hero = document.getElementsByClassName("hero-content")[0]
  const phones = document.getElementsByClassName("app-screenshots")[0]
  const heroContainer = document.getElementById("heroBackground")
  const decorativeImageDiv = document.getElementById("decorative-image-div")

  const phonesHeight = phones.clientHeight
  const navbarHeight = navbar.clientHeight
  const heroHeight = hero.clientHeight
  heroContainer.style.height = `${
    (navbarHeight + heroHeight + phonesHeight) * 0.75
  }px`

  decorativeImageDiv.style.height = `${
    (navbarHeight + heroHeight + phonesHeight) * 0.25
  }px`
})

const navList = document.getElementsByClassName("nav-list")[0]

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId)
  if (sectionId === "#newsletter-section") {
    window.scrollTo({
      top: section.offsetTop - 200,
      behavior: "smooth",
    })
    return
  }
  window.scrollTo({
    top: section.offsetTop - 50,
    behavior: "smooth",
  })
}

navList.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    scrollToSection(this.getAttribute("href"))
  })
})

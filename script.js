// Highlight active menu
const links = document.querySelectorAll('.navbar ul li a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#ff6f91";
  }
});

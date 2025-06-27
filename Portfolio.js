const themeToggle = document.querySelector('.theme-toggle');
const themeToggleOn = document.querySelector('.theme-toggle-on');
const body = document.body;

themeToggle.addEventListener('click', () => {
  themeToggle.style.display = 'none';
  themeToggleOn.style.display = 'block';
  body.classList.remove('light');
  body.classList.add('dark');
  localStorage.setItem("themeClass", "dark");
});

themeToggleOn.addEventListener('click', () => {
  themeToggleOn.style.display = 'none';
  themeToggle.style.display = 'block';
  body.classList.remove('dark');
  body.classList.add('light');
  localStorage.setItem("themeClass", "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedClass = localStorage.getItem("themeClass");
  if (savedClass) {
    body.classList.add(savedClass);

    if (savedClass === "dark") {
      themeToggle.style.display = 'none';
      themeToggleOn.style.display = 'block';
    } else {
      themeToggle.style.display = 'block';
      themeToggleOn.style.display = 'none';
    }

  } else {
    body.classList.add("light");
    localStorage.setItem("themeClass", "light");
    themeToggle.style.display = 'block';
    themeToggleOn.style.display = 'none';
  }
});


  const links = document.querySelectorAll('.link');

  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active')); // remove active from all
      this.classList.add('active'); // add to clicked
    });
  });

const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuExit = document.querySelector('.toggle-menu-exit');
const sideBar = document.querySelector('.side-bar');
const showContent = document.querySelector('.content');

toggleMenu.addEventListener('click', ()=>{
  toggleMenu.style.display = 'none';
  toggleMenuExit.style.display = 'block';
  sideBar.style.display = 'block';
  showContent.style.width = '85%'
  
})

toggleMenuExit.addEventListener('click', ()=>{
  toggleMenu.style.display = 'block';
  toggleMenuExit.style.display = 'none';
  sideBar.style.display = 'none';
  showContent.style.width = '100%'
})







// Load header component
fetch('./components/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
    initializeDarkModeToggle();
  });

// Load footer component
fetch('./components/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });

//Darkmode Function with localStorage persistence
let isDarkMode = localStorage.getItem('darkMode') !== null ? localStorage.getItem('darkMode') === 'true' : true; // Default to dark mode if no preference saved

function initializeDarkModeToggle(){
  const darkModeToggle = document.getElementById('darkModeToggle');
  const lightIcon = document.getElementById('lightIcon');
  const darkIcon = document.getElementById('darkIcon');
  
  // Apply initial dark mode state
  updateDarkMode();
  
  // Set initial icon state - show moon icon for dark mode
  if (isDarkMode){
    lightIcon.classList.add('hidden');
    darkIcon.classList.remove('hidden');
  } else {
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
  }
  
  darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    //Toggle icons
    lightIcon.classList.toggle('hidden');
    darkIcon.classList.toggle('hidden');
    console.log('Dark mode', isDarkMode ? 'enabled' : 'disabled');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
    
    updateDarkMode();
  });
}

const updateDarkMode = () => {
  const html = document.documentElement;
  if (isDarkMode) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
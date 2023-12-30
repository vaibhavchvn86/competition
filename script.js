document.addEventListener('DOMContentLoaded', function () {
    var switchInput = document.getElementById('flexSwitchCheckDefault');
    var switchLabel = document.querySelector('.form-check-label');

    switchInput.addEventListener('change', function () {
      if (switchInput.checked) {
        // Dark mode
        document.body.classList.add('dark-mode');
        switchLabel.textContent = 'Light Mode';
      } else {
        // Light mode
        document.body.classList.remove('dark-mode');
        switchLabel.textContent = 'Dark Mode';
      }
    });

    // Optional: Check the user's preference from local storage
    var darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
      switchInput.checked = true;
      document.body.classList.add('dark-mode');
      switchLabel.textContent = 'Light Mode';
    }
  });

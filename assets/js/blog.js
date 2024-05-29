const themeToggle = document.getElementById('themeToggle');
const blogPostsContainer = document.getElementById('blogPosts');

// Retrieve data from localStorage and display blog posts
const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
savedPosts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <small>By ${post.username}</small>
    `;
    blogPostsContainer.appendChild(postElement);
});
// blog.js
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // Save user preference (e.g., in localStorage)
  }

  // Set initial mode based on user preference (if available)
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  });
});


// Back button functionality
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
    window.history.back();
});
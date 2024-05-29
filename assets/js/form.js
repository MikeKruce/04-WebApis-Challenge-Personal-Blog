document.addEventListener('DOMContentLoaded', (event) => {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const blogTitle = document.getElementById('blogTitle').value;
        const blogContent = document.getElementById('blogContent').value;

        // Save data to localStorage (you can replace this with an API call)
        const blogPost = {
            username,
            title: blogTitle,
            content: blogContent,
        };
        const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        existingPosts.unshift(blogPost); // Add new post to the beginning of the array
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        // Redirect to posts page
        window.location.href = 'blog.html';
    });
});
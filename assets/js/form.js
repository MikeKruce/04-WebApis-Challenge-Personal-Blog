const blogForm = document.getElementById('blogForm');

blogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blogContent = document.getElementById('blogContent').value;

    // Save data to localStorage (you can replace this with an API call)
    const blogForm = {
        username,
        title: blogTitle,
        content: blogContent,
    };
    const existingPosts = JSON.parse(localStorage.getItem('blogForm')) || [];
    existingPosts.push(blogPost);
    localStorage.setItem('blogForm', JSON.stringify(existingPosts));

    // Redirect to posts page
    window.location.href = 'blog.html';
});
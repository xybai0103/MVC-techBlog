const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect comment content from the comment form
    const commentContent = document.querySelector('#comment-input').value.trim();
    // Get the blogPost ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const blogPostId = urlParams.get('id');
    // Create an object with comment, blogPost ID and user ID
    const commentData = {
        content: commentContent,
        user_id: req.session.user_id,
        blogpost_id: blogPostId
    };
  
    if (commentContent) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/comments/blogPost/${blogPostId}`, {
        method: 'POST',
        body: JSON.stringify({ commentData }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage
        document.location.replace(`/api/comments/blogPost/${blogPostId}`);
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);
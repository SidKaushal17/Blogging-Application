document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postList = document.getElementById('post-list');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            const post = document.createElement('div');
            post.classList.add('post');
            post.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
            `;

            postList.appendChild(post);

            // Clear form fields
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
        }
    });
});

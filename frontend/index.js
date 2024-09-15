import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('blogForm');
    const postsContainer = document.getElementById('posts');

    // Function to display posts
    async function displayPosts() {
        try {
            const posts = await backend.getPosts();
            console.log('Fetched posts:', posts);
            postsContainer.innerHTML = '';
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><em>${new Date(Number(post.date) / 1000000).toLocaleString()}</em></p>
                    <p>${post.description}</p>
                    ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
                `;
                postsContainer.appendChild(postElement);
            });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    // Display initial posts
    await displayPosts();

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const image = document.getElementById('image').value;

        try {
            console.log('Adding new post:', { title, description, image });
            const updatedPosts = await backend.addPost(title, description, image ? image : null);
            console.log('Updated posts:', updatedPosts);
            form.reset();
            await displayPosts();
        } catch (error) {
            console.error('Error adding post:', error);
        }
    });
});
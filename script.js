document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const messagesContainer = document.getElementById('messages');

    // Load messages from Local Storage
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messagesContainer.innerHTML = '';
        messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.innerHTML = `<strong>${msg.name}</strong>: <p>${msg.text}</p>`;
            messagesContainer.appendChild(messageDiv);
        });
    }

    // Handle submit
    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const text = messageInput.value.trim();

        if (name && text) {
            const messages = JSON.parse(localStorage.getItem('messages')) || [];
            messages.push({ name, text });
            localStorage.setItem('messages', JSON.stringify(messages));
            nameInput.value = '';
            messageInput.value = '';
            loadMessages();
        } else {
            alert('Please enter both your name and a message.');
        }
    });

    // Initial load
    loadMessages();
});

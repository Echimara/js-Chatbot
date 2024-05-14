const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage !== '') {
    appendMessage('You', userMessage);
    getBotResponse(userMessage);
    userInput.value = '';
  }
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
  // In a real chatbot, you would make an API call here to get a response based on userMessage.
  // For simplicity, we'll just simulate a bot response after a short delay.
  setTimeout(() => {
    const botMessage = `This is a bot response to "${userMessage}"`;
    appendMessage('Bot', botMessage);
  }, 500);
}

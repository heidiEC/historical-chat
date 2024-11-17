import React, { useState, useRef, useEffect } from 'react';
import { query as generateResponse } from '../services/huggingFaceService';
import './ChatInterface.css';

function ChatInterface({ character, onClose }) {
  const [messages, setMessages] = useState([
    { text: 'Hello! I am ready to chat.', sender: 'character', isGreeting: true }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = { text: newMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      // Get character's response
      const response = await generateResponse({
        inputs: newMessage,
        character
      });

      // Add character's response
      const characterMessage = { text: response, sender: 'character' };
      setMessages(prev => [...prev, characterMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage = {
        text: 'I apologize, but I am unable to respond at the moment.',
        sender: 'character'
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll when messages update

  return (
    <div className="chat-modal-overlay">
      <div className="chat-interface">
        <div className="chat-header">
          <button className="close-button" onClick={onClose}>×</button>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </div>
        
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender} ${index === 0 ? 'greeting' : ''}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <div className="chat-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !newMessage.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface; 
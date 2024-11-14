import React, { useState, useRef, useEffect } from 'react';
import { generateResponse } from '../services/huggingFaceService';

function ChatInterface({ character }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I am ${character.name}. What would you like to discuss?`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = {
      role: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    try {
      // Show loading state
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '...',
        isLoading: true
      }]);

      // Get response from API
      const response = await generateResponse(character, [...messages, userMessage]);

      // Replace loading message with actual response
      setMessages(prev => [
        ...prev.slice(0, -1),
        {
          role: 'assistant',
          content: response
        }
      ]);
    } catch (error) {
      // Handle error
      setMessages(prev => [
        ...prev.slice(0, -1),
        {
          role: 'assistant',
          content: "I apologize, but I'm having trouble connecting right now. Please try again."
        }
      ]);
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </div>

      <div className="messages-container">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="message-input-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInterface; 
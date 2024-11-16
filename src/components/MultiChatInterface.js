import React, { useState } from 'react';
import { query } from '../services/huggingFaceService';

function MultiChatInterface({ selectedCharacters, onClose }) {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState({});
  const [isLoading, setIsLoading] = useState({});

  const handleMultiChat = async () => {
    if (!message.trim()) return;

    // Set loading state for all characters
    const loadingStates = {};
    selectedCharacters.forEach(char => {
      loadingStates[char.id] = true;
    });
    setIsLoading(loadingStates);

    // Get responses from all characters
    const newResponses = {};
    for (const character of selectedCharacters) {
      try {
        const response = await query({ inputs: message, character });
        newResponses[character.id] = response;
      } catch (error) {
        newResponses[character.id] = "I apologize, I couldn't process your request.";
      }
      setIsLoading(prev => ({ ...prev, [character.id]: false }));
    }

    setResponses(prev => ({
      ...prev,
      [message]: newResponses
    }));
    setMessage('');
  };

  return (
    <div className="multi-chat-container">
      <div className="multi-chat-header">
        <h2>Group Discussion</h2>
        <button onClick={onClose} className="close-button">×</button>
      </div>
      
      <div className="multi-chat-windows">
        {selectedCharacters.map(character => (
          <div key={character.id} className="chat-window">
            <div className="chat-window-header">
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
            <div className="chat-messages">
              {isLoading[character.id] ? (
                <div className="loading">Thinking...</div>
              ) : (
                Object.entries(responses).map(([question, chars]) => (
                  <div key={question} className="message-group">
                    <div className="user-message">{question}</div>
                    <div className="character-response">{chars[character.id]}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="multi-chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask your question to all characters..."
          onKeyPress={(e) => e.key === 'Enter' && handleMultiChat()}
        />
        <button onClick={handleMultiChat} disabled={!message.trim()}>
          Ask All
        </button>
      </div>
    </div>
  );
}

export default MultiChatInterface; 
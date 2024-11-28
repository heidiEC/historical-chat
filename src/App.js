import React, { useState } from 'react';
import CharacterSelect from './components/CharacterSelect';
import ChatInterface from './components/ChatInterface';
import MultiChatInterface from './components/MultiChatInterface';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [isMultiChatActive, setIsMultiChatActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle single character selection for normal chat
  const handleCharacterSelect = (character) => {
    if (isMultiChatActive) {
      // For multi-chat, add/remove characters from selection
      if (selectedCharacters.find(c => c.id === character.id)) {
        setSelectedCharacters(selectedCharacters.filter(c => c.id !== character.id));
      } else if (selectedCharacters.length < 4) { // Limit to 4 characters
        setSelectedCharacters([...selectedCharacters, character]);
      }
    } else {
      // For single chat, just set the character
      setSelectedCharacter(character);
    }
  };

  // Toggle between single and multi-chat modes
  const toggleMultiChat = () => {
    setIsMultiChatActive(!isMultiChatActive);
    setSelectedCharacters([]);
    setSelectedCharacter(null);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the LANE intimate and visionary chats</h1>
      </header>
      
      <div className="nav-controls">
        <input
          type="text"
          placeholder="Search characters..."
          className="search-bar"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button 
          className="mode-button"
          onClick={toggleMultiChat}
        >
          {isMultiChatActive ? 'Single Chat' : 'Multi Chat'}
        </button>
      </div>

      <CharacterSelect 
        onSelectCharacter={handleCharacterSelect}
        selectedCharacters={selectedCharacters}
        searchQuery={searchQuery}
      />

      {/* Chat Interface Modal */}
      {selectedCharacter && (
        <div className="chat-modal-overlay">
          <ChatInterface 
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        </div>
      )}

      {/* Multi-Chat Interface Modal */}
      {isMultiChatActive && selectedCharacters.length >= 2 && (
        <div className="chat-modal-overlay">
          <MultiChatInterface 
            selectedCharacters={selectedCharacters}
            onClose={() => {
              setIsMultiChatActive(false);
              setSelectedCharacters([]);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App; 

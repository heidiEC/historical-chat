import React, { useState } from 'react';
import CharacterSelect from './components/CharacterSelect';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="app">
      <header>
        <h1>Chat with Historical Figures</h1>
      </header>
      
      {!selectedCharacter ? (
        <CharacterSelect onSelectCharacter={handleCharacterSelect} />
      ) : (
        <ChatInterface character={selectedCharacter} />
      )}
    </div>
  );
}

export default App; 
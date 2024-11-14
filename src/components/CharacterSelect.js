import React from 'react';

const characters = [
  {
    id: 1,
    name: 'Benjamin Franklin',
    title: 'Founding Father & Polymath',
    image: '/images/franklin.jpg'
  },
  {
    id: 2,
    name: 'Martin Luther King Jr',
    title: 'Civil Rights Leader',
    image: '/images/mlk.jpg'
  },
  {
    id: 3,
    name: 'Steve Jobs',
    title: 'Tech Visionary',
    image: '/images/jobs.jpg'
  },
  {
    id: 4,
    name: 'Leonardo DaVinci',
    title: 'Renaissance Polymath',
    image: '/images/davinci.jpg'
  },
  {
    id: 5,
    name: 'J Krishnamurti',
    title: 'Philosophical Teacher',
    image: '/images/krishnamurti.jpg'
  },
  {
    id: 6,
    name: 'Stephen Hawking',
    title: 'Theoretical Physicist',
    image: '/images/hawking.jpg'
  }
];

function CharacterSelect({ onSelectCharacter }) {
  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div 
          key={character.id} 
          className="character-card"
          onClick={() => onSelectCharacter(character)}
        >
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>{character.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterSelect; 
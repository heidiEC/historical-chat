import React from 'react';

const BASE_URL = 'https://heidiec.github.io/historical-chat';

const characters = [
  {
    id: 1,
    name: 'Benjamin Franklin',
    title: 'Founding Father & Polymath',
    image: `${BASE_URL}/images/franklin.jpg`
  },
  {
    id: 2,
    name: 'Martin Luther King Jr',
    title: 'Civil Rights Leader',
    image: `${BASE_URL}/images/mlk.jpg`
  },
  {
    id: 3,
    name: 'Steve Jobs',
    title: 'Tech Visionary',
    image: `${BASE_URL}/images/jobs.jpg`
  },
  {
    id: 4,
    name: 'Leonardo DaVinci',
    title: 'Renaissance Polymath',
    image: `${BASE_URL}/images/davinci.jpg`
  },
  {
    id: 5,
    name: 'J Krishnamurti',
    title: 'Philosophical Teacher',
    image: `${BASE_URL}/images/krishnamurti.jpg`
  },
  {
    id: 6,
    name: 'Stephen Hawking',
    title: 'Theoretical Physicist',
    image: `${BASE_URL}/images/hawking.jpg`
  },
  {
    id: 7,
    name: 'Marie Curie',
    title: 'Pioneer in Radioactivity',
    image: `${BASE_URL}/images/curie.jpg`
  },
  {
    id: 8,
    name: 'Albert Einstein',
    title: 'Theoretical Physicist',
    image: `${BASE_URL}/images/einstein.jpg`
  },
  {
    id: 9,
    name: 'Mahatma Gandhi',
    title: 'Non-violent Freedom Fighter',
    image: `${BASE_URL}/images/gandhi.jpg`
  },
  {
    id: 10,
    name: 'Nikola Tesla',
    title: 'Electrical Engineering Genius',
    image: `${BASE_URL}/images/tesla.jpg`
  },
  {
    id: 11,
    name: 'Maya Angelou',
    title: 'Poet and Civil Rights Activist',
    image: `${BASE_URL}/images/angelou.jpg`
  },
  {
    id: 12,
    name: 'Carl Sagan',
    title: 'Astronomer and Science Communicator',
    image: `${BASE_URL}/images/sagan.jpg`
  },
  {
    id: 13,
    name: 'Princess Diana',
    title: 'Humanitarian & People\'s Princess',
    image: `${BASE_URL}/images/diana.jpg`
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
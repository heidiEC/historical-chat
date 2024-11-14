import React from 'react';

const characters = [
  {
    id: 1,
    name: 'Benjamin Franklin',
    title: 'Founding Father & Polymath',
    image: process.env.PUBLIC_URL + '/images/franklin.jpg'
  },
  {
    id: 2,
    name: 'Martin Luther King Jr',
    title: 'Civil Rights Leader',
    image: process.env.PUBLIC_URL + '/images/mlk.jpg'
  },
  {
    id: 3,
    name: 'Steve Jobs',
    title: 'Tech Visionary',
    image: process.env.PUBLIC_URL + '/images/jobs.jpg'
  },
  {
    id: 4,
    name: 'Leonardo DaVinci',
    title: 'Renaissance Polymath',
    image: process.env.PUBLIC_URL + '/images/davinci.jpg'
  },
  {
    id: 5,
    name: 'J Krishnamurti',
    title: 'Philosophical Teacher',
    image: process.env.PUBLIC_URL + '/images/krishnamurti.jpg'
  },
  {
    id: 6,
    name: 'Stephen Hawking',
    title: 'Theoretical Physicist',
    image: process.env.PUBLIC_URL + '/images/hawking.jpg'
  },
  {
    id: 7,
    name: 'Marie Curie',
    title: 'Pioneer in Radioactivity',
    image: process.env.PUBLIC_URL + '/images/curie.jpg'
  },
  {
    id: 8,
    name: 'Albert Einstein',
    title: 'Theoretical Physicist',
    image: process.env.PUBLIC_URL + '/images/einstein.jpg'
  },
  {
    id: 9,
    name: 'Mahatma Gandhi',
    title: 'Non-violent Freedom Fighter',
    image: process.env.PUBLIC_URL + '/images/gandhi.jpg'
  },
  {
    id: 10,
    name: 'Nikola Tesla',
    title: 'Electrical Engineering Genius',
    image: process.env.PUBLIC_URL + '/images/tesla.jpg'
  },
  {
    id: 11,
    name: 'Maya Angelou',
    title: 'Poet and Civil Rights Activist',
    image: process.env.PUBLIC_URL + '/images/angelou.jpg'
  },
  {
    id: 12,
    name: 'Carl Sagan',
    title: 'Astronomer and Science Communicator',
    image: process.env.PUBLIC_URL + '/images/sagan.jpg'
  },
  {
    id: 13,
    name: 'Princess Diana',
    title: 'Humanitarian & People\'s Princess',
    image: process.env.PUBLIC_URL + '/images/diana.jpg'
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
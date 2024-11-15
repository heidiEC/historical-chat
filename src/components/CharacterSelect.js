import React from 'react';
import franklinImg from '../images/franklin.jpg';
import mlkImg from '../images/mlk.jpg';
import jobsImg from '../images/jobs.jpg';
import davinciImg from '../images/davinci.jpg';
import krishnamurtiImg from '../images/krishnamurti.jpg';
import hawkingImg from '../images/hawking.jpg';
import curieImg from '../images/curie.jpg';
import einsteinImg from '../images/einstein.jpg';
import gandhiImg from '../images/gandhi.jpg';
import teslaImg from '../images/tesla.jpg';
import angelouImg from '../images/angelou.jpg';
import saganImg from '../images/sagan.jpg';
import dianaImg from '../images/diana.jpg';

const characters = [
  {
    id: 1,
    name: 'Benjamin Franklin',
    title: 'Founding Father & Polymath',
    image: franklinImg
  },
  {
    id: 2,
    name: 'Martin Luther King Jr',
    title: 'Civil Rights Leader',
    image: mlkImg
  },
  {
    id: 3,
    name: 'Steve Jobs',
    title: 'Tech Visionary',
    image: jobsImg
  },
  {
    id: 4,
    name: 'Leonardo DaVinci',
    title: 'Renaissance Polymath',
    image: davinciImg
  },
  {
    id: 5,
    name: 'J Krishnamurti',
    title: 'Philosophical Teacher',
    image: krishnamurtiImg
  },
  {
    id: 6,
    name: 'Stephen Hawking',
    title: 'Theoretical Physicist',
    image: hawkingImg
  },
  {
    id: 7,
    name: 'Marie Curie',
    title: 'Pioneer in Radioactivity',
    image: curieImg
  },
  {
    id: 8,
    name: 'Albert Einstein',
    title: 'Theoretical Physicist',
    image: einsteinImg
  },
  {
    id: 9,
    name: 'Mahatma Gandhi',
    title: 'Non-violent Freedom Fighter',
    image: gandhiImg
  },
  {
    id: 10,
    name: 'Nikola Tesla',
    title: 'Electrical Engineering Genius',
    image: teslaImg
  },
  {
    id: 11,
    name: 'Maya Angelou',
    title: 'Poet and Civil Rights Activist',
    image: angelouImg
  },
  {
    id: 12,
    name: 'Carl Sagan',
    title: 'Astronomer and Science Communicator',
    image: saganImg
  },
  {
    id: 13,
    name: 'Princess Diana',
    title: 'Humanitarian & People\'s Princess',
    image: dianaImg
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
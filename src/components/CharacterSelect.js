import React from 'react';
import mlkImg from '../images/mlk.jpg';
import cortazarImg from '../images/cortazar.jpg';
import curieImg from '../images/curie.jpg';
import einsteinImg from '../images/einstein.jpg';
import marquezImg from '../images/marquez.jpg';
import teslaImg from '../images/tesla.jpg';
import dianaImg from '../images/diana.jpg';
import krishnamurtiImg from '../images/krishnamurti.jpg';
import jobsImg from '../images/jobs.jpg';
import angelouImg from '../images/angelou.jpg';
import hawkingImg from '../images/hawking.jpg';
import gandhiImg from '../images/gandhi.jpg';
import saganImg from '../images/sagan.jpg';
import franklinImg from '../images/franklin.jpg';
import davinciImg from '../images/davinci.jpg';
import bolanoImg from '../images/bolano.jpg';
import kahloImg from '../images/kahlo.jpg';
import beauvoirImg from '../images/beauvoir.jpg';
import { FaPalette, FaBook, FaAtom, FaLaptopCode, FaFeather, FaDove, FaUniversity, FaFlask, FaQuoteRight, FaRocket, FaHeart, FaLightbulb, FaPen, FaStar, FaScroll, FaPaintBrush } from 'react-icons/fa';

const characters = [
  {
    id: 1,
    name: 'Frida Kahlo',
    title: 'Revolutionary Artist',
    image: kahloImg
  },
  {
    id: 2,
    name: 'Julio Cortázar',
    title: 'Surrealist Author',
    image: cortazarImg
  },
  {
    id: 3,
    name: 'Steve Jobs',
    title: 'Tech Visionary',
    image: jobsImg
  },
  {
    id: 4,
    name: 'Simone de Beauvoir',
    title: 'Existentialist Philosopher',
    image: beauvoirImg
  },
  {
    id: 5,
    name: 'Marie Curie',
    title: 'Pioneering Physicist',
    image: curieImg
  },
  {
    id: 6,
    name: 'Roberto Bolaño',
    title: 'Literary Revolutionary',
    image: bolanoImg
  },
  {
    id: 7,
    name: 'Albert Einstein',
    title: 'Theoretical Physicist',
    image: einsteinImg
  },
  {
    id: 8,
    name: 'Gabriel García Márquez',
    title: 'Master of Magical Realism',
    image: marquezImg
  },
  {
    id: 9,
    name: 'Nikola Tesla',
    title: 'Inventor & Engineer',
    image: teslaImg
  },
  {
    id: 10,
    name: 'Princess Diana',
    title: 'Humanitarian',
    image: dianaImg
  },
  {
    id: 11,
    name: 'J. Krishnamurti',
    title: 'Philosophical Teacher',
    image: krishnamurtiImg
  },
  {
    id: 12,
    name: 'Martin Luther King Jr',
    title: 'Civil Rights Leader',
    image: mlkImg
  },
  {
    id: 13,
    name: 'Maya Angelou',
    title: 'Poet & Civil Rights Activist',
    image: angelouImg
  },
  {
    id: 14,
    name: 'Stephen Hawking',
    title: 'Theoretical Physicist',
    image: hawkingImg
  },
  {
    id: 15,
    name: 'Mahatma Gandhi',
    title: 'Non-Violence Leader',
    image: gandhiImg
  },
  {
    id: 16,
    name: 'Carl Sagan',
    title: 'Astronomer & Science Communicator',
    image: saganImg
  },
  {
    id: 17,
    name: 'Benjamin Franklin',
    title: 'Founding Father & Polymath',
    image: franklinImg
  },
  {
    id: 18,
    name: 'Leonardo da Vinci',
    title: 'Renaissance Polymath',
    image: davinciImg
  }
];

// Complete field mapping
const getFieldIcon = (character) => {
  const fields = {
    'Frida Kahlo': <FaPalette />,
    'Julio Cortázar': <FaBook />,
    'Steve Jobs': <FaLaptopCode />,
    'Simone de Beauvoir': <FaFeather />,
    'Marie Curie': <FaAtom />,
    'Martin Luther King Jr': <FaDove />,
    'J. Krishnamurti': <FaUniversity />,
    'Albert Einstein': <FaAtom />,
    'Maya Angelou': <FaQuoteRight />,
    'Stephen Hawking': <FaRocket />,
    'Princess Diana': <FaHeart />,
    'Nikola Tesla': <FaLightbulb />,
    'Roberto Bolaño': <FaPen />,
    'Carl Sagan': <FaStar />,
    'Benjamin Franklin': <FaScroll />,
    'Leonardo da Vinci': <FaPaintBrush />,
    'Mahatma Gandhi': <FaDove />,
    'Gabriel García Márquez': <FaBook />
  };
  return fields[character.name];
};

function CharacterSelect({ onSelectCharacter, selectedCharacters = [], searchQuery = '' }) {
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    character.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="character-grid">
      {filteredCharacters.map((character) => (
        <div 
          key={character.id} 
          className={`character-card ${selectedCharacters.find(c => c.id === character.id) ? 'selected' : ''}`}
          onClick={() => onSelectCharacter(character)}
        >
          <div className="field-icon">
            {getFieldIcon(character)}
          </div>
          <img src={character.image} alt={character.name} />
          <div className="character-info">
            <h3>{character.name}</h3>
            <p>{character.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterSelect;
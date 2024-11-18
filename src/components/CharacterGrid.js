import React, { useState } from 'react';
import ChatInterface from './ChatInterface';

const characters = [
  {
    id: 'julio-cortazar',
    name: 'Julio Cortázar',
    image: '/images/cortazar.jpg',
    description: 'Argentine novelist',
    works: [
      {
        title: 'Hopscotch',
        type: 'Novel',
        link: 'https://www.penguinrandomhouse.com/books/40104/hopscotch-by-julio-cortazar/',
        year: '1963'
      },
      {
        title: 'Blow-Up and Other Stories',
        type: 'Short Stories',
        link: 'https://www.penguinrandomhouse.com/books/40103/blow-up-and-other-stories-by-julio-cortazar/',
        year: '1967'
      },
      {
        title: '62: A Model Kit',
        type: 'Novel',
        link: 'https://www.ndbooks.com/book/62-a-model-kit/',
        year: '1968'
      }
    ]
  },
  {
    name: 'Frida Kahlo',
    image: '/images/frida-kahlo.jpg',
    description: 'Mexican artist',
    works: [
      {
        title: 'The Two Fridas',
        type: 'Painting',
        link: 'https://www.fridakahlo.org/the-two-fridas.jsp',
        year: '1939'
      },
      {
        title: 'Self-Portrait with Thorn Necklace and Hummingbird',
        type: 'Painting',
        link: 'https://www.fridakahlo.org/self-portrait-with-thorn-necklace-and-hummingbird.jsp',
        year: '1940'
      },
      {
        title: 'The Broken Column',
        type: 'Painting',
        link: 'https://www.fridakahlo.org/the-broken-column.jsp',
        year: '1944'
      }
    ]
  },
  {
    name: 'Simone de Beauvoir',
    image: '/images/simone-de-beauvoir.jpg',
    description: 'French philosopher and feminist theorist',
    works: [
      {
        title: 'The Second Sex',
        type: 'Book',
        link: 'https://www.penguinrandomhouse.com/books/37132/the-second-sex-by-simone-de-beauvoir/',
        year: '1949'
      },
      {
        title: 'The Ethics of Ambiguity',
        type: 'Book',
        link: 'https://www.opencourtbooks.com/books_n/ethics_ambiguity.htm',
        year: '1947'
      },
      {
        title: 'Memoirs of a Dutiful Daughter',
        type: 'Book',
        link: 'https://www.penguinrandomhouse.com/books/37129/memoirs-of-a-dutiful-daughter-by-simone-de-beauvoir/',
        year: '1958'
      }
    ]
  },
  {
    name: 'Albert Einstein',
    image: '/images/einstein.jpg',
    description: 'Theoretical physicist',
    works: [
      {
        title: 'Relativity: The Special and General Theory',
        type: 'Book',
        link: 'https://www.gutenberg.org/ebooks/36114',
        year: '1916'
      },
      {
        title: 'The Evolution of Physics',
        type: 'Book',
        link: 'https://archive.org/details/evolutionofphysi033254mbp',
        year: '1938'
      },
      {
        title: 'On the Electrodynamics of Moving Bodies',
        type: 'Paper',
        link: 'https://en.wikisource.org/wiki/On_the_Electrodynamics_of_Moving_Bodies_(1920_edition)',
        year: '1905'
      }
    ]
  }
]; 

function CharacterGrid() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter({...character});
  };

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character-card"
          onClick={() => handleCharacterClick(character)}
        >
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>{character.description}</p>
        </div>
      ))}
      {selectedCharacter && (
        <ChatInterface 
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

export default CharacterGrid; 
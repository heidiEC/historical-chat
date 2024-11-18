import React from 'react';
import './WorksList.css';

function WorksList({ character }) {
  return (
    <div className="works-list">
      <h3>{character.name}'s Works</h3>
      <div className="works-grid">
        {character.works && character.works.map((work, index) => (
          <div key={index} className="work-card">
            <a 
              href={work.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="work-title"
            >
              <h4>{work.title}</h4>
            </a>
            <p className="work-meta">{work.type} • {work.year}</p>
            {work.description && (
              <p className="work-description">{work.description}</p>
            )}
            {work.quote && (
              <blockquote className="work-quote">
                {work.quote}
              </blockquote>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksList; 
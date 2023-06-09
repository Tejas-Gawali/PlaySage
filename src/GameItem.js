import React from 'react';

const GameItem = ({ game }) => {
  return (
    <li>
      <h3>{game.title}</h3>
      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
      <p>Description: {game.description}</p>
      {/* Render additional game details */}
    </li>
  );
};

export default GameItem;

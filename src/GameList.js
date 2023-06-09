import React from 'react';
import GameItem from './GameItem';

const GameList = ({ games, userPreferences }) => {
  const filteredGames = games.filter((game) => {
    // Implement your filtering logic based on user preferences
    // For example:
    // return game.genre === userPreferences.genre && game.platform === userPreferences.platform;
    return true; // Placeholder for demonstration purposes
  });

  return (
    <div>
      <h2>Recommended Games</h2>
      {filteredGames.length === 0 ? (
        <p>No games found.</p>
      ) : (
        <ul>
          {filteredGames.map((game) => (
            <GameItem key={game.id} game={game} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameList;

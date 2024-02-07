import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import DraggablePlayerCard from "./components/DraggablePlayerCard/DraggablePlayerCard";

import { data } from "./data/Players";
import "./App.css";

function App() {
  const [players, setPlayers] = useState(data);

  const handleDragDrop: OnDragEndResponder = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedPlayers = [...players];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedPlayer] = reorderedPlayers.splice(sourceIndex, 1);
      reorderedPlayers.splice(destinationIndex, 0, removedPlayer);
      return setPlayers(reorderedPlayers);
    }
  };

  return (
    <div className='layout__wrapper'>
      <div className='card'>
        <DragDropContext onDragEnd={handleDragDrop}>
          <div className='header'>
            <h1>Player Ranking</h1>
          </div>
          <Droppable droppableId='ROOT' type='group'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {players.map((player, index) => (
                  <DraggablePlayerCard
                    player={player}
                    index={index}
                    key={player.id}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
